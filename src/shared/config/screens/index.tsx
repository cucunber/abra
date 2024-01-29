import { ReactNode } from "react";
import {
  DiscordUI,
  ExcelUI,
  FirefoxUI,
  GoogleUI,
  NotepadUI,
  PowerPointUI,
  WordUI,
} from "../../../widgets/pc/programsUI";

export const DEFAULT_SCREENS: Record<string, ReactNode> = {
  "Google Chrome": <GoogleUI />,
  Firefox: <FirefoxUI />,
  Word: <WordUI />,
  "Power Point": <PowerPointUI />,
  Excel: <ExcelUI />,
  Discord: <DiscordUI />,
  Notepad: <NotepadUI />,
};
