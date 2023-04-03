import {
  TODO_GET_LOADING,
  TODO_GET_SUCESS,
  TODO_GET_ERROR,
  TODO_DELETE,
} from "./Todo.type";
import axios from "axios";
import Swal from "sweetalert2";
import {Backendurl} from "../../assets/Urls";

export let AddTodo = (todoformdata) => async (dispatch) => {
  dispatch({type: TODO_GET_LOADING});
  try {
    let Addtodo = await axios.post(`${Backendurl}/todo/addtodo`, {
      todoformdata,
    });
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

export let GetallMyTodos = (email) => async (dispatch) => {
  dispatch({type: TODO_GET_LOADING});

  try {
    let AllTodos = await axios.get(`${Backendurl}/todo/myalltodos`, {
      headers: {
        email: email,
      },
    });

    console.log(AllTodos);
    dispatch({
      type: TODO_GET_SUCESS,
      payload: AllTodos.data.AllTodo,
    });
  } catch (err) {
    dispatch({type: TODO_GET_ERROR});
  }
};

export const DeleteTodo = (todoid,useremail) => (dispatch) => {
  dispatch({type: TODO_GET_LOADING});
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
        let TodoData = await axios.delete(`${Backendurl}/todo/deletetodo`, {
          headers: {
            todoid: todoid,
            useremail:useremail
          },
        });

        Swal.fire("Todo Deleted Sucessfully!", "", "success");
      }
    });
    dispatch({type: TODO_GET_SUCESS, payload: {msg: "sucess"}});
  } catch (err) {
    dispatch({type: TODO_GET_ERROR});
  }
};