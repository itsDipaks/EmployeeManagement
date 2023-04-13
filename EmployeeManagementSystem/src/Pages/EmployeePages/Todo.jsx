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
  let {email} = useSelector((store) => store.Auth);
  let {Todos} = useSelector((store) => store.Todo);

  let ProritySortedTodos = Todos?.sort((a, b) => {
    return a.Priority - b.Priority;
  });

  let showmytodos = () => {
    dispatch(GetallMyTodos(email));
  };

  let IncompleteTodo =
    Todos &&
    Todos?.filter((el) => {
      return el.Status == "Incomplete";
    });
  let ProgressTodo =
    Todos &&
    Todos?.filter((el) => {
      return el.Status == "InProgress";
    });
  let CompletedTodod =
    Todos &&
    Todos?.filter((el) => {
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
  }, []);

  return (
    <>
      <AddNewTodo showmytodos={showmytodos} />
      <Grid templateColumns="repeat(3, 1fr)" gap={6} p={8}>
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
