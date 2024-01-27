import { configureStore } from "@reduxjs/toolkit";
import { system } from "../../features/system";
import { installedPrograms } from "../../features/installedPrograms";
import { processes } from "../../features/process";
import { windows } from "../../features/windows";

export const store = configureStore({
    reducer: {
        system: system.reducer,
        installedPrograms: installedPrograms.reducer,
        processes: processes.reducer,
        windows: windows.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch