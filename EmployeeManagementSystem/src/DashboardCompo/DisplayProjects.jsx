import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {BsFileX} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {GetAllProjects} from "../Redux/Project/Project.action";

const DisplayProjects = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllProjects());
  }, []);
  let {ProjectsData} = useSelector((store) => store.ProjectsData);
  console.log(ProjectsData);
  return (
    <div>
      {ProjectsData.map((el) => (
        <Card
          w={"90%"}
          m="auto"
          direction={{base: "column", sm: "row"}}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{base: "20%", sm: "200px"}}
            src={el.ProjectimaageUrl}
            alt="Caffe Latte"
          />

          <Stack border={"1px solid red"} w="60%">
            <CardBody>
              <Heading size="md">{el.ProjectTitle}</Heading>

              <Text py="2">vnghnghngh</Text>
            </CardBody>
            <CardFooter></CardFooter>
          </Stack>

          <VStack w={"40%"} >

<Text>Assign Team</Text>



{el.AssignedTeam?.map((val)=>

            <Flex w={"100%"} border="1px solid gray" gap={2} p={2}>
              <Avatar src="https://bit.ly/sage-adebayo" />
              <Box ml={4}>
                <Text fontWeight="bold">
              {val.firstname} {val.lastname}
                  <Badge ml="4" colorScheme="green">
                    New
                  </Badge>
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
