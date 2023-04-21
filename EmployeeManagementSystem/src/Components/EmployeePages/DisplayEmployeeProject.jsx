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
  return (
    <div>
      <Card
        w={"95%"}
        m="auto"
        overflow="hidden"
        boxShadow="dark-lg"
        rounded="md"
        bg={"gray.800"}
        p={[2,2,8]}
        mb={8}
        color={"black"}
      >
        <Box display="flex" flexDirection={{sm:"column",lg:"row"}} lignItems={"center"}>
          <Image
            w={{sm:"100%",lg:"25%"}}
            h="100%"
            src={
              "https://img.freepik.com/free-vector/concept-landing-page-image-upload_52683-26839.jpg?size=626&ext=jpg"
            }
            alt="Caffe Latte"
          />

          <Stack w={{sm:"100%",lg:"80%"}}>
            <CardBody textAlign={"start"}>
              <Flex flexDirection={"column"} gap={2} mb={2} w={"100%"}>
                <Text fontSize={{sm:"md",lg:"2xl"}} fontWeight="semibold" color={"white"}>
                 {projectdata?.ProjectTitle}
                </Text>
                <Badge colorScheme="blue"  w={"max-content"} p={1} pl={4} pr={4}> 
                {projectdata?.ProjectType}
                </Badge>
              </Flex>

              <Divider m={2} />
              <Flex w={"100%"} rowGap={2} flexWrap={"wrap"}>
                <VStack w={{sm:"100%",lg:"30%"}}>
                  <Text color={"blue.400"} fontSize={{sm:"sm",lg:"xl"}}> Project Status</Text>
                  <Badge p={"0.3rem 1.2rem 0.3rem 1.2rem"}bg={"green.200"} color={"black"}>{projectdata?.Status}</Badge>
                </VStack>
                <VStack w={{sm:"50%",lg:"32%"}}>
                  <Text fontWeight={"semibold"}  fontSize={{sm:"sm",lg:"xl"}} color={"blue.400"}> Start Date</Text>
                 <Text color={"whiteAlpha.800"}>
                 {projectdata?.StartDate}
                  </Text>  
                </VStack>
                <VStack w={{sm:"50%",lg:"32%"}}>
                  <Text fontWeight={"semibold"} fontSize={{sm:"sm",lg:"xl"}} color={"blue.400"}>Estimated End Date</Text>
                  <Text color={"red.600"}>
                 {projectdata?.EndDate}
                  </Text>  
                </VStack>
              </Flex>
              <Divider mt={4} />
            </CardBody>
          </Stack>
        </Box>
        <Box alignItems={"center"} w={"90%"} m={"auto"}>
          <Text textAlign={"start"} fontWeight={"bold"}  fontSize={{sm:"sm",lg:"xl"}} color={"blue.400"} >
            Project Description :{" "}
          </Text>
          <Text py="2" ml={{lg:"14",sm:"4"}}  textAlign={"start"} w={"90%"} color={"whiteAlpha.800"}>
           {projectdata?.Description}
          </Text>
        </Box>
      </Card>
    </div>
  );
};

export default DisplayEmployeeProject;
