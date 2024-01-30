import { ITickData } from "./tickData.type";

export function TickData({ tick, value }: ITickData): ITickData {
    return {
        tick,
        value
    }
}