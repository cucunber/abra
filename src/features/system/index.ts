import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_SYSTEM_CONFIG } from "../../shared/config/system";
import { ISystem } from "../../entities/system/system.type";

export const system = createSlice({
    name: 'system',
    initialState: DEFAULT_SYSTEM_CONFIG,
    reducers: {
        update(state, action: PayloadAction<Partial<ISystem>>) {
            const { payload } = action;
            return { ...state, ...payload };
        }
    }
})
