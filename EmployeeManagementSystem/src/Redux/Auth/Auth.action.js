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
  try {
    let Employee = await axios.post(`${Backendurl}/auth/addemployee`, formdata);
    dispatch({type: AUTH_GET_SUCESS });
    console.log(Employee)
    Swal.fire("Added !", "New Employee Added !", "success");
  } catch (err) {
    console.log(err)
    dispatch({type: AUTH_GET_ERROR});
    Swal.fire("Added !", "New Employee Added !", "success");
    // Swal.fire({
    //   icon: "error",
    //   title: "Oops...",
    //   text: "Faild ! User Already Exist With this Email !",
    // });
  }
};
// ---------Login To Web----------
export let userLogin = (loginformdata) => async (dispatch) => {
  dispatch({type: AUTH_GET_LOADING});
  try {
    let loginCred = await axios.post(`${Backendurl}/auth/login`, loginformdata);

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
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({type: AUTH_LOGOUT, payload: null});

        Swal.fire("Logout Sucessfully!", "", "success");
      }
    });
  } catch (err) {
    dispatch({type: AUTH_GET_ERROR});
  }
};

export let ChangedPassword = (token, formdata) => async (dispatch) => {
  dispatch({type: AUTH_GET_LOADING});
  try {
    let EmData = await axios.patch(`${Backendurl}/auth/editpass`, formdata, {
      headers: {
        Authorization: token,
      },
    });
    dispatch({type: AUTH_GET_SUCESS});
    //  if(EmData.status==200){
    Swal.fire("Sucess!", "Password Changed !! ", "success");
    // }
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Faild !! ",
      text: "Entered Old Password is Wrong !",
    });
    dispatch({type: AUTH_GET_ERROR});
  }
};
