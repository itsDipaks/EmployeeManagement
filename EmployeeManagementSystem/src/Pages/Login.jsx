import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import { getlocalsdata } from "../assets/Localstorage";
import {userLogin} from "../Redux/Auth/Auth.action";

const Login = () => {
  // ----Hooks----
  const islogin = getlocalsdata("token");

  let [loginformdata, setloginformdata] = useState({});
  let dispatch = useDispatch();

  let {token,loading,error} = useSelector((store) => store.Auth);

  let handeldinputs = (e) => {
    let {name, value} = e.target;
    setloginformdata({
      ...loginformdata,
      [name]: value,
    });
  };

  let logintoportal = (e) => {
    e.preventDefault();
    dispatch(userLogin(loginformdata));
   
  };

  return (
    <>
      <Box
        width={"40%"}
        m="auto"
        mt={"5rem"}
        boxShadow="dark-lg"
        p="4rem"
        rounded="md"
      >
        <Stack spacing={4} align="stretch">
          <Text fontSize={"2xl"}> Login</Text>
          <form onSubmit={logintoportal}>
            <FormControl isRequired>
              <FormLabel>Email Address </FormLabel>
              <Input
                placeholder=" Enter Email "
                type="email"
                onChange={handeldinputs}
                name="email"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Enter Password"
                onChange={handeldinputs}
                name="password"
                type="password"
              />
            </FormControl>
            <Button type="submit" w="full" mt="1rem">
              Login
            </Button>
          </form>
        </Stack>
      </Box>
    </>
  );
};

export default Login;
