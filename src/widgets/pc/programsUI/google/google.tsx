import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Heading,
  IconButton,
  Input,
  Menu,
  MenuButton,
  VStack,
} from "@chakra-ui/react";
import s from "./google.module.css";
import { moveProcessPointer } from "../../../../features/process/logic/movePointer";
import { useBindActionCreators } from "../../../../shared/hooks/redux";
import { useWindow } from "../../../../shared/layouts/window/window.hooks";

const ACTION_CREATORS = {
  saveAC: (pid: number) => moveProcessPointer({ pid, pointer: 2 }),
  deleteAC: (pid: number) => moveProcessPointer({ pid, pointer: 3 }),
  findAC: (pid: number) => moveProcessPointer({ pid, pointer: 4 }),
};

export const GoogleUI = ({}) => {
  const { findAC, saveAC, deleteAC } = useBindActionCreators(ACTION_CREATORS);

  const { pid } = useWindow();

  const handleSave = () => {
    saveAC(pid);
  };

  const handleFind = () => {
    findAC(pid);
  };

  const handleDelete = () => {
    deleteAC(pid);
  };

  return (
    <Box minW="600px">
      <HStack className={s.panel}>
        <Menu>
          <MenuButton onClick={handleSave} as={Box}>
            Скачать
          </MenuButton>
          <MenuButton onClick={handleDelete} as={Box}>
            Удалить
          </MenuButton>
        </Menu>
      </HStack>
      <div className={s.googleContainer}>
        <VStack>
          <Heading>Google Chrome</Heading>
          <HStack>
            <Input placeholder="Найдётся всё" />
            <IconButton
              onClick={handleFind}
              aria-label="Search database"
              icon={<SearchIcon />}
            ></IconButton>
          </HStack>
        </VStack>
      </div>
    </Box>
  );
};
