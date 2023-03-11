import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

const Login = () => {

  return (
    <>
    <Box width={"50%"} m="auto" mt={"5rem"}>
    <Text fontSize={"2xl"}> Login</Text>
 <FormControl isRequired>
            <FormLabel>Email Address </FormLabel>
            <Input placeholder=" Enter Email " type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Enter Password" type="password" />
          </FormControl>

    </Box>
    
    </>
  );
};

export default Login;
