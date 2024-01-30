import { COMMAND_TYPE, ICommand, ICommandExeCtx, ICommandMeta } from "./command.type";

export function CommandMeta({ name }: ICommandMeta): ICommandMeta {
    return {
        name
    }
}

export function CommandExeCtx({ ticks, size, type = COMMAND_TYPE.DEFAULT, onComplete }: 
    Omit<ICommandExeCtx, 'type'> & 
    Partial<Pick<ICommandExeCtx, 'type'>
>): ICommandExeCtx {
    return {
        ticks,
        size,
        type,
        onComplete
    }
}

export function Command({ meta, exeCtx }: ICommand): ICommand {
    return {
        meta: CommandMeta(meta),
        exeCtx: CommandExeCtx(exeCtx),
    }
}

export function commandsRAMConsumption(commands: ICommand[]) {
    return commands.reduce((acc, command) => acc + command.exeCtx.size, 0);
}