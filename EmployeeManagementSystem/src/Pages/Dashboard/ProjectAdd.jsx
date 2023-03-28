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
import DisplayProjects from "../../DashboardCompo/DisplayProjects";
import { useNavigate } from "react-router-dom";
import AddprojectDrawer from "../../DashboardCompo/LargeComponents/AddprojectDrawer";
const ProjectAdd = () => {
  // -------Hooks-----------
  let dispatch = useDispatch();
  // let [privewurl, setpriviewurl] = useState("");
  // let [otherdata, setotherdata] = useState({});
  // let [onclickprivew, setonclickpriview] = useState(
  //   "https://img.freepik.com/free-vector/landing-page-template-design-business-websides_52683-22971.jpg?size=338&ext=jpg"
  // );
  // let [AssignEmployee, setAssignEmployee] = useState([]);
  // const [status, setprojectstatus] = React.useState("1");
  let [actionhandeld, setactionhandeld] = useState(false);
  // let navigate=useNavigate()
  useEffect(() => {
    dispatch(AllEmployee());
  }, []);
  // let {employeeData} = useSelector((store) => store.Storedata);

  // let Handeldinputvalue = (e) => {
  //   let {name, value} = e.target;

  //   setotherdata({...otherdata, [name]: value});
  // };

  //   -----Functions----------
  // let PriviewProjectImage = () => {
  //   setonclickpriview(privewurl);
  // };

  // console.log(AssignEmployee);

  // let Handeldinput = (e) => {
  //   setpriviewurl(e.target.value);
  // };

  // let submitform = (e) => {
  //   e.preventDefault();
  //   setactionhandeld(true);
  //   let AllProjectFiledData = {
  //     ...otherdata,
  //     AssignedTeam: AssignEmployee,
  //     ProjectimaageUrl: privewurl,
  //     Status: status,
  //   };
  //   dispatch(AddNewProject(AllProjectFiledData));
  //   navigate("/addprojects")
  // };

  // // ------------Multiselect options -----------
  // let onSelect = (data) => {
  //   setAssignEmployee([...data]);
  // };
  // let onRemove = (data) => {
  //   console.log(data);
  // };
  return (
    <>
      <Heading Size={"lg"} p={4}>
        Project Managment
      </Heading>
      {/* --------Display All Projects------------- */}
<Flex justifyContent={"space-between"} p={4}>

      <Text textAlign={"start"} fontSize={"2xl"} fontWeight="bold" >
        All Projects
      </Text>
<AddprojectDrawer/>
</Flex>

      <Box>
        <DisplayProjects triggerdaction={actionhandeld} />
      </Box>



    </>
  );
};

export default ProjectAdd;
