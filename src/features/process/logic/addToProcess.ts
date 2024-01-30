import { IProcess, PROCESS_STATE } from "../../../entities/process/process.type";
import { processes } from "..";
import { IProgram } from "../../../entities/program/program.type";
import { createAppAsyncThunk } from "../../../shared/store";
import { Process, ProcessCtx, processesResourcesConsumption } from "../../../entities/process/process";
import { windows } from "../../windows";
import { commandsRAMConsumption } from "../../../entities/command/command";

export const addProgramToProcess = createAppAsyncThunk(
    'process/addProgramToProcess',
    async (program: IProgram, thunkApi) => {
        const { system } = thunkApi.getState().system;
        const { pid, running } = thunkApi.getState().processes;

        const requiredRAM = commandsRAMConsumption(program.exeCtx.commands);

        const {
            ram: runningRAM,
        } = processesResourcesConsumption(Object.values(running));

        const totalRAM = runningRAM + requiredRAM;

        if(totalRAM > system.ram.size) {
            console.warn(`no space`, totalRAM / system.ram.size);
            thunkApi.rejectWithValue({ error: 'no space' });
            return;
        }

        const nextPid = pid + 1;

        const commandsLeft = Math.ceil(program.exeCtx.commands[0].exeCtx.ticks / system.cpu.ghz);

        const prioritized = Object.values(running);
        prioritized.sort((a, b) => a.ctx.priority - b.ctx.priority);

        const processToUpdate = {} as Record<number, IProcess>;

        const newProcess = Process({
            pid: nextPid,
            program: program,
            ctx: ProcessCtx({
                pointer: 0,
                priority: 0,
                quantum: commandsLeft,
                commands: program.exeCtx.commands,
                state: PROCESS_STATE.READY,
                commandsLeft: commandsLeft,
            })
        })

        for(const process of prioritized){
            const { ctx } = process;
            if(ctx.commandsLeft >= commandsLeft){
                newProcess.ctx.priority = ctx.priority;
                processToUpdate[process.pid] = process;
                processToUpdate[process.pid].ctx.priority += 1;
                processToUpdate[process.pid].ctx.state = PROCESS_STATE.READY;
            }
        }
        
        thunkApi.dispatch(processes.actions.updatePid());
        thunkApi.dispatch(processes.actions.addToQueue(newProcess));
        thunkApi.dispatch(processes.actions.updateRunning(processToUpdate));
       
        thunkApi.fulfillWithValue(process);
    }
)

export const removeFromProcess = createAppAsyncThunk(
    'process/removeFromProcess',
    async (pid: IProcess['pid'], thunkApi) => {
        thunkApi.dispatch(processes.actions.removeFromProcess(pid));
        thunkApi.dispatch(windows.actions.closeWindow(pid));
    }
)