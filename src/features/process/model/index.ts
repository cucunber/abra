import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProcess } from "../../../entities/process/process.type";

const INITIAL_PROCESSES_STATE = {
    pid: 0,
    processes: {} as Record<number, IProcess>
};

export const processes = createSlice({
    name: 'processes',
    initialState: INITIAL_PROCESSES_STATE,
    reducers: {
        addToProcess: (state, action: PayloadAction<IProcess> ) => {
            state.processes[action.payload.pid] = action.payload;
        },
        removeFromProcess: (state, action: PayloadAction<IProcess['pid']> ) => {
            delete state.processes[action.payload];
        },
        updatePid(state) {
            state.pid += 1;
        }
    },
    selectors: {
        selectRunningProcesses: state => state.processes,
    },
})