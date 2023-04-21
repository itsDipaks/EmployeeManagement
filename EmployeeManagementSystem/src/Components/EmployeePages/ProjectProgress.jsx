import {
  Box,
  Flex,
  Progress,
  Stat,
  StatArrow,
  StatDownArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatUpArrow,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ProjectProgress = ({totaltask, completedtask}) => {
  let ProgressValue = Math.floor((completedtask / totaltask) * 100);
  return (
    <>
      <Box w={"100%"} p={4} pt={4} pb={4} rounded={"xl"} border={"1px"}>
        <Flex justifyContent={"space-between"}>
          <Text textAlign={"start"} fontSize={"xl"} fontWeight={"semibold"}>
            Project Progress
          </Text>
          <Text textAlign={"start"} fontSize={"sm"} fontWeight={"semibold"}>
            Total Task : {totaltask}
          </Text>
        </Flex>

        <Flex pt={2} justifyContent={"space-between"}>
          <Stat>
            <StatLabel>Pending Task</StatLabel>
            <StatHelpText gap={4}>
              <StatDownArrow />
              {totaltask - completedtask}
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Completed Task</StatLabel>
            <StatHelpText gap={4}>
              <StatUpArrow />
              {completedtask}
            </StatHelpText>
          </Stat>
        </Flex>

        <Flex pt={4} justifyContent={"space-between"}>
          <Text>{totaltask - completedtask} Pending</Text>
          <Text>{ProgressValue}%</Text>
        </Flex>
        <Progress
          hasStripe
          colorScheme="pink"
          value={ProgressValue}
          rounded={"full"}
        />
      </Box>
    </>
  );
};

export default ProjectProgress;
