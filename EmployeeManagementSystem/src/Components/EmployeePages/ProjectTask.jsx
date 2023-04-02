import { Box, Button, Input } from '@chakra-ui/react'
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
        <Box width={"100%"}>
          
{email==ProjectsData[0]?.AssignedProject?.groupleader? <AddProjectTask/>:""}

<Displaytask/>
        </Box>


    </>
  )
}

export default ProjectTask