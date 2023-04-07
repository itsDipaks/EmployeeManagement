import React from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {useDispatch, useSelector} from "react-redux";
import {GetallMyTodos} from "../../Redux/Todo/Todo.action";
import {Badge, Box, Flex, Spacer, Tag, Text, VStack} from "@chakra-ui/react";
import {TiDelete} from "react-icons/ti";
import {useEffect} from "react";

const Dragdrop = () => {
  let dispatch = useDispatch();

  let {token, email} = useSelector((store) => store.Auth);
  let {loading, Todos} = useSelector((store) => store.Todo);

  let showmytodos = () => {
    dispatch(GetallMyTodos(email));
  };

  useEffect(() => {
    showmytodos();
  }, []);

  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {Todos &&
                Todos?.map((el, index) => (
                  <Draggable
                    draggableId={`${el._id}`}
                    key={el._id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        bg={"primaryblue.20"}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                      >
                        <div
                          w={"100%"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <h1 fontSize={"1.2rem"} fontWeight={"semibold"}>
                            {el.Todo}
                          </h1>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
            </div>
          )}
        </Droppable>

        {/* { Todos? <TodoColumn Todos ={Todos} tabletitle={"Incomplete"} id={"1"} showmytodos={showmytodos}/>:""} */}
      </DragDropContext>
    </div>
  );
};

export default Dragdrop;
