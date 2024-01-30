import { Box, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Dock } from "./dock";

import s from "./pc.module.css";

export const PC = ({ children }: PropsWithChildren) => {
  return (
    <VStack className={s.wrapper} alignItems="initial">
      <Box className={s.screen}>{children}</Box>
      <Dock />
    </VStack>
  );
};
