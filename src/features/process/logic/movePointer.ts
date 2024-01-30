import { processes } from "..";
import { COMMAND_TYPE } from "../../../entities/command/command.type";
import { Process, ProcessCtx } from "../../../entities/process/process";
import { PROCESS_STATE } from "../../../entities/process/process.type";
import { createAppAsyncThunk } from "../../../shared/store";
import { HZ_UNITS, convertUnitsToHz } from "../../../shared/utils/systemUnits";

interface IMovePointer {
    pid: number,
    pointer: number,
}

export const moveProcessPointer = createAppAsyncThunk(
    'process/moveProcessPointer',
    async ({ pid, pointer }: IMovePointer, thunkAPI) => {
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

        const quantumsToDo = Math.min(
            cpu.ghz / convertUnitsToHz(1, HZ_UNITS.mhz),
            commandsLeft
        );

        const nextProcess = Process({
            ...selectedProcess,
            ctx: ProcessCtx({
                ...selectedProcess.ctx,
                quantum: 4,
                pointer: pointer,
                state: isWaiting ? PROCESS_STATE.WAITING : PROCESS_STATE.READY,
                commandsLeft: commandsLeft,
            })
        })

        thunkAPI.dispatch(processes.actions.updateRunning({ [pid]: nextProcess }));
        return;
    }
)