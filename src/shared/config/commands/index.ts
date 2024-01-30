import { Command, CommandExeCtx, CommandMeta } from "../../../entities/command/command";
import { COMMAND_TYPE } from "../../../entities/command/command.type";
import { HZ_UNITS, SYS_UNITS, convertUnitsToBytes, convertUnitsToHz } from "../../utils/systemUnits";

export const DEFAULT_COMMANDS = {
    input: Command({ 
        meta: CommandMeta({ name: 'input' }), 
        exeCtx: CommandExeCtx({ 
            ticks: convertUnitsToHz(4, HZ_UNITS.mhz), 
            size: convertUnitsToBytes(10, SYS_UNITS.MiB), 
            type: COMMAND_TYPE.WAITING 
        })
    }),
    output: Command({
        meta: CommandMeta({ name: 'output' }), 
        exeCtx: CommandExeCtx({ 
            ticks: convertUnitsToHz(4, HZ_UNITS.mhz),
            size: convertUnitsToBytes(10, SYS_UNITS.MiB)
        })
    }),
    math: Command({
        meta: CommandMeta({ name: 'math' }), 
        exeCtx: CommandExeCtx({ 
            ticks: convertUnitsToHz(4, HZ_UNITS.mhz), 
            size: convertUnitsToBytes(100, SYS_UNITS.MiB)
        })
    }),
    draw: Command({
        meta: CommandMeta({ name: 'draw' }), 
        exeCtx: CommandExeCtx({ 
            ticks: convertUnitsToHz(4, HZ_UNITS.mhz),
            size: convertUnitsToBytes(100, SYS_UNITS.MiB),
            type: COMMAND_TYPE.WAITING
        })
    }),
    search: Command({
        meta: CommandMeta({ name: 'search' }), 
        exeCtx: CommandExeCtx({ ticks: 4, size: convertUnitsToBytes(60, SYS_UNITS.bytes)})
    }),
    focus: Command({
        meta: CommandMeta({ name: 'focus' }), 
        exeCtx: CommandExeCtx({ ticks: 4, size: convertUnitsToBytes(60, SYS_UNITS.bytes)})
    }),
    blur: Command({
        meta: CommandMeta({ name: 'blur' }), 
        exeCtx: CommandExeCtx({ ticks: 4, size: convertUnitsToBytes(60, SYS_UNITS.bytes)})
    }),
    writeFile: Command({
        meta: CommandMeta({ name: 'writeFile' }), 
        exeCtx: CommandExeCtx({ ticks: convertUnitsToHz(12, HZ_UNITS.mhz), size: convertUnitsToBytes(60, SYS_UNITS.bytes)})
    }),
    readFile: Command({
        meta: CommandMeta({ name: 'readFile' }), 
        exeCtx: CommandExeCtx({ 
            ticks: 4, 
            size: convertUnitsToBytes(60, SYS_UNITS.bytes),
            type: COMMAND_TYPE.WAITING 
        }),
    }),
}