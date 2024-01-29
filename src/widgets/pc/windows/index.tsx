import { Box } from "@chakra-ui/react";
import { windows } from "../../../features/windows";
import { useAppSelector } from "../../../shared/hooks/redux";
import { WINDOW_STATE } from "../../../entities/window/window.type";

import s from "./windows.module.css";
import { createPortal } from "react-dom";
import { DEFAULT_SCREENS } from "../../../shared/config/screens";
import { DraggableWindow } from "../../../shared/layouts/window/draggableWindow";

export const Windows = () => {
  const orderedWindows = useAppSelector(windows.selectors.selectWindows);

  return createPortal(
    <Box className={s.wrapper}>
      {orderedWindows.map((win, index) => {
        if (win.state === WINDOW_STATE.COLLAPSED) {
          return null;
        }
        const zIndex = -index;
        const { process } = win;
        const { commands } = process.program.exeCtx;
        return (
          <DraggableWindow key={process.pid} zIndex={zIndex} pid={process.pid}>
            {DEFAULT_SCREENS[process.program.meta.name]}
          </DraggableWindow>
        );
      })}
    </Box>,
    document.body
  );
};
