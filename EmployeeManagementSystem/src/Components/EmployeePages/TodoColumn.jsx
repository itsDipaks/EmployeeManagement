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
        minHeight={"70vh"}
        roundedBottom={"xl"}
        bg={"blackAlpha.300"}
        gap={2}
      >
        <Box width={"100%"} bg={"blackAlpha.800"} borderBottom={"1px"} p={3}>
          <Text fontWeight={"bold"} fontSize={"1.4rem"} color={"white"}>
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
