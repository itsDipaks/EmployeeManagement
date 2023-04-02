import { TASK_GET_LOADING } from "./TaskProject.type";
import axios from "axios";
import Swal from "sweetalert2";
import { Backendurl } from "../../assets/Urls";

export let AddTaskTodo = (taskform) => async (dispatch) => {
  dispatch({type: TASK_GET_LOADING});
  try {
    let AddTask = await axios.post(
      `${Backendurl}/task/addtask`,
{taskform}
    );
    dispatch({type: TODO_GET_SUCESS});

    Swal.fire("Sucess!", "Feed Added Succesfully !! ", "success");
  } catch (err) {
    dispatch({type: TODO_GET_ERROR});
    Swal.fire({
      icon: "error",
      title: "Faild !! ",
      text: "Something Wents Wrong!",
    });
  }
};

export let GetallMyTodos = () => async (dispatch) => {
  dispatch({type: TASK_GET_LOADING});

  try {
    let AllTodos = await axios.get(`${Backendurl}/todo/alltodos`);
    dispatch({
      type: TODO_GET_SUCESS,
      payload: AllTodos.data.Allfeeds

    });

    console.log(AllFeeds)
  } catch (err) {
    dispatch({type: TODO_GET_ERROR});
  }
};





