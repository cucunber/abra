import { createContext } from 'react';

interface IWindowContext {
    pid: number;
}

export const WindowContext = createContext(null as unknown as IWindowContext);