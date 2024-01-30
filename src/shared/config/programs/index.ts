import { store } from "../../../app/store";
import { Command } from "../../../entities/command/command";
import {
  Program,
  ProgramExeCtx,
  ProgramMeta,
} from "../../../entities/program/program";
import { moveProcessPointer } from "../../../features/process/logic/movePointer";
import { system } from "../../../features/system";
import { HZ_UNITS, SYS_UNITS, convertUnitsToBytes, convertUnitsToHz } from "../../utils/systemUnits";
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
  // Program({
  //   meta: ProgramMeta({ icon: "/programs/chrome.png", name: "Google Chrome" }),
  //   exeCtx: ProgramExeCtx({
  //     size: convertUnitsToBytes(100),
  //     commands: [
  //       DEFAULT_COMMANDS.input,
  //       DEFAULT_COMMANDS.math,
  //       DEFAULT_COMMANDS.draw,
  //       DEFAULT_COMMANDS.output,
  //     ],
  //   }),
  // }),
  // Program({
  //   meta: ProgramMeta({ icon: "/programs/firefox.png", name: "Firefox" }),
  //   exeCtx: ProgramExeCtx({
  //     size: convertUnitsToBytes(100),
  //     commands: [
  //       DEFAULT_COMMANDS.input,
  //       DEFAULT_COMMANDS.math,
  //       DEFAULT_COMMANDS.draw,
  //       DEFAULT_COMMANDS.output,
  //     ],
  //   }),
  // }),
  Program({
    meta: ProgramMeta({ icon: "/programs/excel.png", name: "Excel" }),
    exeCtx: ProgramExeCtx({
      size: convertUnitsToBytes(500, SYS_UNITS.MiB),
      commands: [
        DEFAULT_COMMANDS.draw,
        DEFAULT_COMMANDS.input,
        DEFAULT_COMMANDS.math,
        DEFAULT_COMMANDS.output,
      ],
    }),
  }),
  // Program({
  //   meta: ProgramMeta({ icon: "/programs/word.png", name: "Word" }),
  //   exeCtx: ProgramExeCtx({
  //     size: convertUnitsToBytes(450),
  //     commands: [
  //       DEFAULT_COMMANDS.input,
  //       DEFAULT_COMMANDS.math,
  //       DEFAULT_COMMANDS.draw,
  //       DEFAULT_COMMANDS.output,
  //     ],
  //   }),
  // }),
  // Program({
  //   meta: ProgramMeta({
  //     icon: "/programs/powerPoint.png",
  //     name: "Power Point",
  //   }),
  //   exeCtx: ProgramExeCtx({
  //     size: convertUnitsToBytes(250),
  //     commands: [
  //       DEFAULT_COMMANDS.input,
  //       DEFAULT_COMMANDS.math,
  //       DEFAULT_COMMANDS.draw,
  //       DEFAULT_COMMANDS.output,
  //     ],
  //   }),
  // }),
  Program({
    meta: ProgramMeta({
      icon: "/programs/discord.png",
      name: "Discord",
    }),
    exeCtx: ProgramExeCtx({
      size: convertUnitsToBytes(250, SYS_UNITS.MiB),
      commands: [
        DEFAULT_COMMANDS.draw,
        DEFAULT_COMMANDS.input,
        DEFAULT_COMMANDS.math,
        DEFAULT_COMMANDS.output,
      ],
    }),
  }),
  Program({
    meta: ProgramMeta({
      icon: "/programs/notepad.png",
      name: "Notepad",
    }),
    exeCtx: ProgramExeCtx({
      size: convertUnitsToBytes(25, SYS_UNITS.MiB),
      commands: [
        DEFAULT_COMMANDS.draw,
        DEFAULT_COMMANDS.input,
        Command({
          ...DEFAULT_COMMANDS.writeFile,
          exeCtx: {
            ...DEFAULT_COMMANDS.writeFile.exeCtx,
            ticks: convertUnitsToHz(1000, HZ_UNITS.mhz),
            onComplete: (ctx) => {
              store.dispatch(system.actions.addFile(convertUnitsToBytes(1, SYS_UNITS.GiB)));
              store.dispatch(moveProcessPointer({ pid: ctx.pid, pointer: 0 }))
            }
          }
        }),
        Command({
          ...DEFAULT_COMMANDS.delete,
          exeCtx: {
            ...DEFAULT_COMMANDS.delete.exeCtx,
            ticks: convertUnitsToHz(10, HZ_UNITS.mhz),
            onComplete: (ctx) => {
              store.dispatch(system.actions.removeRandomFile());
              store.dispatch(moveProcessPointer({ pid: ctx.pid, pointer: 0 }))
            }
          }
        }),
        DEFAULT_COMMANDS.output,
      ],
    }),
  }),
  SYSTEM_MONITORING,
];
