export interface ICommandMeta {
    name: string;
}

export interface ICommandExeCtx {
    size: number;
    ticks: number;
}

export interface ICommand {
    meta: ICommandMeta,
    exeCtx: ICommandExeCtx,
}