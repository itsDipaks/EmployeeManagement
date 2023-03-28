import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {Multiselect} from "multiselect-react-dropdown";
import {useDispatch, useSelector} from "react-redux";
import {AllEmployee} from "../../Redux/Employee/Employee.action";
import {AddNewProject} from "../../Redux/Project/Project.action";
import DisplayProjects from "../../DashboardCompo/LargeComponents/DisplayProjects";
import {useNavigate} from "react-router-dom";
import AddprojectDrawer from "../../DashboardCompo/LargeComponents/AddprojectDrawer";
const ProjectAdd = () => {
  // -------Hooks-----------
  let dispatch = useDispatch();
  let [actionhandeld, setactionhandeld] = useState(false);
  useEffect(() => {
    dispatch(AllEmployee());
  }, []);
  return (
    <>
      <Heading Size={"lg"} p={4}>
        Project Managment
      </Heading>
      {/* --------Display All Projects------------- */}
      <Flex justifyContent={"space-between"} p={4} >
        <Text textAlign={"start"} fontSize={"2xl"} fontWeight="bold">
          All Projects
        </Text>
        <AddprojectDrawer />
      </Flex>

      <Box>
        <DisplayProjects triggerdaction={actionhandeld} />
      </Box>
    </>
  );
};

export default ProjectAdd;
