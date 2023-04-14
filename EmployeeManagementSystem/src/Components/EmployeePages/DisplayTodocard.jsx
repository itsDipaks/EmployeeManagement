import React from "react";
import {Badge, Box, Flex, Spacer, Tag, Text, VStack} from "@chakra-ui/react";
import {TiDelete, TiTick} from "react-icons/ti";
import {MdPending} from "react-icons/md";
import {Draggable} from "react-beautiful-dnd";
import {useDispatch} from "react-redux";
import {DeleteTodo} from "../../Redux/Todo/Todo.action";

const DisplayTodocard = ({
  Todo,
  el,
  time,
  DueDate,
  Priority,
  index,
  email,
  showmytodos,
  tabletitle
}) => {
  let todoid = el?._id;

  let dispatch = useDispatch();
  let RemoveTodo = () => {
    dispatch(DeleteTodo(todoid, email));
    setTimeout(() => {
      showmytodos();
    }, 5000);
  };

  return (
    <>
      <Draggable draggableId={`${el?._id}`} key={el?._id} index={index}>
        {(provided, snapshot) => (
          <Box
            width={"28vw"}
            m={4}
            p={4}
            rounded={"10px"}
            // data-aos="fade-right"
            bg={"black"}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
          { tabletitle=="Completed"? <TiTick style={{color:"green",width:"1.5rem", height:"1.5rem"}}/>:""}
          { tabletitle=="Progress"? <MdPending style={{color:"white"}}/>:""}
            <Flex
              w={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              
              <Text fontSize={"1.2rem"} color={"white"} fontWeight={"semibold"}>
                {Todo}
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
                  Time : {time}
                </Text>
                <Text fontSize={"0.7rem"} color={"gray"}>
                  {" "}
                  Date : {DueDate}
                </Text>
              </Flex>
              <Box>
                <Badge
                  bg={
                    Priority == "1"
                      ? "red.600"
                      : Priority == "2"
                      ? "blue.400"
                      : "green.700"
                  }
                  color={"white"}
                  pl={2}
                  pr={2}
                >
                  {Priority == "1" ? "H" : Priority == "2" ? "M" : "L"}
                </Badge>
              </Box>
            </Flex>
            {provided.placeholder}
          </Box>
        )}
      </Draggable>
    </>
  );
};

export default DisplayTodocard;
