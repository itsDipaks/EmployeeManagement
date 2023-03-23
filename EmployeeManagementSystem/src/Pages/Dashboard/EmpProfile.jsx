import {Box, Button, Divider, Flex, Image, Text} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfileIntro from "../../DashboardCompo/ProfileIntro";
import { SingleEmployee } from "../../Redux/Employee/Employee.action";

const EmpProfile = () => {

  const {id} = useParams();
  const dispatch=useDispatch()
console.log(id)
  useEffect(()=>{
    dispatch(SingleEmployee(id))
  },[])

  let {employeeData,loading,error}=useSelector(store=>store.Storedata)
  console.log(employeeData[0])

  return (
    <div>
      <Box >
        <Box w="90%" m={"auto"} p={4}>
          <Flex justifyContent={"space-between"} alignItems="center" boxSizing="border-box">
            <Flex
              alignItems={"center"}
              width="30%"
              gap={2}
              // justifyContent={"space-around"}
            >
              <BsArrowLeft style={{fontSize:"1.5rem",cursor:"pointer"}}/>
              <Image
                boxSize="50px"
                objectFit="cover"
                boxShadow='2xl' rounded='full'
                src="https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106__340.jpg"
                alt=""
              />
              <Text fontSize={"3xl"}  fontWeight="semibold">{employeeData[0].firstname} {employeeData[0].lastname}</Text>
            </Flex>

            <Button w={"10%"} p={2}  colorScheme='red' variant="outline" fontSize={"xl"}><AiOutlineDelete style={{marginRight:"0.5rem"}}/> Delete  </Button>
          </Flex>
        </Box>

<Divider/>

        <Box width={"85%"} m="auto">
          <ProfileIntro data={employeeData[0]}/>
        </Box>


        <Box>
            <Text>EMPLOYEE DETAILS</Text>
        </Box>
      </Box>
    </div>
  );
};

export default EmpProfile;
