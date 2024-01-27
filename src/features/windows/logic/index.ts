import { windows } from "..";
import { IProcess } from "../../../entities/process/process.type";
import { Window } from "../../../entities/window/window";
import { WINDOW_STATE } from "../../../entities/window/window.type";
import { createAppAsyncThunk } from "../../../shared/store";

export const openWindow = createAppAsyncThunk(
    'windows/openWindow',
    async (process: IProcess, thunkApi) => {
        const window = Window({ process, state: WINDOW_STATE.OPEN });
        thunkApi.dispatch(windows.actions.openWindow(window));
        thunkApi.fulfillWithValue(window);
    }
)