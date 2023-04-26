import {Box, Button, Flex, Text, Tooltip, VStack} from "@chakra-ui/react";
import React from "react";
import {BsLightning} from "react-icons/bs";
import {MdDeleteForever} from "react-icons/md";
import {TiTick, TiTickOutline} from "react-icons/ti";
import {FaEdit} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {DeleteTask} from "../../Redux/TaskProject/TaskProject.action";

const ShowProjectTask = ({data, getProjectTasks, index}) => {
  let {AssignEmployee, DueDate, Status, Task, created_at, updated_at} = data
    ? data
    : "";
  // let {token, email} = useSelector((store) => store.Auth);
  // let {ProjectsData} = useSelector((store) => store.ProjectsData);
  // console.log(ProjectsData, email);

  let dispatch = useDispatch();
  let DeleteThisTask = () => {
    dispatch(DeleteTask(data._id));
    setTimeout(() => {
      getProjectTasks();
    }, 3000);
  };

  return (
    <>
      <Flex
        width={"100%"}
        justifyContent={"space-between"}
        boxShadow="lg"
        p={1}
        rounded={"10px"}
        alignItems={"center"}
        bg={Status == "Completed" ? "green.100" : "red.100"}
      >
        <Box w={"10%"} rounded={"full"}>
          <Text fontWeight={"bold"}>{index + 1}</Text>
        </Box>

        <Box width={"75%"} textAlign={"center"}>
          <Text fontSize={"lg"} color={"black"} fontWeight={"semibold"} as={Status=="Completed" ? 's' :""} >
            {" "}
            {Task ? Task : ""}
          </Text>

          <Flex
            flexDirection={"column"}
            w={"80%"}
            m={"auto"}
            textAlign={"start"}
            color={"gray.500"}
          >
            
            <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
            <Text fontSize={"xs"}>Assigned To : </Text>
            <Text fontSize={"sm"} color={"gray.900"}> {AssignEmployee}</Text>
            </Flex>
            <Text fontSize={"xs"}>Due Date : {DueDate}</Text>
          </Flex>
        </Box>

        <Flex w={"15%"} justify={"space-between"}>
          <Box boxShadow="xl" p={1} rounded={"full"} cursor={"pointer"}>
          { Status=="Completed" ? <TiTick style={{color:"green",width:"1.5rem", height:"1.5rem"}}/> :<FaEdit
              style={{color:"darkblue",width:"1rem", height:"1rem"}}
            /> }
          </Box>
          <Box boxShadow="xl" p={1} rounded={"full"} cursor={"pointer"}>
            <MdDeleteForever
            
              onClick={DeleteThisTask}
              style={{color:"darkred",width:"1.2rem", height:"1.2rem"}}
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ShowProjectTask;
