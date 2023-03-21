import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Switch,
  Text,
  VStack
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {BsFileX} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {GetAllProjects} from "../Redux/Project/Project.action";

const DisplayProjects = ({triggerdaction}) => {
  
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllProjects());
  }, [triggerdaction]);
  let {ProjectsData} = useSelector((store) => store.ProjectsData);
  console.log(ProjectsData);
  return (
    <div>
      {ProjectsData?.map((el) => (
        <Card
          w={"90%"}
          m="auto"
          direction={{base: "column", sm: "row"}}
          overflow="hidden"
          variant="outline"
          p={8}
          mt={4}
        >
          <Image
            // objectFit="cover"
            // maxW={{base: "20%", sm: "200px"}}
            w={"20%"}
            src={el.ProjectimaageUrl}
            alt="Caffe Latte"
          />

          <Stack  w="50%">
            <CardBody textAlign={"start"}>
              <Flex alignItems={"center"}>
              <Heading size="md">{el.ProjectTitle}</Heading>
              <Badge ml="4" colorScheme="green">
                    {el.ProjectType} Project
                  </Badge>
              </Flex>
              <Divider m={2} />
            

              <Text py="2">
                <span style={{fontWeight:"bold",color:"green.900"}}>Description :</span>  {el.Description}</Text>
              <Divider m={2} />
              <Flex w={"90%"} >
              <VStack w={"40%"}>
                <Text>Start Date</Text>
                <Badge>{el.StartDate}</Badge>
              </VStack>
              <VStack w={"40%"}>
                <Text>Start Date</Text>
                <Badge >{el.StartDate}</Badge>
              </VStack>
              </Flex>

             
            </CardBody>
            <CardFooter>
            <Flex gap={4} alignItems="center" mt={4}>
<Text>Current Status </Text>
<Switch colorScheme='teal'  size='md' />

              </Flex>
           
            </CardFooter>
          </Stack>

          <VStack w={"30%"} >

<Text>Assign Team</Text>



{el.AssignedTeam?.map((val)=>

            <Flex w={"100%"} border="1px solid gray" gap={2} p={2}>
              <Avatar src="https://bit.ly/sage-adebayo" />
              <Box ml={4}>
                <Text fontWeight="bold">
              {val.firstname} {val.lastname}
                  {/* <Badge ml="4" colorScheme="green">
                    New
                  </Badge> */}
                </Text>
                <Text fontSize="sm">{val.position}</Text>
              </Box>
            </Flex>

)}

          </VStack>
        </Card>
      ))}
    </div>
  );
};

export default DisplayProjects;
