import { TickData } from "../../../entities/tickData/tickData";
import { createAppAsyncThunk } from "../../../shared/store";
import { monitoring as m } from "../../../features/monitoring";

const MAX_POINTS_COUNT = 30;

export const collectHDDData = createAppAsyncThunk(
    'monitoring/collectHDDData',
    async (_, thunkApi) => {
        const { system, installedPrograms, monitoring } = thunkApi.getState();

        const installedProgramsMemSize = Object.values(installedPrograms)
            .reduce((acc, program) => acc + program.exeCtx.size, 0);

        const files = system.system.hdd.files.reduce((size, file) => file.size + size, 0);

        const newHDDData = TickData({
            tick: system.tick,
            value: installedProgramsMemSize + files
        })

        if(monitoring.hdd.length < MAX_POINTS_COUNT){
            const nextHDDState = [...monitoring.hdd, newHDDData];
            thunkApi.dispatch(m.actions.setHdd(nextHDDState));
            thunkApi.fulfillWithValue(nextHDDState);
            return;
        }

        const nextHDDState = [...monitoring.hdd.slice(1), newHDDData];
        thunkApi.dispatch(m.actions.setHdd(nextHDDState));
        thunkApi.fulfillWithValue(nextHDDState);
    }
)