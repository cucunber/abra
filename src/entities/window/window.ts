import { IWindow } from "./window.type";

export function Window({ process, state }: IWindow): IWindow {
    return {
        process,
        state
    }
}