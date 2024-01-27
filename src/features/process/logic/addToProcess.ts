import { IProcess } from "../../../entities/process/process.type";
import { processes } from "..";
import { IProgram } from "../../../entities/program/program.type";
import { createAppAsyncThunk } from "../../../shared/store";
import { Process, ProcessCtx } from "../../../entities/process/process";
import { openWindow, windows } from "../../windows";

export const addToProcess = createAppAsyncThunk(
    'process/addToProcess', 
    async (process: IProcess, thunkApi) => {
        thunkApi.dispatch(processes.actions.addToProcess(process))
        thunkApi.fulfillWithValue(process);
    }
)

export const addProgramToProcess = createAppAsyncThunk(
    'process/addProgramToProcess',
    async (program: IProgram, thunkApi) => {
        const { pid } = thunkApi.getState().processes;
        const nextPid = pid + 1;
        const newProcess = Process({
            ctx: ProcessCtx({ pointer: 0, priority: 0, quantum: 0}),
            program,
            pid: nextPid,
        })
        thunkApi.dispatch(processes.actions.updatePid());
        thunkApi.dispatch(processes.actions.addToProcess(newProcess));
        thunkApi.dispatch(openWindow(newProcess));
        thunkApi.fulfillWithValue(process);
    }
)

export const removeFromProcess = createAppAsyncThunk(
    'process/removeFromProcess',
    async (pid: IProcess['pid'], thunkApi) => {
        thunkApi.dispatch(processes.actions.removeFromProcess(pid));
        thunkApi.dispatch(windows.actions.closeWindow(pid));
    }
)