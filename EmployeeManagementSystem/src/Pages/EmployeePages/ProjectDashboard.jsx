import {Box, Button, useColorModeValue} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GetAssignproject} from "../../Redux/Project/Project.action";
import DisplayEmployeeCard from "../../Components/EmployeePages/DisplayEmployeeCard";
import DisplayEmployeeProject from "../../Components/EmployeePages/DisplayEmployeeProject";
import DisplayProjectTask from "../../Components/EmployeePages/ProjectTask";
import GrupeLederviewTasks from "../../Components/EmployeePages/GrupeLederviewTasks";
import AddProjectTask from "../../Components/EmployeePages/AddProjectTask";
const ProjectDashboard = () => {

  let dispatch = useDispatch();
  let { email} = useSelector((store) => store.Auth);
  let {ProjectsData} = useSelector((store) => store.ProjectsData);
  let projectval = ProjectsData[0]?.AssignedProject;
  useEffect(() => {
    dispatch(GetAssignproject(email));
  }, []);

  

  return (
    <>
      {ProjectsData.length > 0 ? (
        <Box display={"flex"} p={4}>
          <Box width={"70%"}>
            <DisplayEmployeeProject
              projectdata={projectval ? projectval : ""}
            />
            {projectval ? (
              <DisplayEmployeeCard empdata={projectval?.AssignedTeam} />
            ) : (
              ""
            )}
          </Box>

          <Box width={"30%"}>


            <DisplayProjectTask />
          </Box>
        </Box>
      ) : (
        ""
      )}


{email==ProjectsData[0]?.AssignedProject?.groupleader? <Box p={4}><AddProjectTask/></Box>:""}


<Box>

  </Box>
   
      {ProjectsData[0]?.AssignedProject?.groupleader == email ? <GrupeLederviewTasks />:""}
   
   
   
   
    </>
  );
};

export default ProjectDashboard;
