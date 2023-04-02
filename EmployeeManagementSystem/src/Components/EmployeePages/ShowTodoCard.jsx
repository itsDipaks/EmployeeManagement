import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsLightning } from 'react-icons/bs'

const ShowTodoCard = () => {
  return (
    <>
<Flex>

    <BsLightning/>

    <Text>Complete Todays Task asap</Text>

    <Button>Complete</Button>
</Flex>



    </>
  )
}

export default ShowTodoCard