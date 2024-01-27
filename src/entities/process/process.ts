import { Program } from "../program/program";
import { IProcess, IProcessCtx } from "./process.type";

export function ProcessCtx({ pointer, priority, quantum }: IProcessCtx): IProcessCtx {
    return {
        pointer,
        priority,
        quantum
    }
}

export function Process({ ctx, pid, program }: IProcess): IProcess {
    return {
        pid,
        program: Program(program),
        ctx: ProcessCtx(ctx),
    }
}