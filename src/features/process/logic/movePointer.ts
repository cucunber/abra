import { processes } from "..";
import { COMMAND_TYPE } from "../../../entities/command/command.type";
import { Process, ProcessCtx } from "../../../entities/process/process";
import { IProcess, PROCESS_STATE } from "../../../entities/process/process.type";
import { createAppAsyncThunk } from "../../../shared/store";

interface IMovePointer {
    pid: number,
    pointer: number,
}

export const moveProcessPointer = createAppAsyncThunk(
    'process/moveProcessPointer',
    async ({ pid, pointer }: IMovePointer, thunkAPI) => {
       try {
        const { processes: { running }, system: { system: { cpu }} } = thunkAPI.getState();

        const selectedProcess = running[pid];

        if(!selectedProcess){
            return;
        }

        if(selectedProcess.ctx.state !== PROCESS_STATE.WAITING){
            return;
        }

        const { ctx } = selectedProcess;
        const { commands } = ctx;

        if(commands.length < pointer){
            return;
        }

        const nextCommand = selectedProcess.ctx.commands[pointer];
        const isWaiting = nextCommand.exeCtx.type === COMMAND_TYPE.WAITING;

        const commandsLeft = Math.ceil(nextCommand.exeCtx.ticks / cpu.ghz);

        const prioritized = Object.values(running);
        prioritized.sort((a, b) => a.ctx.priority - b.ctx.priority);

        const processToUpdate = {} as Record<number, IProcess>;

        const nextProcess = Process({
            ...selectedProcess,
            ctx: ProcessCtx({
                ...selectedProcess.ctx,
                quantum: commandsLeft,
                pointer: pointer,
                state: isWaiting ? PROCESS_STATE.WAITING : PROCESS_STATE.READY,
                commandsLeft: commandsLeft,
            })
        })

        for(const process of prioritized){
            const { ctx } = process;
            if(ctx.commandsLeft >= commandsLeft){
                nextProcess.ctx.priority = ctx.priority;
                processToUpdate[process.pid] = Process({ ...process });
                processToUpdate[process.pid].ctx.priority += 1;
                processToUpdate[process.pid].ctx.state = PROCESS_STATE.READY;
            }
        }

        processToUpdate[pid] = nextProcess;

        thunkAPI.dispatch(processes.actions.updateRunning(processToUpdate));
        return;
       } catch (err){
        console.log(err);
       }
    }
)