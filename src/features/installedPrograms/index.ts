import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_INSTALLED_PROGRAMS } from "../../shared/config/programs";
import { IProgram } from "../../entities/program/program.type";

const INITIAL_INSTALLED_PROGRAMS_STATE = DEFAULT_INSTALLED_PROGRAMS.reduce((byName, program) => {
    const { meta } = program;
    byName[meta.name] = program;
    return byName;
}, {} as Record<string, IProgram >)

export const installedPrograms = createSlice({
    name: 'installedPrograms',
    initialState: INITIAL_INSTALLED_PROGRAMS_STATE,
    reducers: {
        install(state, action: PayloadAction<IProgram>) {
            const { payload } = action;
            if(state[payload.meta.name]) return;
            state[payload.meta.name] = payload;
        },
        delete(state, action: PayloadAction<IProgram>) {
            const { payload } = action;
            delete state[payload.meta.name];
        }
    },
    selectors: {
        selectPrograms: (state) => state,
    }
}) 
