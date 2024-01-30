import { Image, Text, VStack } from "@chakra-ui/react";

import s from './desktopFile.module.css';
import clsx from "clsx";
import { useBindActionCreators } from "../../../../shared/hooks/redux";
import { IDesktopFile } from "./desktopFile.type";
import { system } from "../..";
import { ContextMenu, ContextMenuButton, ContextMenuItem, ContextMenuList } from "../../../../shared/components/contextMenu";

const removeFileAC = (id: number) => system.actions.removeFile(id);

export const DesktopFile = (file: IDesktopFile) => {
    const { id } = file;

    const removeFile = useBindActionCreators(removeFileAC)

    const handleClick = () => {
        removeFile(id);
    }

    return (
        <ContextMenu>
            <ContextMenuButton>
                <VStack className={ s.wrapper } justifyContent="flex-start" as="button">
                    <Image src="/programs/file.png" className={ s.icon } />
                    <Text data-line-clamp={2} fontSize='sm' className={ clsx("overflow-ellipses", "work-break") }>{id}</Text>
                </VStack>
            </ContextMenuButton>
            <ContextMenuList>
                <ContextMenuItem onClick={handleClick}>Удалить</ContextMenuItem>
            </ContextMenuList>
        </ContextMenu>
        
    )
}