import { PROJECT_GET_SUCESS,PROJECT_GET_ERROR,PROJECT_GET_LOADING, PROJECT_DELETE } from "./Project.type";

let initialstate = {
  loading: false,
  error: false,
  ProjectsData: [],
  msg:{}

};

export const ProjectReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case PROJECT_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case PROJECT_GET_SUCESS: {
      // console.log(payload)
      return {
        ...state,
        loading: false,
        ProjectsData:payload
      };
    }
    case PROJECT_GET_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case PROJECT_DELETE: {
      return {
        ...state,
        loading: false,
        msg:payload
      };
    }
    default:return state
  }
};
