import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {useState} from "react";
import {AiFillSetting} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import {getlocalsdata} from "../../assets/Localstorage";
import InfoField from "../../Components/EmployeePages/InfoField";
import {ChangedPassword} from "../../Redux/Auth/Auth.action";
import {Employeeprofile} from "../../Redux/Employee/Employee.action";

const Profilepage = () => {
  let [formdata, setformdata] = useState({});
  // let token = getlocalsdata("token");
  let dispatch = useDispatch();
  let {employeeData, loading} = useSelector((state) => state.Storedata);
  let {token} = useSelector((store) => store.Auth);
  let getuserprofile = () => {
    dispatch(Employeeprofile(token));
  };
  console.log(token);



  let Handeldinput = (e) => {
    e.preventDefault();
    let {value, name} = e.target;
    setformdata({...formdata, [name]: value});
  };

  let submitChangedPasswor = (e) => {
    e.preventDefault();
    let {oldpassword, newpassword, conformpassword} = formdata;
    if (newpassword != conformpassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "New And Conform Password should be match!",
      });
    } else {
      dispatch(ChangedPassword(token, formdata));
    }
  };

  useEffect(() => {
    getuserprofile();
  }, []);

  return (
    <>
    <Box w={"90%"} m="auto">


 
      <Flex textAlign={"start"} fontSize="1.5rem" p={2} ml={12} gap={4}>
        Hellow , <Text color={"red.600"}>{employeeData[0].firstname}</Text>
      </Flex>
      <Divider w={"90%"} m={4} />
      <Flex
        w="90%"
        justifyContent={"space-between"}
        alignItems="center"
        gap={14}
        m={"auto"}
      >
        <Box border={2}>
          <Image
            w={"65%"}
            m="auto"
            h={"15rem"}
            src="https://loremflickr.com/640/360"
            alt="ProfileImage"
          />
        </Box>

        {/* ------------Left Side Box Emploee show info------------ */}
        <Stack width={"65%"} gap={4}>
          <InfoField title={"Name "} value={employeeData[0].firstname+ " "+employeeData[0].lastname} />
          <HStack gap={14}>
            <InfoField title={"Position / Role "} value={employeeData[0].position} />
            <InfoField title={"Gender"} value={employeeData[0].gender} />
          </HStack>

          <InfoField title={"Email "} value={employeeData[0].email} />
        </Stack>
      </Flex>
      <Flex alignItems={"center"} mt={14} ml={14} gap={4} w={"40%"} p={2}>
        <AiFillSetting />
        <Text fontSize={"1.2rem"}> Setting </Text>
      </Flex>

      <Divider w={"90%"} m={2} />

      {/* --------------Conform Password------------ */}
      <form onSubmit={submitChangedPasswor}>
        <Flex
          alignItems={"center"}
          w={"60%"}
          m="auto"
          justifyContent={"space-between"}
          p={4}
        >
          <Stack w={"65%"} gap={2}>
            <FormControl isRequired>
              <FormLabel> Enter Old Password : </FormLabel>
              <Input
                placeholder="Enter First name"
                name="oldpassword"
                onChange={Handeldinput}
                type="password"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Enter New Password : </FormLabel>
              <Input
                placeholder="Enter First name"
                name="newpassword"
                onChange={Handeldinput}
                type="password"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Conform Password : </FormLabel>
              <Input
                placeholder="Enter First name"
                name="conformpassword"
                onChange={Handeldinput}
                type="password"
              />
            </FormControl>
          </Stack>

          <Button type="submit">Change Password</Button>
        </Flex>
      </form>
      </Box>
    </>
  );
};

export default Profilepage;
