import {Box, Button, Flex, Text, Tooltip, VStack} from "@chakra-ui/react";
import React from "react";
import {TiTickOutline} from "react-icons/ti";
import {useDispatch} from "react-redux";
import {ChangedTaskStatus} from "../../Redux/TaskProject/TaskProject.action";
import {TiTick} from "react-icons/ti";
const ShowMyAssigntaskcard = ({
  data,
  colorstatus,
  onclickstatus,
  iconcolor,
  getProjectTasks ,
  index
}) => {
  let {AssignEmployee, DueDate, Status, Task, created_at, updated_at, _id} =
    data ? data : "";
  let dispatch = useDispatch();

  let ChangedToCompletes = () => {
    dispatch(ChangedTaskStatus(_id, onclickstatus));
    setTimeout(()=>{
      getProjectTasks()
    },1000)
    getProjectTasks()
  };
  return (
    <>
      <Flex
        width={"100%"}
        justifyContent={"space-between"}
        boxShadow="lg"
        p={2}
        rounded={"10px"}
        alignItems={"center"}
        bg={colorstatus}
      >
        <Box ml={4}>
          <Text fontWeight={"bold"} color={"black"}>{index+1}</Text>
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
            <Text fontSize={"xs"}>Due Date :{DueDate}</Text>
          </Flex>
        </Box>

        <Box
          border={`1px solid ${iconcolor}`}
          onClick={ChangedToCompletes}
          w={"10%"}
          p={1}
          rounded={"full"}
          cursor={"pointer"}
        >
          {onclickstatus == "Completed" ? (
          
                <TiTickOutline style={{width: "100%", color: iconcolor}} />
          ) : (
            <TiTick style={{width: "100%", color: iconcolor}} />
          )}
        </Box>
      </Flex>
    </>
  );
};

export default ShowMyAssigntaskcard;
