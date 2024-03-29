import {
  Box,
  Button,
  Progress,
  Spinner,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
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
import NoProject from "../../Components/DispalyError/NotFound";
import NotFound from "../../Components/DispalyError/NotFound";
import DataNameLoading from "../../Components/CustomLoader/DataNameLoading";
const ProjectDashboard = () => {
  let dispatch = useDispatch();

  let {email} = useSelector((store) => store.Auth);

  let getAssignedProject = () => {
    dispatch(GetAssignproject(email));
  };

  let {ProjectsData, LoadProject} = useSelector((store) => store.ProjectsData);
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

  let {tasks,LoadTask} = useSelector((store) => store.Tasks);
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
        <Displaytask
          AuthEmail={email}
          getProjectTasks={getProjectTasks}
          tasks={tasks}
          projectval={projectval}
        />
      ) : (
        ""
      )}
      {ProjectsData.length > 0 ? (

LoadProject ?  <Spinner color='red.500' />:
        <Box display={"flex"} flexDirection={{lg: "row", sm: "column"}} p={4}>
          <Box width={{sm: "98%", lg: "70%"}}>
            <DisplayEmployeeProject
              projectdata={projectval ? projectval : null}
            />
            {projectval ? (
              <DisplayEmployee
                empdata={projectval?.AssignedTeam}
                tasks={tasks}
                LoadTask={LoadTask}
              />
            ) : (
              ""
            )}
          </Box>
          <VStack width={{lg: "30%", sm: "100%"}}>
            <Box
              display={"flex"}
              w={"100%"}
              mt="4"
              flexDir={{lg: "column", sm: "row"}}
            >
              <ProjectProgress
                w={"50%"}
                totaltask={tasks.length}
                completedtask={CompletedTasks.length}
              />
              <Box w={"70%"} m={"auto"} p={4}>
                {AuthEmployeeData?.map((el) => (
                  <SingleEmpBox tasks={tasks} emp={el} />
                ))}
                {/* <ChartSetup
                getProjectTasks={getProjectTasks}
                data={[pendingTasks.length, CompletedTasks.length]}
              /> */}
              </Box>
            </Box>
          </VStack>
        </Box>
      )
      
      
      
      : (
        <NotFound
          title={"No Project To Assigned "}
          desc={"No Project Is Assigned "}
        />
      )}

      {ProjectsData.length > 0 && email == projectval?.groupleader ? (
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
        {(ProjectsData.length > 0 &&
          projectval?.groupleader == email &&
          CompletedTasks.length > 0) ||
        pendingTasks.length > 0 ? (
          <GrupeLederviewTasks
            getProjectTasks={getProjectTasks}
            AuthEmail={email}
            projectval={projectval}
            tasks={tasks?.tasks}
            CompletedTasks={CompletedTasks}
            pendingTasks={pendingTasks}
          />
        ) : (
          <NotFound title={"No Tasks Added"} desc={"Notask Is Added here"} />
        )}
      </Box>
    </>
  );
};

export default ProjectDashboard;
