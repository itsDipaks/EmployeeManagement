import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";

const ListEmp = () => {
  return (
    <div>
      {/* -----Table ---- */}

      <Box>
        <TableContainer width="100%" maxWidth="100%">
          <Table variant="simple" colorScheme="gray" size="sm" borderLeft="1px">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead borderBottom={"2px"} fontSize="2rem">
              <Tr margin="1rem">
                <Th>Sr.No</Th>
                <Th>Employee Name</Th>
                <Th>Email</Th>
                <Th>Salery in Rs</Th>
                <Th>Position</Th>
                <Th>Joining Date</Th>
                <Th>Action ysdfiasirved</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Dipak Pawar</Td>
                <Td>Dipak@gmail.com</Td>
                <Td>45000</Td>
                <Td>Full stack Developer</Td>
                <Td>23rd narch 2022</Td>
                <Td>
                  <HStack>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>Dipak Pawar</Td>
                <Td>Dipak@gmail.com</Td>
                <Td>45000</Td>
                <Td>Full stack Developer</Td>
                <Td>23rd narch 2022</Td>
                <Td>
                  <HStack>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default ListEmp;
