import { Dispatch, SetStateAction, createContext } from "react";

interface IContextMenuContext {
    open: boolean,
    setOpen: Dispatch<SetStateAction<IContextMenuContext['open']>>
}

export const ContextMenuContext = createContext<IContextMenuContext>(null as unknown as IContextMenuContext)