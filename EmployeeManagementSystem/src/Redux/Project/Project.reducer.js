import { PROJECT_GET_SUCESS,PROJECT_GET_ERROR,PROJECT_GET_LOADING } from "./Project.type";

let initialstate = {
  loading: false,
  error: false,
  ProjectsData: []
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
    default:return state
  }
};
