import { ICPU } from "../cpu/cpu.type";
import { IHDD } from "../hdd/hdd.type";
import { IRAM } from "../ram/ram.type";

export interface ISystem {
    cpu: ICPU,
    hdd: IHDD,
    ram: IRAM
}
