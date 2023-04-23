import React, {useEffect} from "react";
import ShowProjectTask from "./ShowProjectTask";
import { Flex, VStack} from "@chakra-ui/react";
import { Box, Heading, Text } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
const GrupeLederviewTasks = ({
  pendingTasks,
  CompletedTasks,
  projectval,
  getProjectTasks,
  AuthEmail,
}) => {
  useEffect(() => {
    getProjectTasks();
  }, []);
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
        <Box border={"1px"} w={"50%"}>
          <Text p={4} bg={"black"} color={"white"}>
            Pending Tasks
          </Text>
          {projectval?.groupleader == AuthEmail ? (
            <Box p={4}>
           {pendingTasks.length>0?   <VStack gap={2}>
                {pendingTasks?.map((el, index) => (
                  <ShowProjectTask
                    data={el}
                    index={index}
                    getProjectTasks={getProjectTasks}
                  />
                ))}
              </VStack>:
    <Box textAlign="center" py={20} px={6}>
      <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
      <Heading as="h2" size="lg" mt={6} mb={2}>
        No Pending Task
      </Heading>
    </Box>

              
              
              }
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
             
             
             { CompletedTasks.length>0? 
             
             <VStack gap={2}>
             {CompletedTasks?.map((el, index) => (
               <ShowProjectTask
                 data={el}
                 index={index}
                 getProjectTasks={getProjectTasks}
               />
             ))}
           </VStack>
             
             :  <Box textAlign="center" py={20} px={6}>
      <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
      <Heading as="h2" size="lg" mt={6} mb={2}>
        No Completed Task
      </Heading>
    </Box>}
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
