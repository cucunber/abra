import { TickData } from "../../../entities/tickData/tickData";
import { createAppAsyncThunk } from "../../../shared/store";
import { monitoring as m } from "..";

const MAX_POINTS_COUNT = 30;

export const collectCPUData = createAppAsyncThunk(
    'monitoring/collectCPUData',
    async (_, thunkApi) => {
        const { system, processes, monitoring } = thunkApi.getState();

        const commandsCPURequired = Object.values(processes.running)
            .reduce((acc, process) => {
                const { ctx } = process;
                return acc + ctx.commands[ctx.pointer].exeCtx.size
            }, 0);

        const newCPUData = TickData({
            tick: system.tick,
            value: commandsCPURequired
        })

        if(monitoring.hdd.length < MAX_POINTS_COUNT){
            const nextHDDState = [...monitoring.cpu, newCPUData];
            thunkApi.dispatch(m.actions.setCPU(nextHDDState));
            thunkApi.fulfillWithValue(nextHDDState);
            return;
        }

        const nextHDDState = [...monitoring.cpu.slice(1), newCPUData];
        thunkApi.dispatch(m.actions.setCPU(nextHDDState));
        thunkApi.fulfillWithValue(nextHDDState);
    }
)