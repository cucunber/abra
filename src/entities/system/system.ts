import { CPU } from "../cpu/cpu";
import { HDD } from "../hdd/hdd";
import { RAM } from "../ram/ram";
import { ISystem } from "./system.type";

export function System({ cpu, hdd, ram }: ISystem): ISystem {
    return {
        cpu: CPU(cpu),
        hdd: HDD(hdd),
        ram: RAM(ram)
    }
}