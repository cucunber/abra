import { Box, HStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Dock } from "./dock";

import s from "./pc.module.css";

export const PC = ({ children }: PropsWithChildren) => {
  return (
    <HStack className={s.wrapper} alignItems="initial" gap={0}>
      <Box className={s.screen}>
        <Box className={s.programs}>{children}</Box>
        <Box>{/* TODO Сюда перенести монитор системы */}</Box>
      </Box>
      <Dock />
    </HStack>
  );
};
