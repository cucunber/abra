import { CPU } from "../../../entities/cpu/cpu";
import { HDD } from "../../../entities/hdd/hdd";
import { RAM } from "../../../entities/ram/ram";
import { System } from "../../../entities/system/system";
import { HZ_UNITS, SYS_UNITS, convertUnitsToBytes, convertUnitsToHz } from "../../utils/systemUnits";

/**
 * cpu: 2.4 ghz,
 * hdd: 1GiB,
 * ram: 250mb
 */
export const DEFAULT_SYSTEM_CONFIG = System({
    cpu: CPU({ ghz: convertUnitsToHz(15, HZ_UNITS.mhz) }),
    hdd: HDD({ size: convertUnitsToBytes(6, SYS_UNITS.GiB ), segment: 0, files: [] }),
    ram: RAM({ size: convertUnitsToBytes(3, SYS_UNITS.GiB) })
})