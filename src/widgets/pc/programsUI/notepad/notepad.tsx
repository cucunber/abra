import { Box, Textarea } from "@chakra-ui/react";
import s from "./notepad.module.css";

export const NotepadUI = () => {
  return (
    <Box className={s.container}>
      <Textarea className={s.body} />
    </Box>
  );
};
