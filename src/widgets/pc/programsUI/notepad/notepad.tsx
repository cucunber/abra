import { Box, HStack, Menu, MenuButton } from "@chakra-ui/react";
import s from "./notepad.module.css";
import { useBindActionCreators } from "../../../../shared/hooks/redux";
import { moveProcessPointer } from "../../../../features/process/logic/movePointer";
import { useWindow } from "../../../../shared/layouts/window/window.hooks";

const ACTION_CREATORS = {
  save: (pid: number) => moveProcessPointer({ pid, pointer: 2 })
}

export const NotepadUI = () => {
  const { save } = useBindActionCreators(ACTION_CREATORS)

  const { pid } = useWindow();

  const handleClick = () => {
    save(pid);
  }

  return (
    <Box className={s.container}>
      <HStack className={s.panel}>
        <Menu>
          <MenuButton onClick={handleClick} as={Box}>Сохранить</MenuButton>
        </Menu>
      </HStack>
      <textarea className={s.body} />
    </Box>
  );
};
