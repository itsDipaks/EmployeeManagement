import {getlocalsdata, saveLocalsdata} from "../../assets/Localstorage";
import {
  AUTH_GET_ERROR,
  AUTH_GET_LOADING,
  AUTH_GET_SUCESS,
  AUTH_LOGOUT,
} from "./Auth.type";
const token = JSON.parse(localStorage.getItem("token")) || "";
let initialstate = {
  loading: false,
  error: false,
  token: token,
  isadmin: false,

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
      if (payload.data.token) {
        localStorage.setItem("token", JSON.stringify(payload.data.token));
      }
      console.log(payload.data);
      return {
        ...state,
        loading: false,
        token: payload.data.token,
        isadmin: payload.data.isAdmin,
        
      };
    }
    case AUTH_GET_ERROR: {
      return {
        ...state,
        loading: false,
        isuser: false,
      };
    }
    case AUTH_LOGOUT: {
      localStorage.removeItem("token");
    }

    default:
      return state;
  }
};
