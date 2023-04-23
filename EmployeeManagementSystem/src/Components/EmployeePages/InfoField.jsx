import {Flex, HStack, Stack, Text} from "@chakra-ui/react";
import React from "react";

const InfoField = ({title, value}) => {
  // console.log(data)
  return (
    <>
      <Flex
        p={2}
        // pl={8}
        // pr={8}
        gap={4}
        // borderBottom={"1px"}
        w="max-content"
        // rounded={"10px"}
    >
        <Text color={"green.400"} fontSize={"1.2rem"} fontWeight={700}>
          {title} :{" "}
        </Text>
        <Text fontSize={"1.2rem"}   >{value}</Text>
      </Flex>
    </>
  );
};

export default InfoField;
