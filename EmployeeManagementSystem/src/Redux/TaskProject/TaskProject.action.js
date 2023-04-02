import {TASK_GET_LOADING,TASK_GET_SUCESS,TASK_GET_ERROR} from "./TaskProject.type";
import axios from "axios";
import Swal from "sweetalert2";
import {Backendurl} from "../../assets/Urls";

export let AddTask = (Newtask) => async (dispatch) => {
  dispatch({type: TASK_GET_LOADING});
  try {
    let AddTask = await axios.post(`${Backendurl}/task/addtask`, {Newtask});
    dispatch({type: TASK_GET_SUCESS});
    Swal.fire("Sucess!", "Task Added Succesfully !! ", "success");
  } catch (err) {
    dispatch({type: TASK_GET_ERROR});
    Swal.fire({
      icon: "error",
      title: "Faild !! ",
      text: "Something Wents Wrong!",
    });
  }
};

export let GetallTask = () => async (dispatch) => {
  dispatch({type: TASK_GET_LOADING});

  try {
    let AllTask = await axios.get(`${Backendurl}/task/alltask`);
    dispatch({
      type: TASK_GET_SUCESS,
      payload: AllTask.data.Allfeeds,
    });

    console.log(AllTask);
  } catch (err) {
    dispatch({type: TASK_GET_ERROR});
  }
};
