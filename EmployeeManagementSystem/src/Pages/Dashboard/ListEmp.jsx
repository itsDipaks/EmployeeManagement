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
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
} from "@chakra-ui/react";
import React from "react";
const ListEmp = () => {
  return (
    <>
      <Box>
        <Text fontSize="2xl" m="1rem">
          {" "}
          Employee Data
        </Text>
        <HStack mt={"2rem"} w="70%">
          <FormControl>
            <FormLabel> Filter By Position </FormLabel>
            <Select placeholder="Select Position">
              <option value="hr">HR (Human resource )</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Full stack Developer</option>
              <option value="node">Nodejs Developer</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> Sort by </FormLabel>
            <Select placeholder="Select Position">
              <option value="hr">A to Z</option>
              <option value="hr">Z to A</option>
            </Select>
          </FormControl>
        </HStack>
      </Box>
      {/* -----Table ---- */}
      <Text fontSize="2xl" m="2rem">
        {" "}
        List
      </Text>
      <Box mt={"1rem"}>
        <TableContainer width="100%" maxWidth="100%">
          <Table variant="simple" colorScheme="gray" size="sm">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead border={"2px"} fontSize="2rem">
              <Tr margin="1rem">
                <Th>Sr.No</Th>
                <Th>Employee Name</Th>
                <Th>Email</Th>
                <Th>Salery in Rs</Th>
                <Th>Position</Th>
                <Th>Joining Date</Th>
                <Th>Action </Th>
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
    </>
  );
};

export default ListEmp;
