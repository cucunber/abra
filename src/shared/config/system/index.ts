import { CPU } from "../../../entities/cpu/cpu";
import { HDD } from "../../../entities/hdd/hdd";
import { RAM } from "../../../entities/ram/ram";
import { System } from "../../../entities/system/system";
import { SYS_UNITS, convertUnitsToBytes } from "../../utils/systemUnits";

/**
 * cpu: 2.4 ghz,
 * hdd: 1GiB,
 * ram: 250mb
 */
export const DEFAULT_SYSTEM_CONFIG = System({
    cpu: CPU({ ghz: 2.4 }),
    hdd: HDD({ size: convertUnitsToBytes(1, SYS_UNITS.GiB )}),
    ram: RAM({ size: convertUnitsToBytes(250) })
})