import {
  Box,
  Button,
  Flex,
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
    <Box alignItems={"center"}  display={"flex"} flexDirection={["row"]} m={"auto"} width={{md: "100%", sm: "100%"}}
    //  data-aos="zoom-in"
     >
  <Box w={"60%"}        display={{md:"block",sm:"none"}}>
  <Image rounded={14} src="https://images.unsplash.com/photo-1606836559739-7b1d9fbf8a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
</Box>

        <Box
          w={{md:"40%",sm:"80%",lg:"50%"}}
          p={{md: "2rem", sm: "1rem"}}
          m="auto"
          mt={{md:"8",sm:"2rem"}}
          h={"max-content"}
        >
       <Text p={4} fontSize={"1.8rem"} fontWeight={"semibold"}  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
 >L O G I N</Text>
            <form onSubmit={logintoportal}>
            <Stack spacing={6} align="stretch">
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
              <Button type="submit" w="full" color={"white"} bg="blue.400" _hover={{bg:"blue.500",color:"white"}} mt="2rem">
                Login
              </Button>
              </Stack>
            </form>
 
        </Box>


      </Box>
  );
};

export default Login;
