import {Badge, Box, Flex, Spacer, Tag, Text, VStack} from "@chakra-ui/react";
import React from "react";

const TodoColumn = ({Todos, tabletitle}) => {
  console.log(Todos);
  return (
    <>
      <VStack height={"90vh"} w={"100%"} gap={2} border={"1px"}>
        <Box width={"100%"} borderBottom={"1px"} p={3}>
          {tabletitle}
        </Box>

        {Todos?.map((el) => (
          <VStack border={"1px"} width={"95%"} m={"auto"} p={2} rounded={"10px"}>
            <Text fontSize={"1.2rem"}>{el.Todo}</Text>
            <Flex
              justifyContent={"space-between"}
              w={"100%"}
              alignItems={"center"}
            >
              <Flex fontSize={"0.7rem"} gap={4} alignItems={"center"}>
                <Text fontSize={"0.7rem"}> Time : {el.time}</Text>
                <Text fontSize={"0.7rem"}> Date : {el.DueDate}</Text>
              </Flex>
              <Box>
                <Badge variant="outline" colorScheme="green">
                  Default
                </Badge>
              </Box>
            </Flex>
          </VStack>
        ))}
      </VStack>
    </>
  );
};

export default TodoColumn;
