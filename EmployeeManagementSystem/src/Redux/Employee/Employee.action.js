import {Backendurl} from "../../assets/Urls";
import {
  EMPLOYEE_GET_LOADING,
  EMPLOYEE_GET_ERROR,
  EMPLOYEE_GET_SUCESS,
} from "./Employee.type";
import axios from "axios";
import Swal from "sweetalert2";
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
    let EmData = await axios.get(`${Backendurl}/employee/singleemployee`, {
      headers: {
        user_id: id,
      },
    });
// console.log(EmData+"em")
    // arr.push(EmData.data)
    let arr=[]
    
    console.log(EmData.data);
    arr.push(EmData.data)
    console.log(arr)
    dispatch({type: EMPLOYEE_GET_SUCESS, payload:arr});
  } catch (err) {
    dispatch({type: EMPLOYEE_GET_ERROR});
  }
};
export let DeleteEmployee = (id) => async (dispatch) => {
  console.log(id);
  dispatch({type: EMPLOYEE_GET_LOADING});

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
        let EmData = await axios.delete(
          `${Backendurl}/employee/deleteemployee`,
          {
            headers: {
              user_id: id,
            },
          }
        );

        Swal.fire("Removed Sucessfully!", "", "success");
      }
    });

    // dispatch({type: EMPLOYEE_GET_SUCESS,payload:EmData.data
    // }
    // );
  } catch (err) {
    dispatch({type: EMPLOYEE_GET_ERROR});
  }
};
