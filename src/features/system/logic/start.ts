import { system } from "..";
import { Command } from "../../../entities/command/command";
import { COMMAND_TYPE } from "../../../entities/command/command.type";
import { Process, ProcessCtx } from "../../../entities/process/process";
import { IProcess, PROCESS_STATE } from "../../../entities/process/process.type";
import { Program } from "../../../entities/program/program";
import { createAppAsyncThunk } from "../../../shared/store";
import { collectTickData } from "../../monitoring";
import { processes } from "../../process";
import { openWindow } from "../../windows";

const INTERVAL_IN_MILLISECONDS = 100;

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
        try {
        const { processes: { running }, system: { tick } } = thunkAPI.getState();

        const orderedProcesses = Object.values(running).sort((a, b) => a.ctx.priority - b.ctx.priority);
        const groupedProcess = orderedProcesses.reduce((group, process) => {
            const { state } = process.ctx;
            (group[state] = group[state] || []).push(process);
            return group;
        }, {} as Record<string, IProcess[]>)

        let firstProcess = groupedProcess[PROCESS_STATE.RUNNING]?.[0];

        if(!firstProcess){
            const possibleFirstProcess = groupedProcess[PROCESS_STATE.READY]?.[0];
            if(!possibleFirstProcess){
                return;
            }
            firstProcess = possibleFirstProcess;
        }

        if(!firstProcess){
            return;
        }

        const nextProcess = Process({
            ctx: ProcessCtx({
                ...firstProcess.ctx,
                state: PROCESS_STATE.RUNNING,
                start: firstProcess.ctx.start || tick,
            }),
            program: Program({ ...firstProcess.program }),
            pid: firstProcess.pid,
        })

        thunkAPI.dispatch(processes.actions.updateRunning({ [nextProcess.pid]: Process({ ...nextProcess }) }));

        const pointer = Math.max(nextProcess.ctx.pointer, 0);

        const commandsCount = nextProcess.ctx.commands.length;

        if(pointer >= commandsCount){
            return;
        }
    
        const command = Command({...nextProcess.ctx.commands[pointer]});

        nextProcess.ctx.commandsLeft = Math.max(0, nextProcess.ctx.commandsLeft - 1);

        if(command.exeCtx.type === COMMAND_TYPE.WAITING && nextProcess.ctx.state !== PROCESS_STATE.WAITING){
            nextProcess.ctx.state = PROCESS_STATE.WAITING;
            thunkAPI.dispatch(processes.actions.updateRunning({ [nextProcess.pid]: Process({ ...nextProcess }) }));
            return;
        }
        if(nextProcess.ctx.commandsLeft <= 0){
            nextProcess.ctx.end = tick;
            nextProcess.ctx.state = PROCESS_STATE.WAITING;
            nextProcess.ctx.priority = 0;
            thunkAPI.dispatch(
                processes.actions
                    .updateRunning(
                        { 
                            [nextProcess.pid]: Process({ ...nextProcess })
                        }
                    )
            );
            command.exeCtx.onComplete?.(Process({ ...nextProcess }));
            return;
        }
        if(nextProcess.ctx.start !== null && (nextProcess.ctx.start + nextProcess.ctx.quantum) <= tick){
            nextProcess.ctx.state = PROCESS_STATE.READY;
            nextProcess.ctx.start = null;
        }
        thunkAPI.dispatch(
            processes.actions
                .updateRunning(
                    { 
                        [nextProcess.pid]: Process({ ...nextProcess })
                    }
                )
        );
        } catch (error) {
            console.error(error);
        }
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
            thunkApi.dispatch(runTasks());
            thunkApi.dispatch(system.actions.upTick());
            thunkApi.dispatch(updateProcesses());

            thunkApi.dispatch(collectTickData());
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