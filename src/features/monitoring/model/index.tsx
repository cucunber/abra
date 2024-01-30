import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITickData } from "../../../entities/tickData/tickData.type";

interface IMonitoring {
    hdd: ITickData[],
    ram: ITickData[],
    cpu: ITickData[],
}

const DEFAULT_MONITORING: IMonitoring = {
    hdd: [],
    ram: [],
    cpu: [],
}

export const monitoring = createSlice({
    name: 'monitoring',
    initialState: DEFAULT_MONITORING,
    reducers: {
        setHdd: (state, action: PayloadAction<IMonitoring['hdd']>) => {
            state.hdd = action.payload;
        },
        setRam: (state, action: PayloadAction<IMonitoring['ram']>) => {
            state.ram = action.payload;
        },
        setCPU: (state, action: PayloadAction<IMonitoring['cpu']>) => {
            state.cpu = action.payload;
        },
    },
    selectors: {
        selectHDD: state => state.hdd,
        selectRAM: state => state.ram,
        selectCPU: state => state.cpu,
    }
})