import {AUTH_GET_ERROR, AUTH_GET_LOADING, AUTH_GET_SUCESS} from "./Auth.type";

let initialstate = {
  loading: false,
  error: false,
  token: "",
};

export const AuthReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case AUTH_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_GET_SUCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case AUTH_GET_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    default:return state
  }
};
