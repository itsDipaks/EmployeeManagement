import {Box, Button, Flex, Stack, Text} from "@chakra-ui/react";
import React from "react";
import {MdOutlineArrowDropDown} from "react-icons/md";

const HighlightBtn = () => {
  return (
    <>
      <Button padding={"1rem"} width="90%"  display={"flex"} p={"0px 1rem 0px 1rem"}>
    
          <Box width={"80%"} textAlign="start">
            <Text fontSize={"xs"}>ROLE</Text>
            <Text>WEB DEVELOPER</Text>
          </Box>

          <MdOutlineArrowDropDown />
    
      </Button>
    </>
  );
};

export default HighlightBtn;
