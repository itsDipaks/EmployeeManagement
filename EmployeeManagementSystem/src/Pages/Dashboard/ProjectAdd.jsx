import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Switch,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {Multiselect} from "multiselect-react-dropdown";
import {useDispatch, useSelector} from "react-redux";
import {AllEmployee} from "../../Redux/Employee/Employee.action";
const ProjectAdd = () => {
  let dispatch = useDispatch();

  let {employeeData} = useSelector((store) => store.Storedata);

//   console.log(employeeData)
  useEffect(() => {
    dispatch(AllEmployee());
  }, []);







  let options = [
    {myname: "Dipak", id: 1},
    {myname: "sagar", id: 2},
    {myname: "mukti", id: 3},
  ];
  let [values, setvalues] = useState([]);
  let [data, setdata] = useState(options);




console.log(values)


// ------------Multiselect options -----------
  let onSelect = (data) => {
    setvalues([...data]);
  };
  let onRemove = (data) => {
    console.log(data);
  };
  return (
    <>
      <Text fontSize={"1.5rem"}>Project Managment</Text>
      {/* --------Display All Projects------------- */}
      <Box></Box>

      {/* -----Add New Projects------------- */}
      <Divider w={"90%"} m={4} />
      <Text fontSize={"1.5rem"}>Add New Project</Text>
      <Box w={"80%"} m="auto">
        <form>
          <VStack>
            <FormControl isRequired>
              <FormLabel>Project Title </FormLabel>
              <Input
                placeholder="Enter project Title"
                name="ProjectTitle"
                //   onChange={Handeldinput}
                type="text"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel> Description </FormLabel>
              <Textarea
                // value={value}
                // onChange={handleInputChange}
                placeholder="Here is a sample placeholder"
                size="sm"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel> Select Project Type  </FormLabel>
              <Select placeholder='Select option'>
  <option value='option1'>Full Stack </option>
  <option value='option2'>Frontend</option>
  <option value='option3'>Backend</option>
</Select>
            </FormControl>

            <HStack w={"full"} mb={"2rem"}>
              <FormControl isRequired>
                <FormLabel> Project Start Date</FormLabel>
                <Input type="date" name="joiningDate" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel> Project End Date</FormLabel>
                <Input type="date" name="joiningDate" />
              </FormControl>
            </HStack>

            <FormControl
              display="flex"
              alignItems="center"
              gap={4}
              border={"1px solid gray"}
              p={4}
              isRequired
            >
              <FormLabel htmlFor="project-status">Project Status</FormLabel>
              <Switch id="project-status" />
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
          </VStack>
        </form>
      </Box>
    </>
  );
};

export default ProjectAdd;
