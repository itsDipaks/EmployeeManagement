import {Box, Button, Flex, Text, Tooltip, VStack} from "@chakra-ui/react";
import React from "react";
import {BsLightning} from "react-icons/bs";
import {MdDeleteForever} from "react-icons/md";
import {TiTickOutline} from "react-icons/ti";
import {FaEdit} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import { DeleteTask } from "../../Redux/TaskProject/TaskProject.action";

const ShowProjectTask = ({data,showtaskdata}) => {
  let {AssignEmployee, DueDate, Status, Task, created_at, updated_at} = data
    ? data
    : "";
  let {token, email} = useSelector((store) => store.Auth);
  let {ProjectsData} = useSelector((store) => store.ProjectsData);
  // console.log(ProjectsData, email);

let dispatch=useDispatch()
let DeleteThisTask=()=>{
  dispatch(DeleteTask(data._id))
  setTimeout(()=>{
    showtaskdata()
  },3000)
}



  return (
    <>
      <Flex
        width={"100%"}
        justifyContent={"space-between"}
        boxShadow="lg"
        p={1}
        rounded={"10px"}
        alignItems={"center"}
        bg={Status=="Completed"?"green.100":"red.100"}
      >
        <Box  w={"10%"} p={1} rounded={"full"}>
          <BsLightning style={{width: "100%"}} />
        </Box>

        <Box width={"75%"} textAlign={"center"}>
          <Text fontSize={"lg"}> {Task ? Task : ""}</Text>

          <Flex
            flexDirection={"column"}
            w={"80%"}
            m={"auto"}
            textAlign={"start"}
            color={"gray.500"}
          >
              <Text fontSize={"xs"}>Assigned:{AssignEmployee}</Text>
            <Text fontSize={"xs"}>Due Date :{DueDate}</Text>
          </Flex>
        </Box>


<Flex w={"15%"} justify={"space-between"}>

<Box  boxShadow='xl' p={1} rounded={"full"} cursor={"pointer"}>
          <FaEdit style={{width: "100%",height:"100%",color:"darkblue"}} />
        </Box>
          <Box
            boxShadow='xl'
            p={1}
            rounded={"full"}
            cursor={"pointer"}
          >
            <MdDeleteForever  onClick={DeleteThisTask} style={{width: "100%" ,color:"darkred"}} />
         
          </Box>
      
</Flex>
      
      </Flex>
    </>
  );
};

export default ShowProjectTask;
