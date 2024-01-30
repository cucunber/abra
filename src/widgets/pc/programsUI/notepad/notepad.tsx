import { Box, HStack, Menu, MenuButton } from "@chakra-ui/react";
import s from "./notepad.module.css";
import { useBindActionCreators } from "../../../../shared/hooks/redux";
import { moveProcessPointer } from "../../../../features/process/logic/movePointer";
import { useWindow } from "../../../../shared/layouts/window/window.hooks";

const ACTION_CREATORS = {
  saveAC: (pid: number) => moveProcessPointer({ pid, pointer: 2 }),
  deleteAC: (pid: number) => moveProcessPointer({ pid, pointer: 3 })
}

export const NotepadUI = () => {
  const { deleteAC, saveAC } = useBindActionCreators(ACTION_CREATORS)

  const { pid } = useWindow();

  const handleSave = () => {
    saveAC(pid);
  }

  const handleDelete = () => {
    deleteAC(pid);
  }

  return (
    <Box className={s.container}>
      <HStack className={s.panel}>
        <Menu>
          <MenuButton onClick={handleSave} as={Box}>Сохранить</MenuButton>
          <MenuButton onClick={handleDelete} as={Box}>Удалить</MenuButton>
        </Menu>
      </HStack>
      <textarea className={s.body} />
    </Box>
  );
};
