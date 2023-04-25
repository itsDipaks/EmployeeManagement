import {
  Box,
  Text,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputRightElement,
  InputGroup,
  Stack,
  Image,
} from "@chakra-ui/react";

import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {userLogin} from "../Redux/Auth/Auth.action";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  let [loginformdata, setloginformdata] = useState({});
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let {token, LoadAuth, error, isadmin} = useSelector((store) => store.Auth);

  useEffect(() => {
    if (token != null) {
      if (!isadmin) {
        navigate("/feedDashbord");
      } else {
        navigate("/feedDashbord");
      }
    } else {
      navigate("/login");
    }
  }, [token]);
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
    <Flex
      minH={"100vh"}
      justifiyContent="space-between"
      alignItem="center"
      flexdirection={{base: "column", md: "row"}}
    >
      <Flex w={{base: "100%", md: "50%"}} flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
      <Box mt="14" w={{base: "100%", md: "40%"}}>
        <form onSubmit={logintoportal}>
          <Flex p={8} w="100%" align={"center"} justify={"center"}>
            <Stack spacing={4} w={"full"} maxW={"md"}>
              <Heading fontSize={"4xl"}>Login</Heading>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  placeholder=" Enter Email"
                  type="email"
                  onChange={handeldinputs}
                  name="email"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={handeldinputs}
                    name="password"
                    placeholder=" Enter Password  "
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{base: "column", sm: "row"}}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox isRequired>Remember me</Checkbox>
                  {/* <Link color={'blue.500'}>Forgot password?</Link> */}
                </Stack>
                <Button isLoading={LoadAuth ?true : false}  colorScheme={"green"} type="submit" variant={"solid"}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
}
