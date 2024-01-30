import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../../hooks/redux";
import { processes } from "../../../../features/process";
import { DockApp } from "../../../../features/program/ui";

import s from "./dock.module.css";

export const Dock = () => {
  const runningProcesses = useAppSelector(
    processes.selectors.selectRunningProcesses
  );
  return (
    <HStack className={s.wrapper}>
      {Object.values(runningProcesses).map((process) => (
        <DockApp {...process} key={process.pid} />
      ))}
      <Box className={s.time}>
        <VStack gap="0">
          <Text fontSize="12px">23:34</Text>
          <Text fontSize="12px">30.01.2024</Text>
        </VStack>
      </Box>
    </HStack>
  );
};
