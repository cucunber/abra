import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { HDDMonitoring } from "./hddMonitoring";

import s from "./monitoring.module.css";
import { RAMMonitoring } from "./ramMonitoring/RAMMonitoring";
import { ProcessTable } from "./processTable";

export const Monitoring = () => {
  return (
    <VStack className={s.wrapper}>
      <Tabs w="100%" colorScheme="red">
        <TabList>
          <Tab>Мониторинг ОЗУ</Tab>
          <Tab>Мониторинг HDD</Tab>
          <Tab>Таблица</Tab>
        </TabList>
        <TabPanels w="100%">
          <TabPanel h="50dvh">
            <Box flex="1 1 50%" width="100%" h="100%">
              <RAMMonitoring />
            </Box>
          </TabPanel>
          <TabPanel h="50dvh">
            <Box flex="1 1 100%" h="100%">
              <HDDMonitoring />
            </Box>
          </TabPanel>
          <TabPanel>
            <ProcessTable />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};
