import {Box, Button, useColorModeValue} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GetAssignproject} from "../../Redux/Project/Project.action";
import DisplayEmployeeCard from "../../Components/EmployeePages/DisplayEmployeeCard";
import DisplayEmployeeProject from "../../Components/EmployeePages/DisplayEmployeeProject";
import DisplayProjectTask from "../../Components/EmployeePages/ProjectTask";

const ProjectDashboard = () => {
  let dispatch = useDispatch();
  let buttonbgcolor = useColorModeValue("primaryblue.100", "red.500");
  let buttoncolor = useColorModeValue("white", "black");
  let {token, email} = useSelector((store) => store.Auth);
  let {ProjectsData} = useSelector((store) => store.ProjectsData);
  console.log(ProjectsData);
  let projectval = ProjectsData[0]?.AssignedProject;
  console.log(projectval);
  useEffect(() => {
    dispatch(GetAssignproject(email));
  }, []);

  return (
    <>
      <Box display={"flex"} p={4}>
        <Box width={"80%"}>
          <DisplayEmployeeProject projectdata={projectval ? projectval : ""} />
          {projectval ? (
            <DisplayEmployeeCard empdata={projectval?.AssignedTeam} />
          ) : (
            ""
          )}
        </Box>

        <Box width={"20%"}>
          <DisplayProjectTask />
        </Box>
      </Box>
    </>
  );
};

export default ProjectDashboard;
