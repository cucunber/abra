import { ICPU } from "./cpu.type";

export function CPU({ ghz }: ICPU): ICPU {
    return {
        ghz
    }
}