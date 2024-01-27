import { shallowEqual } from "react-redux";
import { installedPrograms } from "../../../features/installedPrograms"
import { useAppSelector } from "../../../shared/hooks/redux"
import { HStack } from "@chakra-ui/react";
import { DesktopApp } from "../../../features/program/ui";

export const Programs = () => {
    const programs = useAppSelector(installedPrograms.selectors.selectPrograms, shallowEqual);

    return (
        <HStack wrap="wrap" alignItems="stretch">
            {Object.values(programs).map(program => <DesktopApp {...program} key={program.meta.name} />)}
        </HStack>
    )
}