import { ICommand, ICommandExeCtx, ICommandMeta } from "./command.type";

export function CommandMeta({ name }: ICommandMeta): ICommandMeta {
    return {
        name
    }
}

export function CommandExeCtx({ ticks, size }: ICommandExeCtx): ICommandExeCtx {
    return {
        ticks,
        size
    }
}

export function Command({ meta, exeCtx }: ICommand): ICommand {
    return {
        meta: CommandMeta(meta),
        exeCtx: CommandExeCtx(exeCtx),
    }
}