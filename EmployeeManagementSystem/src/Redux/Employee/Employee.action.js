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
    console.log(EmData);
    dispatch({type: EMPLOYEE_GET_SUCESS, payload: EmData.data.Employees});
  } catch (err) {
    dispatch({type: EMPLOYEE_GET_ERROR});
  }
};


// export let SingleEmployee = (_id) => async (dispatch) => {
//   dispatch({type: EMPLOYEE_GET_LOADING});

//   try {
//     let EmData = await axios.get(`${Backendurl}/employee/empolyeeprofile`,{
//         headers: {
//             "_id": _id
//         },
//     });
//     console.log(EmData);
//     dispatch({type: EMPLOYEE_GET_SUCESS, payload: EmData.data.EmployeeProfile
//     });
//   } catch (err) {
//     dispatch({type: EMPLOYEE_GET_ERROR});
//   }
// };
export let SingleEmployee = (token) => async (dispatch) => {
  dispatch({type: EMPLOYEE_GET_LOADING});

  try {
    let EmData = await axios.get(`${Backendurl}/employee/singleemployee`,{
      headers: {
        "Authorization": token
    },
    });
    console.log(EmData);
    dispatch({type: EMPLOYEE_GET_SUCESS,payload: [ EmData.data]
    }
    );
  } catch (err) {
    dispatch({type: EMPLOYEE_GET_ERROR});
  }
};


