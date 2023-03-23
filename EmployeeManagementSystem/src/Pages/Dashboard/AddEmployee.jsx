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
import {useDispatch, useSelector} from "react-redux"
import { addEmployee } from "../../Redux/Auth/Auth.action";

import Swal from 'sweetalert2'
const AddEmployee = () => {
  let [formdata, setformdata] = useState({});
  const dispatch=useDispatch()

  const Handeldinput=(e)=>{
    e.preventDefault()
    let {name,value}=e.target
    setformdata({...formdata,[name]:value})
  }


  const SubmitFormData=(e)=>{
    console.log("yes",formdata)
    e.preventDefault()
    dispatch(addEmployee(formdata))
   


  }

  let {loading,error,done}=useSelector(store=>store.Auth)
{done?
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  }):""
}
  return (
    <>
      <Text textAlign={"start"} fontSize={"2xl"}  fontWeight="bold" p={4}> Add Employee</Text>
      <Box w="70%" m={"auto"}>
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
                  <option value="HR (Hiring Resources)">HR (Human resource )</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Full Stack Developer">Full stack Developer</option>
                  <option value="NodeJs Developer">Nodejs Developer</option>
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
            <Input type="submit" value="add"/>
          </Stack>
        </form>
      </Box>
    </>
  )
};

export default AddEmployee;
