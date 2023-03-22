import {Backendurl} from "../../assets/Urls";
import {
  EMPLOYEE_GET_LOADING,
  EMPLOYEE_GET_ERROR,
  EMPLOYEE_GET_SUCESS,
} from "./Employee.type";
import axios from "axios"
export let AllEmployee = () => async (dispatch) => {
  dispatch({type: EMPLOYEE_GET_LOADING});

  try {
    let EmData = await axios.get(`${Backendurl}/employee/allempolyees`);
   
    dispatch({type: EMPLOYEE_GET_SUCESS, payload: EmData.data.Employees});
  } catch (err) {
    dispatch({type: EMPLOYEE_GET_ERROR});
  }
};

export let SingleEmployee = (id) => async (dispatch) => {
  dispatch({type: EMPLOYEE_GET_LOADING});

  try {
    let EmData = await axios.get(`${Backendurl}/employee/singleemployee`,{
      headers: {
        "user_id": id
    },
    });
    console.log(EmData);
    dispatch({type: EMPLOYEE_GET_SUCESS,payload:EmData.data
    }
    );
  } catch (err) {
    dispatch({type: EMPLOYEE_GET_ERROR});
  }
};


