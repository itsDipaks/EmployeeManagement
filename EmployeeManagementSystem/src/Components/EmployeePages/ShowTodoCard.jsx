import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsLightning } from 'react-icons/bs'

const ShowTodoCard = () => {
  return (
    <>
<Flex width={"100%"} justifyContent={"space-between"} border={"1px"} p={1} alignItems={"center"}>

    <BsLightning/>

    <Text>Complete Todays Task asap</Text>

    <Button>Complete</Button>
</Flex>



    </>
  )
}

export default ShowTodoCard