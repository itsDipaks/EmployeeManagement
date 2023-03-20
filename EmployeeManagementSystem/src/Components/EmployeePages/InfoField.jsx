import { Flex, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const InfoField = ({title,value}) => {
    // console.log(data)
  return (
    <>
   <Flex  p={2} gap={4}>
            <Text color={"green.300"} borderBottom="1px" fontWeight={700}>{title } : </Text>
            <Text borderBottom="1px">
              {value}
            </Text>
          </Flex>
    </>
  )
}

export default InfoField