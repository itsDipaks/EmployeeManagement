import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

const NotFound = ({title,desc}) => {
  return (
    <div>  <Box textAlign="center" py={24} w={"70%"} px={6}  m={"auto"}>
    <InfoIcon boxSize={'50px'} color={'blue.500'} />
    <Heading as="h2" size="xl" mt={6} mb={2}>
   {title}
    </Heading>
    <Text color={'gray.500'}>
     {desc}
    </Text>
  </Box></div>
  )
}

export default NotFound