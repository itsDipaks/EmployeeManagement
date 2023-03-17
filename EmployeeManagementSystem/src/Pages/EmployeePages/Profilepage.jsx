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

  let {employeeData,loading}=useSelector(state=>state.Storedata)
  console.log(employeeData[0]?.data)


  useEffect(()=>{
    getuserprofile()

  },[])

  
  return (
    <div>
        
        
    <Text>
yes

       </Text>
    </div>
  )
}

export default Profilepage