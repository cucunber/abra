import {
  Box,
  Card,
  HStack,
  Heading,
  Menu,
  MenuButton,
  VStack,
} from "@chakra-ui/react";
import s from "./powerPoint.module.css";
import { moveProcessPointer } from "../../../../features/process/logic/movePointer";
import { useBindActionCreators } from "../../../../shared/hooks/redux";
import { useWindow } from "../../../../shared/layouts/window/window.hooks";

const ACTION_CREATORS = {
  saveAC: (pid: number) => moveProcessPointer({ pid, pointer: 2 }),
  deleteAC: (pid: number) => moveProcessPointer({ pid, pointer: 3 })
}


export const PowerPointUI = () => {
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
      <Box className={s.header}>
        <HStack className={s.panel}>
          <Menu>
            <MenuButton onClick={handleSave} as={Box}>Сохранить</MenuButton>
            <MenuButton onClick={handleDelete} as={Box}>Удалить</MenuButton>
          </Menu>
        </HStack>
      </Box>

      <HStack className={s.body} alignItems="center">
        <VStack className={s.sideMenu} alignItems="center">
          <Box className={s.miniSlide}>Слайд 1</Box>
          <Box className={s.miniSlide}>Слайд 2</Box>
          <Box className={s.miniSlide}>Слайд 3</Box>
          <Box className={s.miniSlide}>Слайд 4</Box>
        </VStack>
        <Box className={s.slideContainer}>
          <Card className={s.slide}>
            <VStack justifyContent="center" className={s.stack}>
              <Box>
                <Heading>Заголовок Слайда</Heading>
              </Box>
              <Box>
                <Heading size="sx">Подзаголовок Слайда</Heading>
              </Box>
            </VStack>
          </Card>
        </Box>
      </HStack>
    </Box>
  );
};
