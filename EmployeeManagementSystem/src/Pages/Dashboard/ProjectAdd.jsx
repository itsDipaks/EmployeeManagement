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
  let [actionhandeld,setactionhandeld]=useState(false)
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
    setactionhandeld(true)
    let AllProjectFiledData={...otherdata,AssignedTeam:AssignEmployee,ProjectimaageUrl:privewurl,Status:status}
dispatch(AddNewProject(AllProjectFiledData))

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
      <Heading Size={"lg"} p={4}>Project Managment</Heading>
      {/* --------Display All Projects------------- */}

      <Text textAlign={"start"} fontSize={"2xl"}  fontWeight="bold" p={4}>All Projects</Text>
      <Box >

        <DisplayProjects triggerdaction={actionhandeld}/>
      </Box>

      {/* -----Add New Projects------------- */}
      <Divider w={"90%"} m={4} />
      <Text textAlign={"start"} fontSize={"2xl"}  fontWeight="bold" p={4}>Add New Project</Text>
     
     
      <Box w={"75%"} m="auto" p={14} pb={14} pt={14} boxShadow='dark-lg' rounded='md' >
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
                    <option value="Full Stack">Full Stack </option>
                    <option value="Frontend ">Frontend</option>
                    <option value="Backend">Backend</option>
                  </Select>
                </FormControl>

                <Flex gap={4} alignItems="center">
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

              <Box w={"30%"} border="1px solid gray" p={4}>
              <Flex gap={2} alignItems="center" justifyContent={"space-between"} flexDirection={"column"}>
                <Image
                  w={"100%"}
                  m="auto"
                  h={"100%"}
                  src={onclickprivew}
                  alt={"Not A Valid Image Url "}
                />
            
                <Button mt={2} onClick={PriviewProjectImage}>
                  Preview Image
                </Button>
                </Flex>
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
