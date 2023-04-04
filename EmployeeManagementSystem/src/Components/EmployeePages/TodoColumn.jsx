import {Badge, Box, Flex, Spacer, Tag, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {TiDelete} from "react-icons/ti";
import {useDispatch, useSelector} from "react-redux";
import {DeleteTodo} from "../../Redux/Todo/Todo.action";

const TodoColumn = ({Todos, tabletitle, showmytodos}) => {
  console.log(Todos);
  let MyTodos = Todos ? Todos : [];
  let dispatch = useDispatch();
  let {token, email} = useSelector((store) => store.Auth);

  let RemoveTodo = (el) => {
    dispatch(DeleteTodo(el._id,email));
    setTimeout(() => {
      showmytodos();
    }, 5000);
  };
  return (
    <>
      <VStack w={"100%"} gap={2} border={"1px"}>
        <Box width={"100%"} borderBottom={"1px"} p={3}>
          <Text
            fontWeight={"bold"}
            fontSize={"1.4rem"}
            color={"primaryblue.500"}
          >
            {tabletitle}
          </Text>
        </Box>

        {MyTodos &&
          MyTodos?.map((el) => (
            <VStack
              border={"1px"}
              width={"95%"}
              m={"auto"}
              p={2}
              rounded={"10px"}
            >
              <Flex
                w={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={"1.2rem"} fontWeight={"semibold"}>
                  {el.Todo}
                </Text>
                <TiDelete
                  onClick={() => RemoveTodo(el)}
                  cursor={"pointer"}
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    color: "lightblue",
                  }}
                />
              </Flex>
              <Flex
                justifyContent={"space-between"}
                w={"100%"}
                alignItems={"center"}
              >
                <Flex fontSize={"0.7rem"} gap={4} alignItems={"center"}>
                  <Text fontSize={"0.7rem"} color={"gray"}>
                    {" "}
                    Time : {el?.time}
                  </Text>
                  <Text fontSize={"0.7rem"} color={"gray"}>
                    {" "}
                    Date : {el?.DueDate}
                  </Text>
                </Flex>
                <Box>
                  <Badge
                    variant="outline"
                    bg={
                      el?.Priority == "1"
                        ? "red"
                        : el?.Priority == "2"
                        ? "primaryblue.100" 
                        : "green"
                    }
                    color={"white"}
                    pl={2}
                    pr={2}
                  >
                    {el.Priority == "1"
                      ? "High"
                      : el?.Priority == "2"
                      ? "Mid"
                      : "Low"}
                      
                  </Badge>
                </Box>
              </Flex>
            </VStack>
          ))}
      </VStack>
    </>
  );
};

export default TodoColumn;
