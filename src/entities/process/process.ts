import { commandsRAMConsumption } from "../command/command";
import { Program } from "../program/program";
import { IProcess, IProcessCtx, PROCESS_STATE } from "./process.type";

export function ProcessCtx({ pointer, priority, quantum, commands, state = PROCESS_STATE.INIT }: 
    Omit<IProcessCtx, 'state'> & Partial<Pick<IProcessCtx, 'state'>>): IProcessCtx {
    return {
        pointer,
        priority,
        quantum,
        state,
        commands
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