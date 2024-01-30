import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_SYSTEM_CONFIG } from "../../../shared/config/system";
import { ISystem } from "../../../entities/system/system.type";
import { File } from "../../../entities/hdd/hdd";

interface ISystemState {
    system: ISystem,
    tick: number,
    intervalId: null | NodeJS.Timeout
}

const INITIAL_SYSTEM_CONFIG: ISystemState = {
    system: DEFAULT_SYSTEM_CONFIG,
    tick: 0,
    intervalId: null
}

export const system = createSlice({
    name: 'system',
    initialState: INITIAL_SYSTEM_CONFIG,
    reducers: {
        update(state, action: PayloadAction<Partial<ISystem>>) {
            const { payload } = action;
            state.system = { ...state.system, ...payload }
        },
        upTick(state){
            state.tick += 1;
        },
        updateIntervalId(state, action: PayloadAction<ISystemState['intervalId']>){
            state.intervalId = action.payload
        },
        addFile(state, action: PayloadAction<number>){
            state.system.hdd.segment += 1;
            const file = File({ id: state.system.hdd.segment, size: action.payload });
            state.system.hdd.files.push(file);
        },
        removeFile(state, action: PayloadAction<number>) {
            state.system.hdd.files = state.system.hdd.files.filter(file => file.id !== action.payload);
        },
        removeRandomFile(state){
            state.system.hdd.files = state.system.hdd.files.slice(1);
        }
    },
    selectors: {
        selectHDD: state => state.system.hdd,
        selectRAM: state => state.system.ram,
        selectTick: state => state.tick,
        selectCPU: state => state.system.cpu,
        selectFiles: state => state.system.hdd.files
    }
})
