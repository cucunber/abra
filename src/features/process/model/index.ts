import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProcess } from "../../../entities/process/process.type";

const INITIAL_PROCESSES_STATE = {
    pid: 0,
    queue: [] as IProcess[],
    running: {} as Record<number, IProcess>,
};

export const processes = createSlice({
    name: 'processes',
    initialState: INITIAL_PROCESSES_STATE,
    reducers: {
        addToProcess: (state, action: PayloadAction<IProcess> ) => {
            state.running[action.payload.pid] = action.payload;
        },
        removeFromProcess: (state, action: PayloadAction<IProcess['pid']> ) => {
            delete state.running[action.payload];
        },
        addToQueue: (state, action: PayloadAction<IProcess> ) => {
            state.queue.push(action.payload);
        },
        removeFromQueue: (state, action: PayloadAction<IProcess['pid']>) => {
            state.queue = state.queue.filter((process) => process.pid !== action.payload);
        },
        updatePid: (state) => {
            state.pid += 1;
        },
        updateRunning: (state, action: PayloadAction<Record<number, IProcess>>) => {
            state.running = {
                ...state.running,
                ...action.payload
            };
        }
    },
    selectors: {
        selectRunningProcesses: state => state.running,
    },
})