import { Box, Divider, HStack, Textarea } from "@chakra-ui/react";
import s from "./word.module.css";

export const WordUI = () => {
  return (
    <Box className={s.container}>
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
