import {Backendurl} from "../../assets/Urls";
import {AUTH_GET_ERROR, AUTH_GET_LOADING, AUTH_GET_SUCESS} from "./Auth.type";
import axios from "axios"
export let addEmployee = (formdata) => async (dispatch) => {
  dispatch({type: AUTH_GET_LOADING});
console.log(formdata)
  try {
    let Employee = await axios.post(`${Backendurl}/auth/addemployee`, formdata);
    console.log(Employee)
    dispatch({type: AUTH_GET_SUCESS});
  } catch (err) {
    dispatch({type: AUTH_GET_ERROR});
  }
};

export let userLogin = (loginformdata) => async (dispatch) => {
  dispatch({type: AUTH_GET_LOADING});
  try {
    let loginCred = await axios.post(`${Backendurl}/auth/login`, loginformdata);
    console.log(loginCred)
    dispatch({type: AUTH_GET_SUCESS,payload:loginCred});
    alert("login sucess")
  } catch (err) {
    dispatch({type: AUTH_GET_ERROR});
    alert("login faild")
  }
};

