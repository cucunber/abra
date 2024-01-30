import { IProcess } from "../process/process.type";

export const COMMAND_TYPE = {
    WAITING: 'waiting',
    DEFAULT: 'default'
}

export interface ICommandMeta {
    name: string;
}

export interface ICommandExeCtx {
    size: number;
    ticks: number;
    type: typeof COMMAND_TYPE[keyof typeof COMMAND_TYPE],
    onComplete?: (ctx: IProcess) => void;
}

export interface ICommand {
    meta: ICommandMeta,
    exeCtx: ICommandExeCtx,
}