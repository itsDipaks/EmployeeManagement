import { Button, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAssignproject } from '../../Redux/Project/Project.action'
import DisplayEmployeeCard from '../../Components/EmployeePages/DisplayEmployeeCard'
import DisplayEmployeeProject from '../../Components/EmployeePages/DisplayEmployeeProject'

const ProjectDashboard = () => {
  let dispatch=useDispatch()
let buttonbgcolor=useColorModeValue("primaryblue.100","red.500")
let buttoncolor=useColorModeValue("white","black")
let {token,email} = useSelector((store) => store.Auth);
let {ProjectsData} = useSelector((store) => store.ProjectsData);
console.log(ProjectsData)
let projectval=ProjectsData[0]?.AssignedProject
console.log(projectval)
useEffect(()=>{
dispatch(GetAssignproject(email))
},[])


  return (
    <div>
         <DisplayEmployeeProject projectdata={projectval?projectval:""}/>
    { projectval? <DisplayEmployeeCard empdata={projectval?.AssignedTeam}/>:""}
   

    </div>
  )
}

export default ProjectDashboard