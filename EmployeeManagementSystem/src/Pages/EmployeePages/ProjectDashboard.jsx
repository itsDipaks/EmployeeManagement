import {Box, Button, Progress, VStack, useColorModeValue} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GetAssignproject} from "../../Redux/Project/Project.action";
import DisplayEmployeeProject from "../../Components/EmployeePages/DisplayEmployeeProject";
import GrupeLederviewTasks from "../../Components/EmployeePages/GrupeLederviewTasks";
import AddProjectTask from "../../Components/EmployeePages/AddProjectTask";
import ProjectProgress from "../../Components/EmployeePages/ProjectProgress";
import {GetallTask} from "../../Redux/TaskProject/TaskProject.action";
import Displaytask from "../../Components/EmployeePages/Displaytask";
import ChartSetup from "../../Components/Charts/ChartSetup";
import DisplayEmployee from "../../Components/EmployeePages/DisplayEmployee";
import SingleEmpBox from "../../Components/EmployeePages/SingleEmpBox";
const ProjectDashboard = () => {
  let dispatch = useDispatch();

  let {email} = useSelector((store) => store.Auth);

  let getAssignedProject = () => {
    dispatch(GetAssignproject(email));
  };

  let {ProjectsData} = useSelector((store) => store.ProjectsData);
  let projectval = ProjectsData[0]?.AssignedProject;

  let getProjectTasks = () => {
    dispatch(GetallTask(projectval?._id));
  };

  useEffect(() => {
    getAssignedProject();
  }, []);

  useEffect(() => {
    getProjectTasks();
  }, []);

  let {tasks} = useSelector((store) => store.Tasks);

  // =====Groupe Leader View Dashboard=====
  let CompletedTasks = tasks?.filter((el) => {
    return el.Status == "Completed";
  });

  let pendingTasks = tasks?.filter((el) => {
    return el.Status == "Incomplete";
  });

  let AuthEmployeeData = projectval?.AssignedTeam.filter((val) => {
    return val.email == email;
  });
  return (
    <>
    

      {ProjectsData.length > 0 ? (
        <Box display={"flex"} p={4}>
        
          <Box width={"70%"}>
            <DisplayEmployeeProject
              projectdata={projectval ? projectval : ""}
            />
            {projectval ? (
              <DisplayEmployee
                empdata={projectval?.AssignedTeam}
                tasks={tasks}
              />
            ) : (
              ""
            )}
          </Box>

          <VStack width={"30%"}>
          <Displaytask
        AuthEmail={email}
        getProjectTasks={getProjectTasks}
        tasks={tasks}
        projectval={projectval}
      />
            <ProjectProgress
              totaltask={tasks.length}
              completedtask={CompletedTasks.length}
            />
            <Box w={"20vw"} m={"auto"} p={4}>
              {AuthEmployeeData?.map((el) => (
                <SingleEmpBox tasks={tasks} emp={el} />
              ))}

              <ChartSetup
                getProjectTasks={getProjectTasks}
                data={[pendingTasks.length, CompletedTasks.length]}
              />
            </Box>
          </VStack>
        </Box>
      ) : (
        ""
      )}

      {email == projectval?.groupleader ? (
        <Box p={4}>
          <AddProjectTask
            getProjectTasks={getProjectTasks}
            projectid={projectval?._id}
          />
        </Box>
      ) : (
        ""
      )}

      <Box pb={1}>

      {projectval?.groupleader == email ? (
        <GrupeLederviewTasks
          getProjectTasks={getProjectTasks}
          AuthEmail={email}
          projectval={projectval}
          tasks={tasks?.tasks}
          CompletedTasks={CompletedTasks}
          pendingTasks={pendingTasks}
        />
      ) : (
        ""
      )}
      </Box>
    </>
  );
};

export default ProjectDashboard;
