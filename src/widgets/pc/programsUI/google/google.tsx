import { SearchIcon } from "@chakra-ui/icons";
import { HStack, Heading, IconButton, Input, VStack } from "@chakra-ui/react";
import s from "./google.module.css";

export const GoogleUI = () => {
  return (
    <div className={s.googleContainer}>
      <VStack>
        <Heading>Google Chrome</Heading>
        <HStack>
          <Input placeholder="Найдётся всё" />
          <IconButton
            aria-label="Search database"
            icon={<SearchIcon />}
          ></IconButton>
        </HStack>
      </VStack>
    </div>
  );
};
