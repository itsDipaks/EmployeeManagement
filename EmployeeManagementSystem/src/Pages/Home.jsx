import React from 'react'
import {Button, Flex, Text} from "@chakra-ui/react"
import { useDispatch } from 'react-redux';
import { userLogout } from '../Redux/Auth/Auth.action';
const Home = () => {
  let dispatch = useDispatch();
  let logoutuser = () => {
    dispatch(userLogout());
    navigate("/login");
  };
  return (
    <div>
      <Flex justifyContent={"center"} alignItems="center" marginTop={"30vh"}>

      <Text fontSize={"2xl"}>  Welcome To 
     <Text  fontSize={"4xl"}>
      Employee Managment System
      </Text>
      <Button onClick={logoutuser}>Logout</Button>
    </Text>

      </Flex>

      
    </div>
  )
}

export default Home