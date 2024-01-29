import {
  Box,
  Card,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import s from "./powerPoint.module.css";

export const PowerPointUI = () => {
  return (
    <Box className={s.container}>
      <Box className={s.header}>
        <HStack>
          <Menu>
            <MenuButton as={Box}>Файл</MenuButton>
            <MenuList>
              <MenuItem>Создать</MenuItem>
              <MenuItem>Открыть</MenuItem>
              <MenuItem>Удалить</MenuItem>
              <MenuItem>Отменить</MenuItem>
              <MenuItem>Поставить 5</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Box}>Вставить</MenuButton>
            <MenuList>
              <MenuItem>Таблицу</MenuItem>
              <MenuItem>Новый слайд</MenuItem>
              <MenuItem>Рисунок</MenuItem>
              <MenuItem>Фигуру</MenuItem>
              <MenuItem>Символ</MenuItem>
              <MenuItem>Формулу</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Box}>Переходы</MenuButton>
            <MenuList>
              <MenuItem>Без перехода</MenuItem>
              <MenuItem>Сдвиг</MenuItem>
              <MenuItem>Появление</MenuItem>
              <MenuItem>Панорама</MenuItem>
              <MenuItem>Вырезание</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Box}>Справка</MenuButton>
            <MenuList>
              <MenuItem>Справка</MenuItem>
              <MenuItem>Отзывы</MenuItem>
              <MenuItem>Предложения</MenuItem>
              <MenuItem>Новые возможности</MenuItem>
            </MenuList>
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
