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
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {AllEmployee} from "../../Redux/Employee/Employee.action";
const ListEmp = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllEmployee());
  }, []);
let selectedemployee=(el)=>{
console.log(el)
}
  let {employeeData, loading, error} = useSelector((store) => store.Storedata);
  console.log(employeeData);
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
              {employeeData &&
                employeeData?.map((el, index) => (
                  <Tr key={index} >
                    <Td>{el._v}</Td>
                    <Td>{el.firstname + el.lastname}</Td>
                    <Td>{el.email}</Td>
                    <Td>{el.salary}</Td>
                    <Td>{el.position}</Td>
                    <Td>{el.joiningDate}</Td>
                    <Td>
                      <HStack>
                        <Link to={`/empProfile/${el._id}`}><Button>Edit</Button></Link>
                        <Button>Delete</Button>
                      </HStack>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default ListEmp;
