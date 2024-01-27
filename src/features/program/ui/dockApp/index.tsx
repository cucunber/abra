import { Box, Image, Tooltip } from "@chakra-ui/react";
import { IDockApp } from "./dockApp.type";

import s from './dockApp.module.css';
import { ContextMenu, ContextMenuButton, ContextMenuItem, ContextMenuList } from "../../../../shared/components/contextMenu";
import { useBindActionCreators } from "../../../../shared/hooks/redux";
import { removeFromProcess } from "../../../process";
import { memo, useCallback } from "react";
import { windows } from "../../../windows";
import { WINDOW_STATE } from "../../../../entities/window/window.type";

const ACTIONS_CREATORS = {
    closeApp: removeFromProcess,
    onCollapse: windows.actions.changeWinState,
}

export const DockApp = memo((process: IDockApp) => {
    const { meta } = process.program;

    const { closeApp, onCollapse } = useBindActionCreators(ACTIONS_CREATORS);

    const handleCloseApp = useCallback(() => {
        closeApp(process.pid);
    }, [closeApp, process.pid])

    const handleOpenApp = useCallback(() => {
        onCollapse({ pid: process.pid, state: WINDOW_STATE.OPEN })
    }, [onCollapse, process.pid])

    return (
        <ContextMenu>
            <Tooltip hasArrow shouldWrapChildren label={ `${meta.name} (${process.pid})` }>
                <ContextMenuButton onClick={handleOpenApp}>
                    <Box className={ s.wrapper }>
                        <Image src={ meta.icon } className={ s.icon } />
                    </Box>
                </ContextMenuButton>
            </Tooltip>
            <ContextMenuList>
                <ContextMenuItem onClick={handleCloseApp}>Закрыть</ContextMenuItem>
            </ContextMenuList>
        </ContextMenu>
        
    )
})