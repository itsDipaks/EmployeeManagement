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
  VStack,
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { AllEmployee } from "../Redux/Employee/Employee.action";
import {deleteproject, GetAllProjects} from "../Redux/Project/Project.action";

const DisplayProjects = ({triggerdaction}) => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllEmployee());
  }, []);

  useEffect(() => {
    dispatch(GetAllProjects());
  }, []);
  // useEffect(() => {
  //   dispatch(AllEmployee());

  // }, []);
  let {ProjectsData} = useSelector((store) => store.ProjectsData);
  let {employeeData} = useSelector((store) => store.Storedata);
console.log(employeeData)

//  let {employeeData, loading, error} = useSelector((store) => store.Storedata);
// console.log(employeeData+"employee")
  // console.log(ProjectsData);

  let DeleteProject=({_id})=>{
    // console.log(el)
    dispatch(deleteproject(_id))

  }
  return (
    <div>
      {ProjectsData?.map((el) => (
        <Card
          w={"98%"}
          m="auto"
          // direction={{base: "column", sm: "row"}}
          overflow="hidden"
          boxShadow='2xl' rounded='md'
          p={4}
          mb={14}
        
        >
          <Box   display="flex"
          alignItems={"center"}>
          <Image
            // objectFit="cover"
            // maxW={{base: "20%", sm: "200px"}}
            w={"25%"}
            h="100%"
            src={el.ProjectimaageUrl}
            alt="Caffe Latte"
          />

          <Stack w="50%">
            <CardBody textAlign={"start"}>
              <Flex  flexDirection={"column"} gap={2} mb={2}>
                <Text fontSize={"2xl"} fontWeight="semibold">{el.ProjectTitle}</Text>
                <Badge  colorScheme="green" w={"max-content"}  >
                  {el.ProjectType} Project
                </Badge>
              </Flex>
             

              
              <Divider m={2} />
              <Flex w={"90%"}>
                {/* <VStack w={"30%"}>
                  <Text> Created Date</Text>
                  <Badge p={"0.3rem 1.2rem 0.3rem 1.2rem"}>
                    {el.ProjectCreatedAt}
                  </Badge>
                </VStack> */}
                <VStack w={"50%"}>
                  <Text> Start Date</Text>
                  <Badge p={"0.3rem 1.2rem 0.3rem 1.2rem"}>
                    {el.StartDate}
                  </Badge>
                </VStack>
                <VStack w={"50%"}>
                  <Text>Estimated End Date</Text>
                  <Badge p={"0.3rem 1.2rem 0.3rem 1.2rem"}>
                    {el.EndDate}
                  </Badge>
                </VStack>
              </Flex>
              <Flex gap={1} alignItems="center" mt={4}>
                <Text> Current Project Status :  </Text>
                <Badge p={"0.3rem 1.2rem 0.3rem 1.2rem"}>{el.Status}      </Badge>
              </Flex>
              <Divider mt={4} />
            
              {/* <Button>Change Status</Button> */}
            </CardBody>
            <CardFooter>
            <Button colorScheme='red' onClick={()=>DeleteProject(el)} >Remove</Button>
            </CardFooter>
          </Stack>

          <VStack w={"30%"}>
            <Text fontSize={"1.2rem "} fontWeight="bold" color={"green.200"}>
              {" "}
              Team
            </Text>

            {el.AssignedTeam?.map((val) => (
              <Flex
                w={"100%"}
                border="1px solid gray"
                gap={2}
                p={2}
                borderRadius="1rem"
              >
                <Avatar src="https://bit.ly/sage-adebayo" />
                <Box ml={4}>
                  <Text fontWeight="bold">
                    {val.firstname} {val.lastname}
                    {/* <Badge ml="4" colorScheme="green">
                    New
                  </Badge> */}
                  </Text>
                  <Text fontSize="xs" textAlign={"start"}>
                    {val.position}
                  </Text>
                </Box>
              </Flex>
            ))}
          </VStack>
          </Box>
          <Flex alignItems={"center"}  w="100%">
            <Text w={"20%"}>Project Description :   </Text>
          <Text py="2" textAlign={"start"} w={"80%"}>
                {/* <span style={{fontWeight:"bold",color:"green.900"}}>Description :
                </span>  */}
                 {el.Description}</Text> 
          </Flex>
    
        </Card>
      ))}
    </div>
  );
};

export default DisplayProjects;
