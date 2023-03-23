import {Box, Button, Flex, Image, Text} from "@chakra-ui/react";
import React, { useEffect } from "react";
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
      <Box border={"1px"}>
        <header>
          <Flex justifyContent={"space-between"} alignItems="center">
            <Flex
              alignItems={"center"}
              width="20%"
              justifyContent={"space-between"}
            >
              <Image
                boxSize="60px"
                objectFit="cover"
                borderRadius="full"
                src="https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106__340.jpg"
                alt=""
              />
              <Text fontSize={"2xl"}>Dipak Pawar</Text>
            </Flex>

            <Button>Delete</Button>
          </Flex>
        </header>
        <Box width={"100%"}>
          <ProfileIntro />
        </Box>


        <Box>
            <Text>EMPLOYEE DETAILS</Text>

            



        </Box>
      </Box>
    </div>
  );
};

export default EmpProfile;
