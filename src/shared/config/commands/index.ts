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
            size: convertUnitsToBytes(100, SYS_UNITS.MiB)
        })
    }),
}