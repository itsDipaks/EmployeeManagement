import React, {useEffect} from "react";
import ShowProjectTask from "./ShowProjectTask";
import {Box, Flex, Text, VStack} from "@chakra-ui/react";

const GrupeLederviewTasks = ({pendingTasks,CompletedTasks, projectval,getProjectTasks, AuthEmail}) => {
  useEffect(()=>{
    getProjectTasks()
  },[])
  return (
    <>
      <Flex
        w={"85%"}
        m={"auto"}
        gap={4}
        justifyContent={"space-between"}
        minH={"80vh"}
        mb={8}
    
      >
        {/* ==========Pending Tasks ========= */}

        <Box border={"1px"} w={"50%"}   
       > 
          <Text p={4} bg={"black"} color={"white"}>
            Pending Tasks
          </Text>
          {projectval?.groupleader == AuthEmail ? (
            <Box p={4}>
              <VStack gap={2}>
                {pendingTasks?.map((el, index) => (
                  <ShowProjectTask
                    data={el}
                    index={index}
                    getProjectTasks={getProjectTasks}
                  />
                ))}
              </VStack>
            </Box>
          ) : (
            ""
          )}
        </Box>

        {/* ==========Completed Tasks ========= */}

        <Box border={"1px"} w={"50%"}>
          <Text p={4} bg={"black"} color={"white"}>
            Completed Tasks
          </Text>

          {projectval?.groupleader == AuthEmail ? (
            <Box p={4}>
              <VStack gap={2}>
                {CompletedTasks?.map((el, index) => (
                  <ShowProjectTask
                    data={el}
                    index={index}
                    getProjectTasks={getProjectTasks}
                  />
                ))}
              </VStack>
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Flex>
    </>
  );
};

export default GrupeLederviewTasks;
