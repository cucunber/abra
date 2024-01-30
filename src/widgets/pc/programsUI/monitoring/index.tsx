import { Box, VStack } from "@chakra-ui/react"
import { HDDMonitoring } from "./hddMonitoring"

import s from './monitoring.module.css';
import { RAMMonitoring } from "./ramMonitoring";
import { ProcessTable } from "./processTable";

export const Monitoring = () => {
    return(
        <VStack className={ s.wrapper }>
            <Box flex="0 0 33%" width="100%">
                <HDDMonitoring />
            </Box>
            <Box flex="0 0 33%" width="100%">
                <RAMMonitoring />
            </Box>
            <Box flex="0 0 33%" width="100%">
                <ProcessTable />
            </Box>
        </VStack>
    )
}