import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {getlocalsdata} from "../assets/Localstorage";
import {userLogin} from "../Redux/Auth/Auth.action";

const Login = () => {
  // ----Hooks----

  // const islogin = getlocalsdata("token");
  // console.log(islogin);
  let [loginformdata, setloginformdata] = useState({});
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let {token, loading, error, isadmin} = useSelector((store) => store.Auth);

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
    <Box p={4}   m={"auto"} width={{md: "95%", sm: "100%"}} data-aos="zoom-in">
      <Box
        // width={{md: "95", sm: "100%"}}
        // m="auto"
        // // mt={"5rem"}
        // // boxShadow="dark-lg"
        // p={{md: "1rem", sm: "2rem"}}
        // rounded="md"
        // // mt={4}
        // position={"relative"}
        // h="80vh"
        // backgroundImage="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  
      >
  
        <Box
          w={{md:"45%",sm:"50%"}}
          p={{md: "4rem", sm: "1rem"}}
          m="auto"
          mt={14}
          bg={"primaryblue.50"}
          data-aos="zoom-in"
        >
                <Text 
          fontSize={"3xl"} pb={4}>Welcome Back !! </Text>
          {/* {token ? <Navigate to={"/"} /> : ""} */}
          <Stack spacing={4} align="stretch">
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
      </Box>
    </Box>
  );
};

export default Login;
