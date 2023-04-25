import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import {CheckIcon} from "@chakra-ui/icons";
const Feature = () => {
  const features = [
    {
      id: 1,
      title: "Feed / Post ",
      text: "The module would include features to send a massage/post to all employee in the organization ",
    },
    {
      id: 2,
      title: "Employee Data Management (Admin Section )",
      text: "The module would include features to manage employee information such as personal details, employment history, performance records, and attendance records.",
    },
    {
      id: 2,
      title: "Project Data Management (Admin Section )",
      text: "The module would include features to manage project information such as personal details, add-remove project,assign project to employee , project records.",
    },
    {
      id: 3,
      title: "Project Management ( Employee Section )",
      text: "In his employee can see their assigned project by manager/admin  and assigned tasks by team lead . ",
    },
    {
      id: 4,
      title: "Project Task Management ( Employee Section )",
      text: "This module would allow team leads to assign tasks to employees, monitor progress, and receive updates on the task's status.",
    },
    {
      id: 4,
      title: "Todo Management ( Employee Section )",
      text: "In this module employee can add , manage their todo on daily basis can change todo status from active then peding to completed by simple drag and drop method ",
    },
  ];

  return (
    <div>
      <Box p={4} mt={24}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Features </Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
          The app would have several modules such as:
          </Text>
        </Stack>

        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{base: 1, md: 2, lg: 2}} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={"top"}>
                <Box color={"green.400"} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={"start"}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text align={"start"}color={"gray.600"}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
};
export default Feature;
