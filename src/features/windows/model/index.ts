import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWindow } from "../../../entities/window/window.type";

interface IWindows {
    order: IWindow[],
}

const INITIAL_STATE: IWindows = {
    order: []
}

export const windows = createSlice({
    name: 'windows',
    initialState: INITIAL_STATE,
    reducers: {
        openWindow(state, action: PayloadAction<IWindow>){
            const { payload } = action;
            state.order.unshift(payload);
        },
        closeWindow(state, action: PayloadAction<IWindow['process']['pid']>) {
            const { payload } = action;
            state.order = state.order.filter((win) => win.process.pid !== payload);
        },
        changeWinState(state, action: PayloadAction<{ pid: IWindow['process']['pid'], state: IWindow['state']}>){
            const { payload } = action;
            state.order = state.order.map((win) => {
                if(win.process.pid === payload.pid){
                    win.state = payload.state;
                }
                return win;
            });
        }
    },
    selectors: {
        selectWindows: state => state.order
    }
})