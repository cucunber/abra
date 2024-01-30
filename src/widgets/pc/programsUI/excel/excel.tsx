import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export const ExcelUI = () => {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>A</Th>
              <Th>B</Th>
              <Th>C</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>
                <Editable defaultValue="A1">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
              <Td>
                <Editable defaultValue="B1">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
              <Td>
                <Editable defaultValue="C1">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>
                <Editable defaultValue="A2">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
              <Td>
                <Editable defaultValue="B2">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
              <Td>
                <Editable defaultValue="C2">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>
                <Editable defaultValue="A3">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
              <Td>
                <Editable defaultValue="B3">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
              <Td>
                <Editable defaultValue="C3">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
            </Tr>
            <Tr>
              <Td>4</Td>
              <Td>
                <Editable defaultValue="A4">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
              <Td>
                <Editable defaultValue="B4">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
              <Td>
                <Editable defaultValue="C4">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
