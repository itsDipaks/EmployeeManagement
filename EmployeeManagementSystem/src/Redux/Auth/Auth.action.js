import {Backendurl} from "../../assets/Urls";
import {
  AUTH_GET_ERROR,
  AUTH_GET_LOADING,
  AUTH_GET_SUCESS,
  AUTH_LOGOUT,
} from "./Auth.type";
import axios from "axios";
import Swal from "sweetalert2";


export let addEmployee = (formdata) => async (dispatch) => {
  dispatch({type: AUTH_GET_LOADING});
  console.log(formdata);
  try {
    let Employee = await axios.post(`${Backendurl}/auth/addemployee`, formdata);
    dispatch({type: AUTH_GET_SUCESS});
  } catch (err) {
    dispatch({type: AUTH_GET_ERROR});
  }
};

export let userLogin = (loginformdata) => async (dispatch) => {
  dispatch({type: AUTH_GET_LOADING});
  try {
    let loginCred = await axios.post(`${Backendurl}/auth/login`,loginformdata);
    dispatch({type: AUTH_GET_SUCESS, payload: loginCred});
    Swal.fire("Welcome Back !", "Login success !", "success");
  } catch (err) {
    dispatch({type: AUTH_GET_ERROR});
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Faild ! Please Check Your Credentials !",
    });
  }
};

export let userLogout = () => (dispatch) => {
  dispatch({type: AUTH_GET_LOADING});
  try {
    Swal.fire({
      title: "Are you sure?",
      // text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({type: AUTH_LOGOUT});
        
        Swal.fire("Logout Sucessfully!", "", "success");
      }
    });
  } catch (err) {
    dispatch({type: AUTH_GET_ERROR});
  }
};
