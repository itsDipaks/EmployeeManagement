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
 console.log(AllTask)
    dispatch({
      type: TASK_GET_SUCESS,
      payload: AllTask.data
      ,
    });

    console.log(AllTask);
  } catch (err) {
    dispatch({type: TASK_GET_ERROR});
  }
};


// =====Dlete Selected Task========

export const DeleteTask = (taskid) => (dispatch) => {
  dispatch({type: TASK_GET_LOADING});
  try {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let TaskData = await axios.delete(`${Backendurl}/task/deletetask`, {
          headers: {
            taskid: taskid,
          },
        });

        Swal.fire("Task Deleted Sucessfully!", "", "success");
      }
    });
    dispatch({type: TASK_GET_SUCESS, payload: {msg: "sucess"}});
  } catch (err) {
    dispatch({type: TASK_GET_ERROR});
  }
};


// ==============Chenge Task Status ==========




export let ChangedTaskStatus = (taskid, taskstatus) => async (dispatch) => {
  dispatch({type: TASK_GET_LOADING});
  try {
    let Taskdata = await axios.patch(`${Backendurl}/task/changestatus`, {Status:taskstatus}, {
      headers: {
        taskid:taskid,
      },
    });
    dispatch({type: TASK_GET_SUCESS});
    //  if(EmData.status==200){
    Swal.fire("Sucess!", "Task Complted  !! ", "success");
    // }
  } catch (err) {
    dispatch({type: TASK_GET_ERROR});
  }
};
