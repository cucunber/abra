import { ICommand } from "../command/command.type";

export interface IProgramMeta {
    icon: string,
    name: string,
}

export interface IProgramExeCtx {
    size: number,
    commands: ICommand[],
}

export interface IProgram {
    meta: IProgramMeta,
    exeCtx: IProgramExeCtx,
}