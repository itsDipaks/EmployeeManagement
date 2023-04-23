import { PROJECT_GET_SUCESS,PROJECT_GET_ERROR,PROJECT_GET_LOADING, PROJECT_DELETE } from "./Project.type";

let initialstate = {
  LoadProject: false,
  error: false,
  ProjectsData: [],


};

export const ProjectReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case PROJECT_GET_LOADING: {
      return {
        ...state,
        LoadProject: true,
      };
    }
    case PROJECT_GET_SUCESS: {
      // console.log(payload)
      return {
        ...state,
        LoadProject: false,
        ProjectsData:payload.data
      };
    }
    case PROJECT_GET_ERROR: {
      return {
        ...state,
        LoadProject: false,
      };
    }
    case PROJECT_DELETE: {
      return {
        ...state,
        LoadProject: false,
        msg:payload
      };
    }
    default:return state
  }
};
