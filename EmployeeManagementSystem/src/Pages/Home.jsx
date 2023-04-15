import React from 'react'
import {Button, Flex, Text, useDisclosure} from "@chakra-ui/react"
import { useDispatch } from 'react-redux';
import { userLogout } from '../Redux/Auth/Auth.action';
const Home = () => {
  return (
    <div>
      <Flex justifyContent={"center"} alignItems="center" marginTop={"30vh"}>

      <Text fontSize={"2xl"}>  Welcome To 
     <Text  fontSize={"4xl"}>
      Employee Managment System
      </Text>
    </Text>

      </Flex>

    
    </div>
  )
}

export default Home