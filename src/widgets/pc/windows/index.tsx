import { Box } from "@chakra-ui/react";
import { windows } from "../../../features/windows"
import { useAppSelector } from "../../../shared/hooks/redux"
import { WINDOW_STATE } from "../../../entities/window/window.type";
import { Window } from "../../../shared/layouts/window";

import s from './windows.module.css';
import { createPortal } from "react-dom";

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
                return (
                    <Window key={process.pid} zIndex={zIndex} pid={process.pid}>
                        simple app
                    </Window>
                )
            })}
        </Box>
    , document.body)
}