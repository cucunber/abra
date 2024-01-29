import { TickData } from "../../../entities/tickData/tickData";
import { createAppAsyncThunk } from "../../../shared/store";
import { monitoring as m } from "../../../features/monitoring";

const MAX_POINTS_COUNT = 30;

export const collectRAMData = createAppAsyncThunk(
    'monitoring/collectRAMData',
    async (_, thunkApi) => {
        const { system, processes, monitoring } = thunkApi.getState();

        const runningMemSize = Object.values(processes.running)
            .reduce((acc, process) => {
                const commandsMemSize = process.ctx.commands.reduce((commandsAcc, command) => commandsAcc + command.exeCtx.size, 0);
                return acc + commandsMemSize;
            }, 0);

        const newRAMData = TickData({
            tick: system.tick,
            value: runningMemSize
        })

        if(monitoring.ram.length < MAX_POINTS_COUNT){
            const nextRAMState = [...monitoring.ram, newRAMData];
            thunkApi.dispatch(m.actions.setRam(nextRAMState));
            return;
        }

        const nextRAMState = [...monitoring.ram.slice(1), newRAMData];
        thunkApi.dispatch(m.actions.setRam(nextRAMState));
        thunkApi.fulfillWithValue(nextRAMState);
    }
)