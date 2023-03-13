import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SwitchTheam from './SwitchTheam'

const Navbar = () => {
  return (
    <>
      <Box w="100%"  border="1px" >
      <Flex p={"0.51rem"} justifyContent="space-between" alignItems={"center"}>
        <Text>Employee Managment </Text>
        <Text>Home</Text>
        <Text>Home</Text>
      
        <SwitchTheam/>
      </Flex>

      </Box>
     
    </>
  )
}

export default Navbar