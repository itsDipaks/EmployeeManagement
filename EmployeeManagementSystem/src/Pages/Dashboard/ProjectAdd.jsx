import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
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
import { AddNewProject } from "../../Redux/Project/Project.action";
import DisplayProjects from "../../DashboardCompo/DisplayProjects";
const ProjectAdd = () => {
    // -------Hooks-----------
  let dispatch = useDispatch();
  let [privewurl, setpriviewurl] = useState("");
  let [otherdata,setotherdata]=useState({})
  let [onclickprivew, setonclickpriview] = useState(
    "https://img.freepik.com/free-vector/landing-page-template-design-business-websides_52683-22971.jpg?size=338&ext=jpg"
  );
  let [AssignEmployee, setAssignEmployee] = useState([]);
  const [status, setprojectstatus] = React.useState('1')
  useEffect(() => {
    dispatch(AllEmployee());
  }, []); 
  let {employeeData} = useSelector((store) => store.Storedata);






  let Handeldinputvalue=(e)=>{
    let {name,value}=e.target
    
    setotherdata({...otherdata,[name]:value})
  }


//   -----Functions----------
  let PriviewProjectImage = () => {
    setonclickpriview(privewurl);
  };

  console.log(AssignEmployee);

  let Handeldinput = (e) => {
    setpriviewurl(e.target.value);
  };

  let submitform=(e)=>{
    e.preventDefault()
    let AllProjectFiledData={...otherdata,AssignedTeam:AssignEmployee,ProjectimaageUrl:privewurl,Status:status}
console.log(AllProjectFiledData)

dispatch(AddNewProject(AllProjectFiledData))
// console.log(AssignEmployee)
  }

  // ------------Multiselect options -----------
  let onSelect = (data) => {
    setAssignEmployee([...data]);
  };
  let onRemove = (data) => {
    console.log(data);
  };
  return (
    <>
      <Text fontSize={"1.5rem"}>Project Managment</Text>
      {/* --------Display All Projects------------- */}
      <Box>

        <DisplayProjects/>
      </Box>

      {/* -----Add New Projects------------- */}
      <Divider w={"90%"} m={4} />
      <Text fontSize={"1.5rem"}>Add New Project</Text>
     
     
      <Box w={"80%"} m="auto" pb={14} pt={14}>
        <form onSubmit={submitform} >
          <VStack gap={2}>
            <Flex w={"100%"} gap={4}>
              <VStack w={"60%"}  gap={2}>
                <FormControl isRequired>
                  <FormLabel>Project Title </FormLabel>
                  <Input
                    placeholder="Enter project Title"
                    name="ProjectTitle"
                      onChange={Handeldinputvalue}
                    type="text"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel> Select Project Type </FormLabel>
                  <Select placeholder="Select option" name="ProjectType"   onChange={Handeldinputvalue}>
                    <option value="option1">Full Stack </option>
                    <option value="option2">Frontend</option>
                    <option value="option3">Backend</option>
                  </Select>
                </FormControl>

                <Flex gap={4}>
                  <FormControl>
                    <FormLabel> Project Image </FormLabel>
                    <Input
                      placeholder="Enter Project Image url"
                      name="ProjectTitle"
                      onChange={Handeldinput}
                      type="text"
                    />
                  </FormControl>
                  <Text mt={4}> OR </Text>
                  <FormControl>
                    <FormLabel> Choose Image </FormLabel>
                    <Input  type="file" />
                  </FormControl>
                </Flex>
              </VStack>

              <Box w={"30%"} border="1px solid gray">
                <Image
                  w={"80%"}
                  m="auto"
                  h={"150px"}
                  src={onclickprivew}
                  alt={"Not A Valid Image Url "}
                />
                <Flex gap={2} alignItems="center"></Flex>
                <Button mt={2} onClick={PriviewProjectImage}>
                  Preview Image
                </Button>
              </Box>
            </Flex>

            <FormControl isRequired>
              <FormLabel> Description </FormLabel>
              <Textarea
               name="Description"
                onChange={Handeldinputvalue}
                placeholder="Here is a sample placeholder"
                size="sm"
              />
            </FormControl>

            <HStack w={"full"} mb={"2rem"}>
              <FormControl isRequired>
                <FormLabel> Project Start Date</FormLabel>
                <Input type="date"  name="StartDate" onChange={Handeldinputvalue}/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel> Project End Date</FormLabel>
                <Input type="date" name="EndDate" onChange={Handeldinputvalue} />
              </FormControl>
            </HStack>

            <FormControl
              display="flex"
              alignItems="center"
              gap={4}
              border ={"1px solid gray"}
              p={4}
              w="max-content"
              isRequired
            >
              <FormLabel htmlFor="project-status">Project Status</FormLabel>
              <RadioGroup onChange={setprojectstatus}>
      <Stack direction='row' gap={4}>
        <Radio value='Active'>Active</Radio>
        <Radio value='Completed'>Completed</Radio>
        <Radio value='Cancelled'>Cancelled</Radio>
      </Stack>
    </RadioGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Assign Project</FormLabel>
              <Multiselect
                options={employeeData}
                displayValue="firstname"
                onSelect={onSelect}
                onRemove={onRemove}
              />
            </FormControl>
            <Button type="submit">Add Project</Button>
          </VStack>
        </form>
      </Box>
    </>
  );
};

export default ProjectAdd;
