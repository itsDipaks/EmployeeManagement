import {Backendurl} from "../../assets/Urls";
import { PROJECT_GET_SUCESS,PROJECT_GET_ERROR,PROJECT_GET_LOADING } from "./Project.type";
import axios from "axios"
import Swal from "sweetalert2";




export let AddNewProject = (Projectdata) => async (dispatch) => {
  dispatch({type: PROJECT_GET_LOADING});
  console.log(Projectdata);
  try {
    let Projectadded = await axios.post(`${Backendurl}/project/Addproject`, Projectdata);
    console.log(Projectadded)
    dispatch({type: PROJECT_GET_SUCESS});

    Swal.fire(
      'Sucess!',
      'Project Added Succesfully !! ',
      'success'
    )
  } catch (err) {
    dispatch({type: PROJECT_GET_ERROR});
    Swal.fire({
      icon: 'error',
      title: "Faild !! ",
      text: 'Entered Old Password is Wrong !',
    })
  }
};


export let GetAllProjects = () => async (dispatch) => {
  dispatch({type: PROJECT_GET_LOADING});

  try {
    let ProjectGetData = await axios.get(`${Backendurl}/project/allprojects`);
    console.log(ProjectGetData);
    dispatch({type: PROJECT_GET_SUCESS, payload:ProjectGetData.data.GetallProjects});
  } catch (err) {
    dispatch({type: PROJECT_GET_ERROR});
  }
};



export let SingleEmployee = (token) => async (dispatch) => {
  dispatch({type: EMPLOYEE_GET_LOADING});

  try {
    let EmData = await axios.get(`${Backendurl}/employee/singleemployee`,{
      headers: {
        "Authorization": token
    },
    });
    // console.log(EmData);
    dispatch({type: EMPLOYEE_GET_SUCESS,payload: [ EmData.data]
    }
    );
  } catch (err) {
    dispatch({type: EMPLOYEE_GET_ERROR});
  }
};


