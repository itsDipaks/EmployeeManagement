import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
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
  useDisclosure,
} from "@chakra-ui/react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AddNewProject} from "../../Redux/Project/Project.action";
import {Multiselect} from "multiselect-react-dropdown";
import {AllEmployee} from "../../Redux/Employee/Employee.action";
import {useEffect} from "react";
const AddprojectDrawer = () => {
  let dispatch = useDispatch();
  let [privewurl, setpriviewurl] = useState("");
  let [otherdata, setotherdata] = useState({});
  let [onclickprivew, setonclickpriview] = useState(
    "https://img.freepik.com/free-vector/landing-page-template-design-business-websides_52683-22971.jpg?size=338&ext=jpg"
  );
  let [AssignEmployee, setAssignEmployee] = useState([]);
  const [status, setprojectstatus] = React.useState("1");
  const {isOpen, onOpen, onClose} = useDisclosure();

  let navigate = useNavigate();
  let Handeldinputvalue = (e) => {
    let {name, value} = e.target;

    setotherdata({...otherdata, [name]: value});
  };
  let PriviewProjectImage = () => {
    setonclickpriview(privewurl);
  };

  console.log(AssignEmployee);

  let Handeldinput = (e) => {
    setpriviewurl(e.target.value);
  };

  let submitform = (e) => {
    e.preventDefault();
    let AllProjectFiledData = {
      ...otherdata,
      AssignedTeam: AssignEmployee,
      ProjectimaageUrl: privewurl,
      Status: status,
    };

    dispatch(AddNewProject(AllProjectFiledData));
    onClose();
  };

  // ------------Multiselect options -----------
  let onSelect = (data) => {
    setAssignEmployee([...data]);
  };
  let onRemove = (data) => {
    console.log(data);
  };

  useEffect(() => {
    dispatch(AllEmployee());
  }, []);
  let {employeeData} = useSelector((store) => store.Storedata);
console.log(employeeData)
  return (
    <div>
      <Button colorScheme='whatsapp' onClick={() => onOpen()}>Add New Project</Button>

      <Drawer
        placement={"bottom"}
        size={"xl"}
        onClose={onClose}
        isOpen={isOpen}
        w="90%"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex w={"80%"} justifyContent="space-between" alignItems={"center"} m={"auto"}>
              <Text>Add New Project</Text>
              <Button colorScheme="red" p={6} onClick={() => onClose()}>
                Close
              </Button>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Box
              w={"85%"}
              m="auto"
              p={14}
              pb={14}
              pt={14}
              boxShadow="dark-lg"
              rounded="md"
            >
              <form onSubmit={submitform}>
                <VStack gap={1}>
                  <Flex w={"90%"} gap={4} justifyContent="space-between">
                    <VStack w={"70%"} gap={2}>
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
                        <Select
                          placeholder="Select option"
                          name="ProjectType"
                          onChange={Handeldinputvalue}
                        >
                          <option value="Full Stack">Full Stack </option>
                          <option value="Frontend ">Frontend</option>
                          <option value="Backend">Backend</option>
                        </Select>
                      </FormControl>

                      <Flex gap={4} w={"full"} alignItems="center">
                        <FormControl>
                          <FormLabel> Project Image </FormLabel>
                          <Input
                            placeholder="Enter Project Image url"
                            name="ProjectTitle"
                            onChange={Handeldinput}
                            type="text"
                          />
                        </FormControl>
                        {/* <Text mt={4}> OR </Text>
                  <FormControl>
                    <FormLabel> Choose Image </FormLabel>
                    <Input type="file" />
                  </FormControl> */}
                      </Flex>
                    </VStack>

                    <Box w={"22%"} boxShadow="outline" rounded="md" p={4}>
                      <Flex
                        gap={2}
                        alignItems="center"
                        justifyContent={"space-between"}
                        flexDirection={"column"}
                      >
                        <Image
                          w={"100%"}
                          m="auto"
                          h={"100%"}
                          src={onclickprivew}
                          alt={"Not A Valid Image Url "}
                        />

                        <Button
                          mt={2}
                          onClick={PriviewProjectImage}
                          colorScheme="messenger"
                        >
                          Preview Image
                        </Button>
                      </Flex>
                    </Box>
                  </Flex>

                  {/* -----------------other filelds-------------- */}
                  <Box w={"90%"} m="auto">
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
                        <Input
                          type="date"
                          name="StartDate"
                          onChange={Handeldinputvalue}
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel> Project End Date</FormLabel>
                        <Input
                          type="date"
                          name="EndDate"
                          onChange={Handeldinputvalue}
                        />
                      </FormControl>
                    </HStack>

                    <FormControl
                      display="flex"
                      alignItems="center"
                      gap={4}
                      border={"1px solid gray"}
                      p={4}
                      w="max-content"
                      isRequired
                    >
                      <FormLabel htmlFor="project-status">
                        Project Status
                      </FormLabel>
                      <RadioGroup onChange={setprojectstatus}>
                        <Stack direction="row" gap={4}>
                          <Radio value="Active">Active</Radio>
                          <Radio value="Completed">Completed</Radio>
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

                    <FormControl isRequired mt={4}> 
                        <FormLabel>  Group Leader </FormLabel>
                        <Select
                          placeholder="Select group Leader"
                          name="groupleader"
                          onChange={Handeldinputvalue}
                        >
                        {AssignEmployee?.map((el)=> <option value={el?.email}>{el?.firstname} { el?.lastname}</option> )  }
                       
                        </Select>
                      </FormControl>
                    <Button type="submit" colorScheme="messenger" m={4} p={4}>
                      Add Project
                    </Button>
                  </Box>
                </VStack>
              </form>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default AddprojectDrawer;
