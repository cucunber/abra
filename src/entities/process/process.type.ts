import { ICommand } from "../command/command.type";
import { IProgram } from "../program/program.type";

export const PROCESS_STATE = {
    INIT: 'init',
    READY: 'ready',
    RUNNING: 'running',
    WAITING: 'waiting',
    END: 'end',
}

export interface IProcessCtx {
    pointer: number;
    priority: number;
    quantum: number;
    state: typeof PROCESS_STATE[keyof typeof PROCESS_STATE];
    commands: ICommand[];
    commandsLeft: number;
    start: number | null,
    end: number | null,
 }
 
export interface IProcess {
    pid: number;
    program: IProgram;
    ctx: IProcessCtx;
}