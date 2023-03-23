import {Badge, Box, Button, Flex, Stack, Text} from "@chakra-ui/react";
import React from "react";


const HighlightBtn = ({icon,title,minititle}) => {
  console.log()
  return (
    <>
      <Flex width="100%" alignItems={"center"} justifyContent="space-between" border="1px solid gray" borderRadius={"1rem"} p="0rem 1rem 0rem 1rem">
    
          <Box width={"90%"} textAlign="start" >
            <Text fontSize={"0.7rem"}>{minititle}</Text>
            <Text>{title}</Text>
          </Box>

         {icon}
    
      </Flex>
    </>
  );
};

export default HighlightBtn;
