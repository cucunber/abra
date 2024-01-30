import { Command, commandsRAMConsumption } from "../command/command";
import { Program } from "../program/program";
import { IProcess, IProcessCtx, PROCESS_STATE } from "./process.type";

export function ProcessCtx({ pointer, priority, quantum, commands, state = PROCESS_STATE.INIT, commandsLeft = 0, start = null, end = null }: 
    Omit<IProcessCtx, 'state' | 'commandsLeft' | 'start' | 'end'> & Partial<Pick<IProcessCtx, 'state' | 'commandsLeft' | 'start' | 'end' >>): IProcessCtx {
    return {
        pointer,
        priority,
        quantum,
        state,
        commands: commands.map(Command),
        commandsLeft,
        start,
        end
    }
}

export function Process({ ctx, program, pid }: IProcess): IProcess {
    return {
        pid,
        program: Program(program),
        ctx: ProcessCtx(ctx),
    }
}

export function processesResourcesConsumption(processes: IProcess[]) {
    let ram = 0;
    for ( const process of processes ) {
        ram += commandsRAMConsumption(process.ctx.commands);
    }
    return {
        ram
    }
}