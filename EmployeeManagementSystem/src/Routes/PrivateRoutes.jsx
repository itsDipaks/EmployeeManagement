import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getlocalsdata } from '../assets/Localstorage';
const EmployeePrivate = ({children}) => {
  let {isadmin}=useSelector(store=>store.Auth)
  let token =getlocalsdata("token")
  if(!isadmin && token){
    return children
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Access Denied',
      text: 'Only For Employee',
    })
    return <Navigate to="/login"/>
  }

}

const AdminPrivate = ({children}) => {
  let {isadmin}=useSelector(store=>store.Auth)
  let token =getlocalsdata("token")
  if(isadmin && token){
    return children
  }else{

    Swal.fire({
      icon: 'error',
      title: 'Access Denied',
      text: 'Only For Admin',
    })
    return <Navigate to="/login"/>
  }
}
const IsLogin = ({children}) => {
  let token =getlocalsdata("token")
  if( token){
    return children
  }else{

    Swal.fire({
      icon: 'error',
      title: 'Access Denied',
      text: 'Please Login',
    })
    return <Navigate to="/login"/>
  }
}

export  {EmployeePrivate,AdminPrivate,IsLogin}