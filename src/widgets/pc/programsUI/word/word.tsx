import { Box, Divider, HStack, Menu, MenuButton, Textarea } from "@chakra-ui/react";
import s from "./word.module.css";
import { moveProcessPointer } from "../../../../features/process/logic/movePointer";
import { useBindActionCreators } from "../../../../shared/hooks/redux";
import { useWindow } from "../../../../shared/layouts/window/window.hooks";

const ACTION_CREATORS = {
  saveAC: (pid: number) => moveProcessPointer({ pid, pointer: 2 }),
  deleteAC: (pid: number) => moveProcessPointer({ pid, pointer: 3 })
}


export const WordUI = () => {
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
      <HStack justifyContent="space-evenly" className={s.header}>
        <Box className={s.headerItem}>Буфер обмена</Box>
        <Divider
          orientation="vertical"
          color="var(--chakra-colors-chakra-border-color)"
        />
        <Box className={s.headerItem}>Шрифт</Box>
        <Divider orientation="vertical" />
        <Box className={s.headerItem}>Абзац</Box>
        <Divider orientation="vertical" />
        <Box className={s.headerItem}>Стили</Box>
      </HStack>
      <Divider />
      <Box className={s.textContainer}>
        <Textarea className={s.textarea} rows={8} resize="none" />
      </Box>
    </Box>
  );
};
