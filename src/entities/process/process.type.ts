import { IProgram } from "../program/program.type";

export interface IProcessCtx {
    pointer: number;
    priority: number;
    quantum: number;
 }
 
export interface IProcess {
    pid: number;
    program: IProgram;
    ctx: IProcessCtx;
}