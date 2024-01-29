import { Program, ProgramExeCtx, ProgramMeta } from "../../../entities/program/program";
import { SYS_UNITS, convertUnitsToBytes } from "../../utils/systemUnits";
import { DEFAULT_COMMANDS } from "../commands";

export const SYSTEM_MONITORING = Program({
    meta: ProgramMeta({ icon: '/programs/monitoring.png', name: 'Мониторинг' }),
    exeCtx: ProgramExeCtx({ 
        size: convertUnitsToBytes(50, SYS_UNITS.MiB), 
        commands: [
            DEFAULT_COMMANDS.draw,
            DEFAULT_COMMANDS.math,
            DEFAULT_COMMANDS.input,
            DEFAULT_COMMANDS.output
    ] })
})

export const DEFAULT_INSTALLED_PROGRAMS = [
    Program({
        meta: ProgramMeta({ icon: '/programs/chrome.png', name: 'Google Chrome' }),
        exeCtx: ProgramExeCtx({ 
            size: convertUnitsToBytes(200, SYS_UNITS.MiB), 
            commands: [
                DEFAULT_COMMANDS.math,
                DEFAULT_COMMANDS.draw,
                DEFAULT_COMMANDS.output
            ] 
        })
    }),
    Program({
        meta: ProgramMeta({ icon: '/programs/excel.png', name: 'Excel' }),
        exeCtx: ProgramExeCtx({ 
            size: convertUnitsToBytes(500, SYS_UNITS.MiB), 
            commands: [
                DEFAULT_COMMANDS.math,
                DEFAULT_COMMANDS.draw,
                DEFAULT_COMMANDS.output
            ] 
        })
    }),
    SYSTEM_MONITORING
]