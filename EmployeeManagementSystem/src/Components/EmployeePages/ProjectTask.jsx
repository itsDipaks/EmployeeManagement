import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import AddProjectTask from './AddProjectTask'
import { useSelector } from 'react-redux'

const ProjectTask = () => {
    let {token, email} = useSelector((store) => store.Auth);
  let {ProjectsData} = useSelector((store) => store.ProjectsData);
  console.log(ProjectsData)
  return (
    <>
        

{email==ProjectsData[0]?.AssignedProject?.groupleader? <AddProjectTask/>:""}



    </>
  )
}

export default ProjectTask