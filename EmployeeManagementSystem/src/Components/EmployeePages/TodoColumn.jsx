import {Badge, Box, Flex, Spacer, Tag, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {TiDelete} from "react-icons/ti";
import {useDispatch, useSelector} from "react-redux";
import {DeleteTodo} from "../../Redux/Todo/Todo.action";
import {Droppable} from "react-beautiful-dnd";
import DisplayTodocard from "./DisplayTodocard";
const TodoColumn = ({Todos, tabletitle, showmytodos, id}) => {
  let MyTodos = Todos ? Todos : [];
  let dispatch = useDispatch();
  let {token, email} = useSelector((store) => store.Auth);

  let RemoveTodo = (el) => {
    dispatch(DeleteTodo(el._id, email));
    setTimeout(() => {
      showmytodos();
    }, 5000);
  };
  return (
    <>
      <VStack w={"100%"} height={"90vh"}  gap={2} border={"1px"}>
        <Box width={"100%"} borderBottom={"1px"} p={3}>
          <Text
            fontWeight={"bold"}
            fontSize={"1.4rem"}
            color={"primaryblue.500"}
          >
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
                    Todo={el.Todo}
                    el={el}
                    time={el.time}
                    DueDate={el.DueDate}
                    Priority={el.Priority}
                    index={index}
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
