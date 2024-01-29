import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_SYSTEM_CONFIG } from "../../../shared/config/system";
import { ISystem } from "../../../entities/system/system.type";

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
        }
    },
    selectors: {
        selectHDD: state => state.system.hdd,
        selectRAM: state => state.system.ram,
        selectTick: state => state.tick,
        selectCPU: state => state.system.cpu,
    }
})
