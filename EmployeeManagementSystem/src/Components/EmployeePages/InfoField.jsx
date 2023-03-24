import { Flex, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const InfoField = ({title,value}) => {
    // console.log(data)
  return (
    <>
   <Flex p={2}  pl={8}  pr={8} gap={4} border={"1px"} w="max-content" rounded={"10px"}>
            <Text color={"red.300"}  fontWeight={700}>{title } : </Text>
            <Text>
              {value}
            </Text>
          </Flex>
    </>
  )
}

export default InfoField