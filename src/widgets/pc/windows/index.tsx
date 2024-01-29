import { Box } from "@chakra-ui/react";
import { windows } from "../../../features/windows"
import { useAppSelector } from "../../../shared/hooks/redux"
import { WINDOW_STATE } from "../../../entities/window/window.type";
import { Window } from "../../../shared/layouts/window";

import s from './windows.module.css';
import { createPortal } from "react-dom";
import { SYSTEM_MONITORING } from "../../../shared/config/programs";
import { Monitoring } from "../../programsUI/monitoring";

const APPS_MAP = {
    [SYSTEM_MONITORING.meta.name]: Monitoring
}

export const Windows = () => {
    const orderedWindows = useAppSelector(windows.selectors.selectWindows);

    return createPortal(
        <Box className={s.wrapper}>
            {orderedWindows.map((win, index) => {
                if(win.state === WINDOW_STATE.COLLAPSED){
                    return null;
                }
                const zIndex = -index;
                const { process } = win;

                const Component = APPS_MAP[process.program.meta.name] || (() => <>simple app</>)

                return (
                    <Window key={process.pid} zIndex={zIndex} pid={process.pid}>
                        <Component />
                    </Window>
                )
            })}
        </Box>
    , document.body)
}