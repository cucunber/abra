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

export const DiscordUI = () => {
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
            <Text className={s.text}>{faker.lorem.paragraphs(5)}</Text>
          </VStack>
          <HStack>
            <Textarea className={s.textarea} />
            <Button>Отправить</Button>
          </HStack>
        </Box>
      </Grid>
    </Box>
  );
};
