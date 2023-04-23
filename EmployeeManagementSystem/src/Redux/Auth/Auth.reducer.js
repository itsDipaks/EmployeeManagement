import {getlocalsdata, saveLocalsdata} from "../../assets/Localstorage";
import {
  AUTH_GET_ERROR,
  AUTH_GET_LOADING,
  AUTH_GET_SUCESS,
  AUTH_LOGOUT,
} from "./Auth.type";
const token = JSON.parse(localStorage.getItem("token")) || null
const isadmin = JSON.parse(localStorage.getItem("isadmin")) || false
const email = JSON.parse(localStorage.getItem("email")) || false
const name = JSON.parse(localStorage.getItem("email")) || false
let initialstate = {
  LoadAuth: false,
  error: false,
  token: token,
  isadmin: isadmin,
  msg: null,
  name:name,
  email:email
};

export const AuthReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case AUTH_GET_LOADING: {
      return {
        ...state,
        LoadAuth: true,
      };
    }
    case AUTH_GET_SUCESS: {
      if (payload.data.token) {
        localStorage.setItem("token", JSON.stringify(payload?.data?.token));
        localStorage.setItem("isadmin", JSON.stringify(payload?.data?.isAdmin));
        localStorage.setItem("email", JSON.stringify(payload?.data?.userinfo.email));
        localStorage.setItem("name", JSON.stringify(payload.data.userinfo.name));
      }
      return {
        ...state,
        LoadAuth: false,
        token: payload.data.token,
        isadmin: payload.data.isAdmin,
        name: payload.data.userinfo.name,
        email: payload.data.userinfo.email
      };
    }
    case AUTH_GET_ERROR: {
      return {
        ...state,
        LoadAuth: false,
        isuser: false,
        error: true,
      };
    }
    case AUTH_LOGOUT: {
      localStorage.removeItem("token")
      localStorage.removeItem("isadmin")
      localStorage.removeItem("email")
      return {
        ...state,
        token: null,
        email:null,
        name:null,
        LoadAuth:false
      };
    }
    default:
      return state;
  }
};
