import { ReactNode } from "react";
import { GoogleUI, PowerPointUI, WordUI } from "../../../widgets/pc/programsUI";
import { SYSTEM_MONITORING } from "../programs";
import { Monitoring } from "../../../widgets/pc/programsUI/monitoring";

export const DEFAULT_SCREENS: Record<string, ReactNode> = {
  "Google Chrome": <GoogleUI />,
  // Firefox: <FirefoxUI />,
  "Libre Office Writer": <WordUI />,
  "Libre Office Impress": <PowerPointUI />,
  // Excel: <ExcelUI />,
  // Discord: <DiscordUI />,
  // Notepad: <NotepadUI />,
  [SYSTEM_MONITORING.meta.name]: <Monitoring />,
};
