import { Flex, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const InfoField = ({title,value}) => {
    // console.log(data)
  return (
    <>
   <Flex border="1px solid red" p={4} gap={4}>
            <Text color={"tomato"} fontWeight={800}>{title } : </Text>
            <Text>
              {value}
            </Text>
          </Flex>
    </>
  )
}

export default InfoField