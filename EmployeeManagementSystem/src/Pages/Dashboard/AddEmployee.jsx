import React from "react";
import {Button, FormControl, FormLabel, HStack, Input, Select, Stack} from "@chakra-ui/react";
const AddEmployee = () => {
  return (
    <div>
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

        <FormControl isRequired>
          <FormLabel> Joining Date</FormLabel>
          <Input type="date" />
        </FormControl>

        <Button>Add </Button>
      </Stack>
    </div>
  );
};

export default AddEmployee;
