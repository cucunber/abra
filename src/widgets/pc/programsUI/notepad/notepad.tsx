import { Box, HStack, Menu, MenuButton } from "@chakra-ui/react";
import s from "./notepad.module.css";

export const NotepadUI = () => {
  return (
    <Box className={s.container}>
      <HStack className={s.panel}>
        <Menu>
          <MenuButton as={Box}>Сохранить</MenuButton>
        </Menu>
      </HStack>
      <textarea className={s.body} />
    </Box>
  );
};
