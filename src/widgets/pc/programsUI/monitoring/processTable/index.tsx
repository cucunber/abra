import { useSelector } from "react-redux";
import { processes } from "../../../../../features/process";
import { Table, Th, Tr, Thead, Tbody, Td } from "@chakra-ui/react";

export const ProcessTable = () => {
  const running = useSelector(processes.selectors.selectRunningProcesses);

  return (
    <Table colorScheme="red" variant="striped">
      <Thead>
        <Tr>
          <Th>Process</Th>
          <Th>Pid</Th>
          <Th>State</Th>
          <Th>Command</Th>
          <Th>Left</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.values(running).map((process) => (
          <Tr key={process.pid}>
            <Td>{process.program.meta.name}</Td>
            <Td>{process.pid}</Td>
            <Td>{process.ctx.state}</Td>
            <Td>{process.ctx.commands[process.ctx.pointer].meta.name}</Td>
            <Td>{process.ctx.commandsLeft}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
