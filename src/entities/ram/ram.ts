import { IRAM } from "./ram.type";

export function RAM({ size }: IRAM): IRAM {
    return {
        size
    }
}