import { FEEDS_GET_LOADING,FEEDS_GET_SUCESS,FEEDS_GET_ERROR,FEEDS_DELETE } from "./Feeds.type";
import axios from "axios";
import Swal from "sweetalert2";
import { Backendurl } from "../../assets/Urls";

export let AddNewFeed = (Massage,name,email) => async (dispatch) => {
  dispatch({type: FEEDS_GET_LOADING});
  try {
    let FeedAdd = await axios.post(
      `${Backendurl}/feed/addfeed`,
      {Massage,name}
    );
    dispatch({type: FEEDS_GET_SUCESS});

    Swal.fire("Sucess!", "Feed Added Succesfully !! ", "success");
  } catch (err) {
    dispatch({type: FEEDS_GET_ERROR});
    Swal.fire({
      icon: "error",
      title: "Faild !! ",
      text: "Something Wents Wrong!",
    });
  }
};

export let GetAllFeeds = () => async (dispatch) => {
  dispatch({type: FEEDS_GET_LOADING});

  try {
    let AllFeedsData = await axios.get(`${Backendurl}/feed/allfeeds`);
    dispatch({
      type: FEEDS_GET_SUCESS,
      payload: AllFeedsData.data.Allfeeds

    });

    console.log(AllFeeds)
  } catch (err) {
    dispatch({type: FEEDS_GET_ERROR});
  }
};







export let CommentonFeed = (CommentMsg,FeedId) => async (dispatch) => {
  dispatch({type: FEEDS_GET_LOADING});
  try {
    let AddComment = await axios.post(
      `${Backendurl}/feed/addcomment`,
      {CommentMsg,FeedId}
    );
    dispatch({type: FEEDS_GET_SUCESS});

    Swal.fire("Sucess!", "Feed Added Succesfully !! ", "success");
  } catch (err) {
    dispatch({type: FEEDS_GET_ERROR});
    Swal.fire({
      icon: "error",
      title: "Faild !! ",
      text: "Something Wents Wrong!",
    });
  }
};




// export let SingleEmployee = (token) => async (dispatch) => {
//   dispatch({type: EMPLOYEE_GET_LOADING});

//   try {
//     let EmData = await axios.get(`${Backendurl}/employee/singleemployee`, {
//       headers: {
//         Authorization: token,
//       },
//     });
//     // console.log(EmData);
//     dispatch({type: EMPLOYEE_GET_SUCESS, payload: [EmData.data]});
//   } catch (err) {
//     dispatch({type: EMPLOYEE_GET_ERROR});
//   }
// };

// export const deleteproject = (projectid) => (dispatch) => {
//   dispatch({type: PROJECT_GET_LOADING});
//   try {
//     Swal.fire({
//       title: "Are you sure?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, Delete!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         let EmData = await axios.delete(`${Backendurl}/project/deleteproject`, {
//           headers: {
//             projectid: projectid,
//           },
//         });

//         Swal.fire("Removed Sucessfully!", "", "success");
//       }
//     });
//     dispatch({type: PROJECT_DELETE, payload: {msg: "sucess"}});
//   } catch (err) {
//     dispatch({type: PROJECT_GET_ERROR});
//   }
// };

