import React from "react";
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
  return (
    <>
      <Text textAlign={"center"} p="2rem" semibold fontSize="3xl">
        Add Employee{" "}
      </Text>
      <Box w="80%" m={"auto"}>
        <Stack>
          <HStack>
            <FormControl isRequired>
              <FormLabel> First Name : </FormLabel>
              <Input placeholder="Enter First name" type="text" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Last Name : </FormLabel>
              <Input placeholder="Enter Last Name" type="text" />
            </FormControl>
          </HStack>
          <FormControl isRequired>
            <FormLabel>Email Address </FormLabel>
            <Input placeholder=" Enter Email " type="email" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Assigned Password</FormLabel>
            <Input placeholder="Enter Assigned Password" type="password" />
          </FormControl>

          <HStack>
            <FormControl isRequired>
              <FormLabel>Salery in Rs</FormLabel>
              <Input placeholder="Salery in Rs." type="number" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel> Position</FormLabel>
              <Select placeholder="Select Position">
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
            <Input type="date" />
          </FormControl>

          

          
          <FormControl isRequired>
              <FormLabel> Gender</FormLabel>
              <Select placeholder="Select Gender">
                <option value="male">MALE</option>
                <option value="female">FEMALE</option>
                <option value="other">OTHER</option>
              </Select>
            </FormControl>
          </HStack>
          <Button>Add </Button>
        </Stack>
      </Box>
    </>
  );
};

export default AddEmployee;
