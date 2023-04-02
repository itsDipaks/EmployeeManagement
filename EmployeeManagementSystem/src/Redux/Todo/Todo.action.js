import { TODO_GET_LOADING,TODO_GET_SUCESS,TODO_GET_ERROR,TODO_DELETE } from "./Todo.type";
import axios from "axios";
import Swal from "sweetalert2";
import { Backendurl } from "../../assets/Urls";

export let AddTodo = () => async (dispatch) => {
  dispatch({type: TODO_GET_LOADING});
  try {
    let Addtodo = await axios.post(
      `${Backendurl}/todo/addtodo`,
{}
    );
    dispatch({type: TODO_GET_SUCESS});

    Swal.fire("Sucess!", "Feed Added Succesfully !! ", "success");
  } catch (err) {
    dispatch({type: TODO_GET_ERROR});
    Swal.fire({
      icon: "error",
      title: "Faild !! ",
      text: "Something Wents Wrong!",
    });
  }
};

export let GetallMyTodos = () => async (dispatch) => {
  dispatch({type: TODO_GET_LOADING});

  try {
    let AllTodos = await axios.get(`${Backendurl}/todo/alltodos`);
    dispatch({
      type: TODO_GET_SUCESS,
      payload: AllTodos.data.Allfeeds

    });

    console.log(AllFeeds)
  } catch (err) {
    dispatch({type: TODO_GET_ERROR});
  }
};

export const Deletefeed = (FeedId) => (dispatch) => {
    dispatch({type: FEEDS_GET_LOADING});
    try {
      Swal.fire({
        title: "Are you sure Want To Delete ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let FeedData = await axios.delete(`${Backendurl}/feed/deletefeed`, {
            headers:{
              FeedId: FeedId
            },
          });
  
          Swal.fire("Removed Sucessfully!", "", "success");
        }
      });
      dispatch({type: FEEDS_GET_SUCESS});
    } catch (err) {
      dispatch({type: FEEDS_GET_ERROR});
    }
  };
  
  





export let CommentonFeed = (CommentMsg,FeedId,name,email) => async (dispatch) => {
  dispatch({type: FEEDS_GET_LOADING});
  try {
    let AddComment = await axios.patch(
      `${Backendurl}/feed/addcomment`,
      {CommentMsg,FeedId,name,email}
    );
    dispatch({type: FEEDS_GET_SUCESS});

    Swal.fire("Sucess!", "Comment Added Succesfully !! ", "success");
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


