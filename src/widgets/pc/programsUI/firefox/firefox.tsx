import { SearchIcon } from "@chakra-ui/icons";
import { HStack, Heading, IconButton, Input, VStack } from "@chakra-ui/react";
import s from "./firefox.module.css";
import { moveProcessPointer } from "../../../../features/process/logic/movePointer";
import { useBindActionCreators } from "../../../../shared/hooks/redux";
import { useWindow } from "../../../../shared/layouts/window/window.hooks";

const ACTION_CREATORS = {
  searchAC: (pid: number) => moveProcessPointer({ pid, pointer: 2 }),
}

export const FirefoxUI = () => {
  const { searchAC } = useBindActionCreators(ACTION_CREATORS)

  const { pid } = useWindow();

  const handleClick = () => {
    searchAC(pid);
  }

  return (
    <div className={s.firefoxContainer}>
      <VStack>
        <Heading className={s.title}>Firefox</Heading>
        <HStack>
          <Input placeholder="Let's Search" />
          <IconButton
            aria-label="Search database"
            icon={<SearchIcon />}
            onClick={handleClick}
          ></IconButton>
        </HStack>
      </VStack>
    </div>
  );
};
