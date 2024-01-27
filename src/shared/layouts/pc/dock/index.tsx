import { HStack } from "@chakra-ui/react"
import { useAppSelector } from "../../../hooks/redux"
import { processes } from "../../../../features/process";
import { DockApp } from "../../../../features/program/ui";

import s from './dock.module.css';

export const Dock = () => {
    const runningProcesses = useAppSelector(processes.selectors.selectRunningProcesses);
    return (
        <HStack className={s.wrapper}>
            {Object.values(runningProcesses).map(process => <DockApp {...process} key={process.pid} />)}
        </HStack>
    )
}