import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import AddProjectTask from './AddProjectTask'
import { useSelector } from 'react-redux'
import Displaytask from './Displaytask'

const ProjectTask = () => {
    let {token, email} = useSelector((store) => store.Auth);
  let {ProjectsData} = useSelector((store) => store.ProjectsData);
  console.log(ProjectsData)
  return (
    <>
        

{email==ProjectsData[0]?.AssignedProject?.groupleader? <AddProjectTask/>:""}

<Displaytask/>

    </>
  )
}

export default ProjectTask