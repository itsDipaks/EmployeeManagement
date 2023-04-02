import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const DisplayEmployeeProject = ({projectdata}) => {
    console.log(projectdata)
  return (
    <div>
      <Card
        w={"90%"}
        m="auto"
        overflow="hidden"
        boxShadow="dark-lg"
        rounded="md"
        bg={"primaryblue.20"}
        p={4}
        mb={8}
        color={"black"}
      >
        <Box display="flex" alignItems={"center"}>
          <Image
            w={"25%"}
            h="100%"
            src={
              "https://img.freepik.com/free-vector/concept-landing-page-image-upload_52683-26839.jpg?size=626&ext=jpg"
            }
            alt="Caffe Latte"
          />

          <Stack w="70%">
            <CardBody textAlign={"start"}>
              <Flex flexDirection={"column"} gap={2} mb={2}>
                <Text fontSize={"2xl"} fontWeight="semibold">
                 {projectdata?.ProjectTitle}
                </Text>
                <Badge colorScheme="blue" w={"max-content"} p={1} pl={4} pr={4}> 
                {projectdata?.ProjectType}
                </Badge>
              </Flex>

              <Divider m={2} />
              <Flex w={"90%"}>
                <VStack w={"30%"}>
                  <Text> Project Status</Text>
                  <Badge p={"0.3rem 1.2rem 0.3rem 1.2rem"} color={"black"}>{projectdata?.Status}</Badge>
                </VStack>
                <VStack w={"50%"}>
                  <Text fontWeight={"semibold"}> Start Date</Text>
                  <Badge p={"0.3rem 1.2rem 0.3rem 1.2rem"} colorScheme="green">
                   {projectdata?.StartDate}
                  </Badge>
                </VStack>
                <VStack w={"50%"}>
                  <Text fontWeight={"semibold"}>Estimated End Date</Text>
                  <Badge p={"0.3rem 1.2rem 0.3rem 1.2rem"} colorScheme="green">
                  {projectdata?.EndDate}
                  </Badge>
                </VStack>
              </Flex>
              <Divider mt={4} />
            </CardBody>
          </Stack>
        </Box>
        <Box alignItems={"center"} w={"90%"} m={"auto"}>
          <Text textAlign={"start"} fontWeight={"bold"}>
            Project Description :{" "}
          </Text>
          <Text py="2" textAlign={"start"} w={"100%"}>
           {projectdata?.Description}
          </Text>
        </Box>
      </Card>
    </div>
  );
};

export default DisplayEmployeeProject;
