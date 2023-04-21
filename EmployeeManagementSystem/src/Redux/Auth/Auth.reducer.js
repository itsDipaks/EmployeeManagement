import {getlocalsdata, saveLocalsdata} from "../../assets/Localstorage";
import {
  AUTH_GET_ERROR,
  AUTH_GET_LOADING,
  AUTH_GET_SUCESS,
  AUTH_LOGOUT,
} from "./Auth.type";
const token = JSON.parse(localStorage.getItem("token")) || null
const isadmin = JSON.parse(localStorage.getItem("isadmin")) || false
let initialstate = {
  loading: false,
  error: false,
  token: token,
  isadmin: isadmin,
  msg: null,
  name:null,
  email:null
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
        localStorage.setItem("token", JSON.stringify(payload?.data?.token));
        localStorage.setItem("isadmin", JSON.stringify(payload?.data?.isAdmin));
      }
      return {
        ...state,
        loading: false,
        token: payload.data.token,
        isadmin: payload.data.isAdmin,
        name: payload.data.userinfo.name,
        email: payload.data.userinfo.email
      };
    }
    case AUTH_GET_ERROR: {
      return {
        ...state,
        loading: false,
        isuser: false,
        error: true,
      };
    }
    case AUTH_LOGOUT: {
      localStorage.removeItem("token")
      localStorage.removeItem("isadmin")
      return {
        ...state,
        token: null,
        email:null,
        name:null

      };
    }
    default:
      return state;
  }
};
