import {
  Grid
} from "@chakra-ui/react";
import React from "react";
import TodoColumn from "../../Components/EmployeePages/TodoColumn";
import {useDispatch, useSelector} from "react-redux";
import {ChangedTodoStatus, GetallMyTodos} from "../../Redux/Todo/Todo.action";
import {useEffect} from "react";
import AddNewTodo from "../../Components/EmployeePages/AddNewTodo";
import {DragDropContext} from "react-beautiful-dnd";
const Todo = () => {
  let dispatch = useDispatch();
  let {Todos,LoadTodo} = useSelector((store) => store.Todo);
  const email = JSON.parse(localStorage.getItem("email")) || false

  let ProritySortedTodos = Todos && Todos?.sort((a, b) => {
    return a?.Priority - b?.Priority;
  });

  let showmytodos = () => {
    dispatch(GetallMyTodos(email));
  };

  
  let IncompleteTodo =
  ProritySortedTodos &&
  ProritySortedTodos?.filter((el) => {
      return el?.Status == "Incomplete";
    });
  let ProgressTodo =
  ProritySortedTodos &&
  ProritySortedTodos?.filter((el) => {
      return el?.Status == "InProgress";
    });
  let CompletedTodod =
  ProritySortedTodos &&
  ProritySortedTodos?.filter((el) => {
      return el.Status == "Completed";
    });

  const handleDragEnd = (result) => {
    const {destination, source, draggableId} = result;
    if (source.droppableId == destination.droppableId) {
      return;
    } else if (destination.droppableId == "1") {
      dispatch(ChangedTodoStatus("Incomplete", draggableId));
      setTimeout(() => {
        showmytodos();
      }, 1000);
    } else if (destination.droppableId == "2") {
      dispatch(ChangedTodoStatus("InProgress", draggableId));
      setTimeout(() => {
        showmytodos();
      }, 1000);
    } else {
      dispatch(ChangedTodoStatus("Completed", draggableId));
      setTimeout(() => {
        showmytodos();
      }, 1000);
    }
  };

  useEffect(() => {
    showmytodos();
  }, [])

  return (
    <>
      <AddNewTodo showmytodos={showmytodos}  LoadTodo={LoadTodo} />

      
      <Grid templateColumns="repeat(3, 1fr)" gap={4} p={{sm:"2",lg:"8"}}>
        <DragDropContext onDragEnd={handleDragEnd}>
          {Todos ? (
            <TodoColumn
              Todos={IncompleteTodo && IncompleteTodo}
              tabletitle={"Incomplete"}
              id={"1"}
              showmytodos={showmytodos}
            />
          ) : (
            ""
          )}
          <TodoColumn
            id={"2"}
            Todos={ProgressTodo && ProgressTodo}
            tabletitle={"Progress"}
            showmytodos={showmytodos}

            
          />
          <TodoColumn
            id={"3"}
            Todos={CompletedTodod && CompletedTodod}
            tabletitle={"Completed"}
            showmytodos={showmytodos}

          />
        </DragDropContext>
      </Grid>
    </>
  );
};

export default Todo;
