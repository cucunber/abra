import { useSelector } from "react-redux"
import { processes } from "../../../../features/process"
import { Table, Th, Tr, Thead, Tbody, Td } from "@chakra-ui/react";

export const ProcessTable = () => {
    const running = useSelector(processes.selectors.selectRunningProcesses);

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Process</Th>
                    <Th>Pid</Th>
                    <Th>State</Th>
                </Tr>
            </Thead>
            <Tbody>
                {Object.values(running).map(process => (
                    <Tr key={process.pid}>
                        <Td>{process.program.meta.name}</Td>
                        <Td>{process.pid}</Td>
                        <Td>{process.ctx.state}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}