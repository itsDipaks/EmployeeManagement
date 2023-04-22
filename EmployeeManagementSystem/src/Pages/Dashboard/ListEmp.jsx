import {
  Table,
  Thead,
  Tbody,
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
  Image,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {
  AllEmployee,
  DeleteEmployee,
} from "../../Redux/Employee/Employee.action";
import AddEmployee from "./AddEmployee";
import EmpProfile from "./EmpProfile";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import EditProfileModel from "../../DashboardCompo/EditProfileModel";
const ListEmp = () => {
  let dispatch = useDispatch();
  let {employeeData, loading, error, msg} = useSelector(
    (store) => store.Storedata
  );

  let [employees,setemployees]=useState([...employeeData])
  console.log(employees)
  let Deleteemployee = (id) => {
    dispatch(DeleteEmployee(id));
    setTimeout(()=>{
      showdata()
    },1000)
  };

  useEffect(() => {
    showdata()
  }, []);

  let showdata=()=>{
    dispatch(AllEmployee());
  }

let sortemployeeby=(e)=>{
  let val=e.target.value
  if(val){
    let data=employeeData.filter((el)=>{
      return el.position==val
       })
       setemployees(data)
  }else{
    setemployees(employeeData)
  }

}
  return (
    <>
      <Heading Size={"sm"} m="1rem">
        {" "}
        Employee Data Managment
      </Heading>

      {/* -----Table ---- */}

      <Box>
        <Text textAlign={"start"} fontSize={"2xl"} fontWeight="bold" p={4}>
          {" "}
          Employee List
        </Text>
        <Flex align={"center"} justifyContent="space-between" w={"95%"}>
          <HStack w="60%">
            <FormControl>
              <FormLabel fontSize={"sm"}> Filter Position </FormLabel>
              <Select placeholder="Select Position" onChange={sortemployeeby}>
                <option value="HR (Human resource )">HR (Human resource )</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Full stack Developer">Full stack Developer</option>
                <option value="Nodejs Developer">Nodejs Developer</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={"sm"}> Sort By   </FormLabel>
              <Select placeholder="Select Field">
                <option value="joinrecet">Joining Date (Recent)</option>
                <option value="active">Status (Active)</option>
                <option value="inactive">Status (Inactive)</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={"sm"}> Find By Name </FormLabel>
              <Input placeholder="Enter Name" />
            </FormControl>
          </HStack>
          <AddEmployee  showdata={showdata}/>
        </Flex>
      </Box>
      <Box mt={"1rem"}>
        <TableContainer width="100%" maxWidth="98%">
          <Table variant="simple" colorScheme="gray" size="sm">
            <TableCaption>Employee Managment Sysytem</TableCaption>
            <Thead border={"2px"} fontSize="2rem">
              <Tr margin="1rem">
                <Th>Sr.No</Th>
                <Th></Th>
                <Th>Employee Name</Th>
                <Th>Email</Th>
                <Th>Position</Th>
                <Th>Joining Date</Th>
                <Th>Status</Th>
                <Th textAlign={"center"}>Action </Th>
              </Tr>
            </Thead>
            <Tbody>
              {employees &&
                employees?.map((el, index) => (
                  <Tr  key={index}>
                    <Td>{index + 1}</Td>
                    <Td>
                      <Image
                        borderRadius={"full"}
                        border={"1px"}
                        w="50px"
                        src="https://cdn.pixabay.com/photo/2016/03/31/18/26/coding-1294361__340.png"
                        alt="Employee Image"
                      />
                    </Td>
                    <Td>
                      <Text> {el.firstname + el.lastname}</Text>
                    </Td>
                    <Td>{el.email}</Td>
                    <Td>{el.position}</Td>
                    <Td>{el.joiningDate}</Td>
                    <Td>Active</Td>
                    <Td>
                      <HStack gap={4}>
                        {/* <Link to={`/empProfile/${el._id}`}>
                          <Button>View</Button> */}
                        {/* </Link> */}
                      
                        <EmpProfile data={el} />

                      
                     
                     
                     <EditProfileModel data={el}/>
                     
                     
                        <AiTwotoneDelete
                          onClick={() => Deleteemployee(el._id)}
                          style={{color:"darkred",width:"1.5rem",height:"1.5rem",cursor:"pointer"} }
                        />
                      
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
