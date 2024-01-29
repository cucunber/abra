import { SearchIcon } from "@chakra-ui/icons";
import { HStack, Heading, IconButton, Input, VStack } from "@chakra-ui/react";
import s from "./firefox.module.css";

export const FirefoxUI = ({}) => {
  return (
    <div className={s.firefoxContainer}>
      <VStack>
        <Heading>Firefox</Heading>
        <HStack>
          <Input placeholder="Let's Search" />
          <IconButton
            aria-label="Search database"
            icon={<SearchIcon />}
          ></IconButton>
        </HStack>
      </VStack>
    </div>
  );
};
