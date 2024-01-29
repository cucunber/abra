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

        const newProcess = Process({
            pid: nextPid,
            program: program,
            ctx: ProcessCtx({
                pointer: 0,
                priority: 0,
                quantum: 0,
                commands: program.exeCtx.commands,
                state: PROCESS_STATE.READY
            })
        })
        
        thunkApi.dispatch(processes.actions.updatePid());
        thunkApi.dispatch(processes.actions.addToQueue(newProcess));
       
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