import { Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getlocalsdata } from '../../assets/Localstorage'
import { SingleEmployee } from '../../Redux/Employee/Employee.action'

const Profilepage = () => {

  let token=getlocalsdata("token")
let dispatch=useDispatch()
  let getuserprofile=()=>{
    dispatch(SingleEmployee(token))
  }

  let {employeeData} =useSelector(state=>state.Storedata)
  console.log(employeeData[0].data
    )
  let {}=employeeData[0]
  useEffect(()=>{
    getuserprofile()
  },[])
  return (
    <div>
        
        
    <Text>


       </Text>
    </div>
  )
}

export default Profilepage