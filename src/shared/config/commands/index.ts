import { Command, CommandExeCtx, CommandMeta } from "../../../entities/command/command";
import { SYS_UNITS, convertUnitsToBytes } from "../../utils/systemUnits";

export const DEFAULT_COMMANDS = {
    input: Command({ 
        meta: CommandMeta({ name: 'input' }), 
        exeCtx: CommandExeCtx({ ticks: 4, size: convertUnitsToBytes(10, SYS_UNITS.bytes)})
    }),
    output: Command({
        meta: CommandMeta({ name: 'output' }), 
        exeCtx: CommandExeCtx({ ticks: 4, size: convertUnitsToBytes(10, SYS_UNITS.bytes)})
    }),
    math: Command({
        meta: CommandMeta({ name: 'math' }), 
        exeCtx: CommandExeCtx({ ticks: 10, size: convertUnitsToBytes(100, SYS_UNITS.bytes)})
    }),
    draw: Command({
        meta: CommandMeta({ name: 'draw' }), 
        exeCtx: CommandExeCtx({ ticks: 8, size: convertUnitsToBytes(100, SYS_UNITS.bytes)})
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
        exeCtx: CommandExeCtx({ ticks: 4, size: convertUnitsToBytes(60, SYS_UNITS.bytes)})
    }),
    readFile: Command({
        meta: CommandMeta({ name: 'readFile' }), 
        exeCtx: CommandExeCtx({ ticks: 4, size: convertUnitsToBytes(60, SYS_UNITS.bytes)})
    }),

}