import { Box, Text, VStack } from "@chakra-ui/react";
import { IDesktopApp } from "./desktopApp.type";

import s from "./desktopApp.module.css";
import clsx from "clsx";
import { useBindActionCreators } from "../../../../shared/hooks/redux";
import { addProgramToProcess } from "../../../process";

export const DesktopApp = (program: IDesktopApp) => {
  const { meta } = program;

  const addToProcess = useBindActionCreators(addProgramToProcess);

  const handleClick = () => {
    addToProcess(program);
  };

  return (
    <VStack
      className={s.wrapper}
      justifyContent="flex-start"
      as="button"
      onClick={handleClick}
    >
      <Box backgroundImage={meta.icon} className={s.icon} />
      <Text
        data-line-clamp={2}
        fontSize="sm"
        className={clsx("overflow-ellipses", "work-break")}
        color="#fff"
      >
        {meta.name}
      </Text>
    </VStack>
  );
};
