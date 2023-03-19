import {Box, Button, Flex, Text, VStack} from "@chakra-ui/react";
import React from "react";

const Classes = () => {
  let arr = [
    {
      Subject: "Math",
      class: 10,
      section: "A",
      studentCount: 42,
      TaskNotification: 1,
    },
    {
      Subject: "Science",
      class: 10,
      section: "A",
      studentCount: 42,
      TaskNotification: 1,
    },
    {
      Subject: "Math",
      class: 10,
      section: "A",
      studentCount: 42,
      TaskNotification: 1,
    },
    {
      Subject: "Math",
      class: 10,
      section: "A",
      studentCount: 42,
      TaskNotification: 1,
    },
    {
      Subject: "Math",
      class: 10,
      section: "A",
      studentCount: 42,
      TaskNotification: 1,
    },
    {
      Subject: "Math",
      class: 10,
      section: "A",
      studentCount: 42,
      TaskNotification: 1,
    },
  ];
  return (
    <>
      <Flex justifyContent={"space-between"} w="full" p={6} alignItems="center">
        <Text fontSize={"1.5rem"}>Classes</Text>
        <Flex gap={4}>
          <Text>No Seeing Your Class Here ? </Text>

          <Text> Request School Admin To Add class </Text>
        </Flex>
      </Flex>

      {/* ---------Classes Box ----- */}

      <Box display={"flex"} gap={4} w="100%" flexWrap={"wrap"}>
        {arr?.map((el) => (
          <Box border={"1px solid blue"} w="24%" p={4} pl={8}  textAlign="start">
            <Box>
              <Button>{el.Subject}</Button>
            
            <Box pt={4} pb={4}>
              <Text fontSize={"1.4rem"}>
                <Flex gap={2}>
                  <Text>{el.class}th</Text>
                  <Text>{el.section} Section</Text>
                </Flex>
              </Text>
              <Text>{el.studentCount} Students</Text>

              </Box>

              <Text>{el.TaskNotification} Add Today</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Classes;
