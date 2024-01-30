import {
  Avatar,
  Box,
  Button,
  Grid,
  HStack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import s from "./discord.module.css";
import { userMap } from "./discord.config";
import { faker } from "@faker-js/faker/locale/ru";
import { moveProcessPointer } from "../../../../features/process/logic/movePointer";
import { useBindActionCreators } from "../../../../shared/hooks/redux";
import { useWindow } from "../../../../shared/layouts/window/window.hooks";

const ACTION_CREATORS = {
  saveAC: (pid: number) => moveProcessPointer({ pid, pointer: 2 }),
  deleteAC: (pid: number) => moveProcessPointer({ pid, pointer: 3 }),
  sendAC: (pid: number) => moveProcessPointer({ pid, pointer: 4 }),
};

export const DiscordUI = () => {
  const { sendAC, saveAC, deleteAC } = useBindActionCreators(ACTION_CREATORS);

  const { pid } = useWindow();

  const handleSave = () => {
    saveAC(pid);
  };

  const handleSend = () => {
    sendAC(pid);
  };

  const handleDelete = () => {
    deleteAC(pid);
  };

  return (
    <Box className={s.container}>
      <Grid templateColumns="3fr 9fr" gap="5px" className={s.content}>
        <VStack className={s.userList}>
          {userMap.map(({ id, name, src }) => (
            <Box className={s.card} key={id}>
              <HStack>
                <Avatar size="xs" src={src} />
                <Text className={s.name}>{name}</Text>
              </HStack>
            </Box>
          ))}
        </VStack>
        <Box className={s.body}>
          <VStack className={s.messages}>
            <Text className={s.text} onClick={handleSave}>
              {faker.lorem.paragraphs(5)}
            </Text>
          </VStack>
          <HStack>
            <Textarea className={s.textarea} />
            <Button onClick={handleSend}>Отправить</Button>
            <Button onClick={handleDelete}>Удалить</Button>
          </HStack>
        </Box>
      </Grid>
    </Box>
  );
};
