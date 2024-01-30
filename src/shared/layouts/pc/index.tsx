import { Box, HStack, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Dock } from "./dock";

import s from "./pc.module.css";
import { Monitoring } from "../../../widgets/pc/programsUI/monitoring";

export const PC = ({ children }: PropsWithChildren) => {
  return (
    <VStack className={s.wrapper} alignItems="initial" gap={0}>
      <Box className={s.screen}>
        <Box maxW="70%">
          <Monitoring />
        </Box>
        <Box className={s.programs}>{children}</Box>
      </Box>
      <Dock />
    </VStack>
  );
};
