import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const EmployeePrivate = ({children}) => {
  let {isadmin,token}=useSelector(store=>store.Auth)
console.log(isadmin)
  if(!isadmin && token){
    return children
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Access Denied',
      text: 'Only For Employee',
      // footer: '<a href="">Why do I have this issue?</a>'
    })
    return <Navigate to="/login"/>
  }

}

const AdminPrivate = ({children}) => {
  let {isadmin,token}=useSelector(store=>store.Auth)
  if(isadmin && token){
    return children
  }else{

    Swal.fire({
      icon: 'error',
      title: 'Access Denied',
      text: 'Only For Admin',
      // footer: '<a href="">Why do I have this issue?</a>'
    })
    return <Navigate to="/login"/>
  }
}

export  {EmployeePrivate,AdminPrivate}