import { SearchIcon } from "@chakra-ui/icons";
import { HStack, Heading, IconButton, Input, VStack } from "@chakra-ui/react";
import s from "./google.module.css";
import { useBindActionCreators } from "../../../../shared/hooks/redux";
import { moveProcessPointer } from "../../../../features/process/logic/movePointer";
import { useWindow } from "../../../../shared/layouts/window/window.hooks";

const ACTION_CREATORS = {
  searchAC: (pid: number) => moveProcessPointer({ pid, pointer: 2 }),
}

export const GoogleUI = () => {
  const { searchAC } = useBindActionCreators(ACTION_CREATORS)

  const { pid } = useWindow();

  const handleClick = () => {
    searchAC(pid);
  }

  return (
    <div className={s.googleContainer}>
      <VStack>
        <Heading>Google Chrome</Heading>
        <HStack>
          <Input placeholder="Найдётся всё" />
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
