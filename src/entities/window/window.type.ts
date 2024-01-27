import { IProcess } from "../process/process.type";

export const WINDOW_STATE = {
    OPEN: 'open',
    COLLAPSED: 'collapsed'
}

export interface IWindow {
    process: IProcess,
    state: typeof WINDOW_STATE[keyof typeof WINDOW_STATE]
}