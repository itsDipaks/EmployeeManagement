import React from 'react'
import {Button, Flex, Text, useDisclosure} from "@chakra-ui/react"
import { useDispatch } from 'react-redux';
import { userLogout } from '../Redux/Auth/Auth.action';
import AlertCompo from '../Components/AlertCompo';
const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <div>
      <Flex justifyContent={"center"} alignItems="center" marginTop={"30vh"}>

      <Text fontSize={"2xl"}>  Welcome To 
     <Text  fontSize={"4xl"}>
      Employee Managment System
      </Text>
    </Text>

      </Flex>

<AlertCompo onOpen={onOpen} isOpen={isOpen} onClose={onClose}/>
    
    </div>
  )
}

export default Home