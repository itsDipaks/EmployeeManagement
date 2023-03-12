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
