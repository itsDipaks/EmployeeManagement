import {Box, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {useSelector} from "react-redux";
import {Droppable} from "react-beautiful-dnd";
import DisplayTodocard from "./DisplayTodocard";
const TodoColumn = ({Todos, tabletitle, showmytodos, id}) => {
  let MyTodos = Todos ? Todos : [];
  let {email} = useSelector((store) => store.Auth);

  return (
    <>
      <VStack
        w={"100%"}
        minHeight={{sm:"max-content",md:"50vh",lg:"70vh"}}
        roundedBottom={"xl"}
        bg={"blackAlpha.300"}
        gap={2}
        borderBottom={"1px"} boxSizing="border-box"
      >
        <Box width={"100%"} bg={"green.400"} borderBottom={"1px"} boxSizing="border-box" p={{lg:3,sm:1}}>
          <Text fontWeight={"bold"} fontSize={{lg:"1.4rem",sm:"1rem"}} color={"black"}>
            {tabletitle}
          </Text>
        </Box>
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <Box
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {MyTodos &&
                MyTodos?.map((el, index) => (
                  <DisplayTodocard
                    Todo={el?.Todo}
                    el={el}
                    time={el?.time}
                    DueDate={el?.DueDate}
                    Priority={el?.Priority}
                    index={index}
                    email={email}
                    showmytodos={showmytodos}
                    tabletitle={tabletitle}
                  />
                ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </VStack>
    </>
  );
};

export default TodoColumn;
