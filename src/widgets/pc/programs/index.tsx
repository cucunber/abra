import { shallowEqual } from "react-redux";
import { installedPrograms } from "../../../features/installedPrograms"
import { useAppSelector } from "../../../shared/hooks/redux"
import { HStack } from "@chakra-ui/react";
import { DesktopApp } from "../../../features/program/ui";
import { system } from "../../../features/system";
import { DesktopFile } from "../../../features/system/ui/desktopFile";

export const Programs = () => {
    const programs = useAppSelector(installedPrograms.selectors.selectPrograms, shallowEqual);
    const files = useAppSelector(system.selectors.selectFiles, shallowEqual);

    return (
        <HStack wrap="wrap" alignItems="stretch" w="100%">
            {Object.values(programs).map(program => <DesktopApp {...program} key={program.meta.name} />)}
            {files.map(file => <DesktopFile {...file} key={file.id} />)}
        </HStack>
    )
}