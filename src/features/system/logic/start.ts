import { system } from "..";
import { COMMAND_TYPE } from "../../../entities/command/command.type";
import { Process, ProcessCtx } from "../../../entities/process/process";
import { PROCESS_STATE } from "../../../entities/process/process.type";
import { Program } from "../../../entities/program/program";
import { createAppAsyncThunk } from "../../../shared/store";
import { collectTickData } from "../../monitoring";
import { processes } from "../../process";
import { openWindow } from "../../windows";

const INTERVAL_IN_MILLISECONDS = 500;

export const updateProcesses = createAppAsyncThunk(
    'system/updateProcesses',
    async (_, thunkAPI) => {
        const { queue } = thunkAPI.getState().processes;
        const nextProcess = queue[0];
        if(nextProcess){
            thunkAPI.dispatch(processes.actions.addToProcess(nextProcess));
            thunkAPI.dispatch(processes.actions.removeFromQueue(nextProcess.pid));
            thunkAPI.dispatch(openWindow(nextProcess));
        }
    }
)

export const runTasks = createAppAsyncThunk(
    'system/runTasks',
    async (_, thunkAPI) => {
        const { running } = thunkAPI.getState().processes;

        const orderedProcesses = Object.values(running).sort((a, b) => b.ctx.priority - a.ctx.priority);

        let firstProcess = orderedProcesses.find((process) => process.ctx.state === PROCESS_STATE.RUNNING);

        if(!firstProcess){
            const possibleFirstProcess = orderedProcesses.find((process) => process.ctx.state === PROCESS_STATE.READY);
            if(!possibleFirstProcess){
                return;
            }
            firstProcess = possibleFirstProcess;
        }

        const nextProcess = Process({
            ctx: ProcessCtx({
                ...firstProcess.ctx,
                state: PROCESS_STATE.RUNNING,
            }),
            program: Program({ ...firstProcess.program }),
            pid: firstProcess.pid,
        })
        
        const pointer = firstProcess.ctx.pointer || 0;

        const commandsCount = firstProcess.ctx.commands.length;

        if(pointer >= commandsCount){
            nextProcess.ctx.state = PROCESS_STATE.END;
        } else {
            const command = firstProcess.ctx.commands[pointer];
            if(command.exeCtx.type === COMMAND_TYPE.WAITING && nextProcess.ctx.state !== PROCESS_STATE.WAITING){
                nextProcess.ctx.state = PROCESS_STATE.WAITING;
                nextProcess.ctx.pointer += 1;
            } else {
                command.exeCtx.onComplete?.();
                nextProcess.ctx.pointer += 1;
            }
        }

        thunkAPI.dispatch(processes.actions.updateRunning({ [nextProcess.pid]: nextProcess }));
        thunkAPI.fulfillWithValue(true);
    }
)

export const startSystem = createAppAsyncThunk(
    'system/startSystem',
    async (_, thunkApi) => {
        const { intervalId } = thunkApi.getState().system;
        if(intervalId !== null) {
            thunkApi.fulfillWithValue(intervalId);
            return;
        }

        const newIntervalId = setInterval(() => {
            thunkApi.dispatch(system.actions.upTick());
            thunkApi.dispatch(updateProcesses());

            thunkApi.dispatch(collectTickData());
            thunkApi.dispatch(runTasks());
        }, INTERVAL_IN_MILLISECONDS);

        thunkApi.dispatch(system.actions.updateIntervalId(newIntervalId));
        thunkApi.fulfillWithValue(newIntervalId);
    }
)

export const stopSystem = createAppAsyncThunk(
    'system/stopSystem',
    async (_, thunkApi) => {
        const { intervalId } = thunkApi.getState().system;
        if(intervalId === null) {
            thunkApi.fulfillWithValue(true);
            return;
        }

        clearInterval(intervalId);
        thunkApi.fulfillWithValue(true);
    }
)