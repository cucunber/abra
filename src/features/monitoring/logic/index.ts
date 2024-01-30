import { collectHDDData } from "./hdd";
import { createAppAsyncThunk } from "../../../shared/store";
import { collectRAMData } from "./ram";
import { collectCPUData } from "./cpu";

export const collectTickData = createAppAsyncThunk(
    'monitoring/collectTickData',
    async (_, thunkAPI) => {
        thunkAPI.dispatch(collectHDDData());
        thunkAPI.dispatch(collectRAMData());
        thunkAPI.dispatch(collectCPUData());
    }
)