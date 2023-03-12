import React, {useState} from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
const AddEmployee = () => {
  let [formdata, setformdata] = useState({});

  const Handeldinput=(e)=>{
    let {name,value}=e.target
    setformdata({...formdata,[name]:value})
  }


  return (
    <>
      <Text textAlign={"center"} p="2rem" semibold fontSize="3xl">
        Add Employee{" "}
      </Text>
      <Box w="80%" m={"auto"}>
        <form onSubmit={SubmitFormData}>
          <Stack>
            <HStack>
              <FormControl isRequired>
                <FormLabel> First Name : </FormLabel>
                <Input
                  placeholder="Enter First name"
                  name="firstname"
                  onChange={Handeldinput}
                  type="text"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Last Name : </FormLabel>
                <Input
                  placeholder="Enter Last Name"
                  name="lastname"
                  onChange={Handeldinput}
                  type="text"
                />
              </FormControl>
            </HStack>
            <FormControl isRequired>
              <FormLabel>Email Address </FormLabel>
              <Input
                placeholder=" Enter Email "
                name="email"
                onChange={Handeldinput}
                type="email"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Assigned Password</FormLabel>
              <Input
                placeholder="Enter Assigned Password"
                name="password"
                onChange={Handeldinput}
                type="password"
              />
            </FormControl>

            <HStack>
              <FormControl isRequired>
                <FormLabel>Salary in Rs</FormLabel>
                <Input
                  placeholder="Salery in Rs."
                  name="salary"
                  onChange={Handeldinput}
                  type="number"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel> Position</FormLabel>
                <Select
                  placeholder="Select Position"
                  name="position"
                  onChange={Handeldinput}
                >
                  <option value="hr">HR (Human resource )</option>
                  <option value="frontend">Frontend Developer</option>
                  <option value="backend">Backend Developer</option>
                  <option value="fullstack">Full stack Developer</option>
                  <option value="node">Nodejs Developer</option>
                </Select>
              </FormControl>
            </HStack>

            <HStack>
              <FormControl isRequired>
                <FormLabel> Joining Date</FormLabel>
                <Input type="date" name="joiningDate" onChange={Handeldinput} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel> Gender</FormLabel>
                <Select
                  placeholder="Select Gender"
                  name="gender"
                  onChange={Handeldinput}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Unspecifide</option>
                </Select>
              </FormControl>
            </HStack>
            <Button type="submit">Add </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default AddEmployee;
