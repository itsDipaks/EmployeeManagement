import {Backendurl} from "../../assets/Urls";
import {
  PROJECT_GET_SUCESS,
  PROJECT_GET_ERROR,
  PROJECT_GET_LOADING,
  PROJECT_DELETE,
} from "./Project.type";
import axios from "axios";
import Swal from "sweetalert2";

export let AddNewProject = (Projectdata) => async (dispatch) => {
  dispatch({type: PROJECT_GET_LOADING});
  // console.log(Projectdata);
  try {
    let Projectadded = await axios.post(
      `${Backendurl}/project/Addproject`,
      Projectdata
    );
    dispatch({type: PROJECT_GET_SUCESS});

    Swal.fire("Sucess!", "Project Added Succesfully !! ", "success");
  } catch (err) {
    dispatch({type: PROJECT_GET_ERROR});
    Swal.fire("Sucess!", "Project Added Succesfully !! ", "success");
  }
};

export let GetAllProjects = () => async (dispatch) => {
  dispatch({type: PROJECT_GET_LOADING});

  try {
    let ProjectGetData = await axios.get(`${Backendurl}/project/allprojects`);
    dispatch({
      type: PROJECT_GET_SUCESS,
      payload:{ data:ProjectGetData.data.GetallProjects,msg:ProjectGetData.data.msg}
    });
  } catch (err) {
    dispatch({type: PROJECT_GET_ERROR});
  }
};

export let GetAssignproject = (email) => async (dispatch) => {
  dispatch({type: PROJECT_GET_LOADING});

  try {
    let ProjectData = await axios.get(`${Backendurl}/project/assignproject`, {
      headers: {
        email: email,
      },
    });
    dispatch({type: PROJECT_GET_SUCESS, payload:{data:[ProjectData.data],msg:ProjectData.data.msg}});
  } catch (err) {
    dispatch({type: PROJECT_GET_ERROR});
  }
};

export const deleteproject = (projectid) => (dispatch) => {
  dispatch({type: PROJECT_GET_LOADING});
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
        let EmData = await axios.delete(`${Backendurl}/project/deleteproject`, {
          headers: {
            projectid: projectid,
          },
        });

        Swal.fire("Removed Sucessfully!", "", "success");
      }
    });
    dispatch({type: PROJECT_DELETE, payload: {msg: "sucess"}});
  } catch (err) {
    dispatch({type: PROJECT_GET_ERROR});
  }
};
