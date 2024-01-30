import { configureStore } from "@reduxjs/toolkit";
import { system } from "../../features/system";
import { installedPrograms } from "../../features/installedPrograms";
import { processes } from "../../features/process";
import { windows } from "../../features/windows";
import { startSystem } from "../../features/system/logic/start";
import { monitoring } from "../../features/monitoring/model";

export const store = configureStore({
    reducer: {
        system: system.reducer,
        installedPrograms: installedPrograms.reducer,
        processes: processes.reducer,
        windows: windows.reducer,
        monitoring: monitoring.reducer,
    },
    middleware: (middleware) => middleware({
        serializableCheck: false
    })
})

store.dispatch(startSystem());

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch