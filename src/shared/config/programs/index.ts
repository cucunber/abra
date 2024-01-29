import {
  Program,
  ProgramExeCtx,
  ProgramMeta,
} from "../../../entities/program/program";
import { convertUnitsToBytes } from "../../utils/systemUnits";
import { DEFAULT_COMMANDS } from "../commands";

export const SYSTEM_MONITORING = Program({
  meta: ProgramMeta({ icon: "/programs/monitoring.png", name: "Мониторинг" }),
  exeCtx: ProgramExeCtx({
    size: convertUnitsToBytes(50),
    commands: [
      DEFAULT_COMMANDS.input,
      DEFAULT_COMMANDS.math,
      DEFAULT_COMMANDS.draw,
      DEFAULT_COMMANDS.output,
    ],
  }),
});

export const DEFAULT_INSTALLED_PROGRAMS = [
  Program({
    meta: ProgramMeta({ icon: "/programs/chrome.png", name: "Google Chrome" }),
    exeCtx: ProgramExeCtx({
      size: convertUnitsToBytes(100),
      commands: [
        DEFAULT_COMMANDS.input,
        DEFAULT_COMMANDS.math,
        DEFAULT_COMMANDS.draw,
        DEFAULT_COMMANDS.output,
      ],
    }),
  }),
  Program({
    meta: ProgramMeta({ icon: "/programs/firefox.png", name: "Firefox" }),
    exeCtx: ProgramExeCtx({
      size: convertUnitsToBytes(100),
      commands: [
        DEFAULT_COMMANDS.input,
        DEFAULT_COMMANDS.math,
        DEFAULT_COMMANDS.draw,
        DEFAULT_COMMANDS.output,
      ],
    }),
  }),
  Program({
    meta: ProgramMeta({ icon: "/programs/excel.png", name: "Excel" }),
    exeCtx: ProgramExeCtx({
      size: convertUnitsToBytes(500),
      commands: [
        DEFAULT_COMMANDS.input,
        DEFAULT_COMMANDS.math,
        DEFAULT_COMMANDS.draw,
        DEFAULT_COMMANDS.output,
      ],
    }),
  }),
  Program({
    meta: ProgramMeta({ icon: "/programs/word.png", name: "Word" }),
    exeCtx: ProgramExeCtx({
      size: convertUnitsToBytes(450),
      commands: [
        DEFAULT_COMMANDS.input,
        DEFAULT_COMMANDS.math,
        DEFAULT_COMMANDS.draw,
        DEFAULT_COMMANDS.output,
      ],
    }),
  }),
  Program({
    meta: ProgramMeta({
      icon: "/programs/powerPoint.png",
      name: "Power Point",
    }),
    exeCtx: ProgramExeCtx({
      size: convertUnitsToBytes(250),
      commands: [
        DEFAULT_COMMANDS.input,
        DEFAULT_COMMANDS.math,
        DEFAULT_COMMANDS.draw,
        DEFAULT_COMMANDS.output,
      ],
    }),
  }),
  Program({
    meta: ProgramMeta({
      icon: "/programs/discord.png",
      name: "Discord",
    }),
    exeCtx: ProgramExeCtx({
      size: convertUnitsToBytes(250),
      commands: [
        DEFAULT_COMMANDS.input,
        DEFAULT_COMMANDS.math,
        DEFAULT_COMMANDS.draw,
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
      size: convertUnitsToBytes(250),
      commands: [
        DEFAULT_COMMANDS.input,
        DEFAULT_COMMANDS.math,
        DEFAULT_COMMANDS.draw,
        DEFAULT_COMMANDS.output,
      ],
    }),
  }),
  SYSTEM_MONITORING,
];
