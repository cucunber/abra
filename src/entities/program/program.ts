import { Command } from "../command/command";
import { IProgram, IProgramExeCtx, IProgramMeta } from "./program.type";

export function ProgramMeta({ icon, name }: IProgramMeta): IProgramMeta {
    return {
        icon,
        name
    }
}

export function ProgramExeCtx({ size, commands }: IProgramExeCtx): IProgramExeCtx {
    return {
        size,
        commands: commands.map(Command)
    }
}

export function Program({ meta, exeCtx }: IProgram): IProgram {
    return {
        meta: ProgramMeta(meta),
        exeCtx: ProgramExeCtx(exeCtx)
    }
}
