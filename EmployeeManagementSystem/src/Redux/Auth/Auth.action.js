import {Backendurl} from "../../assets/Urls";
import {AUTH_GET_ERROR, AUTH_GET_LOADING, AUTH_GET_SUCESS} from "./Auth.type";

export let addEmployee = (info) => async (dispatch) => {
  dispatch({type: AUTH_GET_LOADING});

  try {
    let Employee = await axios.post(`${Backendurl}/auth/addemployee`, info);
    console.log(Employee)
    dispatch({type: AUTH_GET_SUCESS});
  } catch (err) {
    dispatch({type: AUTH_GET_ERROR});
  }
};
