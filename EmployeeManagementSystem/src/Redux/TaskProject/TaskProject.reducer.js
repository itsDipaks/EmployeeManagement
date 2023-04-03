import { TASK_GET_LOADING,TASK_GET_SUCESS,TASK_GET_ERROR } from "./TaskProject.type";
let initialstate = {
  loading: false,
  error: false,
  tasks: [],
  msg:""

};

export const TaskReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case TASK_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case TASK_GET_SUCESS: {
      // console.log(payload)
      return {
        ...state,
        loading: false,
        tasks:payload.Alltasks,
        msg:payload.msg
      };
    }
    case TASK_GET_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    // case TODO_DELETE: {
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    // }
    default:return state
  }
};
