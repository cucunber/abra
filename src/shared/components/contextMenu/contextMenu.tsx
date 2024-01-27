import { Menu, MenuButton, MenuButtonProps, MenuItem, MenuList, MenuProps } from "@chakra-ui/react";
import { MouseEventHandler, PropsWithChildren, useCallback, useContext, useMemo, useState } from "react";
import { ContextMenuContext } from "./contextMenu.context";

interface IContextMenuButton extends MenuButtonProps {}

export const ContextMenuButton = ({ onContextMenu, ...properties }: IContextMenuButton) => {
    const { setOpen } = useContext(ContextMenuContext);

    const handleContextMenu: MouseEventHandler<HTMLButtonElement> = useCallback((ev) => {
        onContextMenu?.(ev);
        ev.preventDefault();
        setOpen(true);
    }, [onContextMenu, setOpen])

    return (
        <MenuButton onContextMenu={handleContextMenu} {...properties} />
    )
};

export const ContextMenuList = MenuList;

export const ContextMenuItem = MenuItem;

interface IContextMenu extends PropsWithChildren<MenuProps> {}

export const ContextMenu = ({ children, onClose, ...properties }: IContextMenu) => {
    const [open, setOpen] = useState(false);

    const handleClose = useCallback(() => {
        onClose?.();
        setOpen(false);
    }, [setOpen, onClose])

    const value = useMemo(() => ({ open, setOpen }), [open, setOpen]);

    return (
        <ContextMenuContext.Provider value={value}>
            <Menu isOpen={open} onClose={handleClose} {...properties}>
                { children }
            </Menu>
        </ContextMenuContext.Provider>
    )
}