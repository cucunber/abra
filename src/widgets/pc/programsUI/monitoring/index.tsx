import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from "@chakra-ui/react"
import { HDDMonitoring } from "./hddMonitoring"

import s from './monitoring.module.css';
import { RAMMonitoring } from "./ramMonitoring";
import { ProcessTable } from "./processTable";

export const Monitoring = () => {
    return(
        <VStack className={ s.wrapper }>
            <Tabs w="100%">
                <TabList>
                    <Tab>Таблица процессов</Tab>
                    <Tab>Графики HDD/RAM</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <ProcessTable />
                    </TabPanel>
                    <TabPanel>
                        <VStack>
                            <Box px="2" flex="0 0 50%" width="100%">
                                <HDDMonitoring />
                            </Box>
                            <Box px="2" flex="0 0 50%" width="100%">
                                <RAMMonitoring />
                            </Box>
                        </VStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>            
        </VStack>
    )
}