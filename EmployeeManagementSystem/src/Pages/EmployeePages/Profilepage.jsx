import {Box, Button, Divider, Flex, FormControl, FormLabel, Image, Input, Spacer, Stack, Text} from "@chakra-ui/react";
import React, {useEffect} from "react";
import { AiFillSetting } from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {getlocalsdata} from "../../assets/Localstorage";
import InfoField from "../../Components/EmployeePages/InfoField";
import {SingleEmployee} from "../../Redux/Employee/Employee.action";

const Profilepage = () => {
  let token = getlocalsdata("token");
  let dispatch = useDispatch();
  let getuserprofile = () => {
    dispatch(SingleEmployee(token));
  };

  let {employeeData, loading} = useSelector((state) => state.Storedata);
  console.log(employeeData[0]?.data);
  let em = employeeData[0]?.data;
  console.log(employeeData)

  useEffect(() => {
    getuserprofile();
  }, []);

  return (
    <>
      <Text textAlign={"start"} p={4} ml={12}>Hellow ,{em?.firstname}</Text>
    
      <Flex w="90%" justifyContent={"space-between"}alignItems="center" gap={14} m={"auto"}> 
        <Box border={2}> 
          <Image src="https://loremflickr.com/640/360" alt="ProfileImage" />
        </Box>

        {/* ------------Left Side Box Emploee show info------------ */}
        <Stack  width={"65%"} gap={4}>
        <InfoField title={"Name " } value={ em?.firstname}/>
        <InfoField title={"Position / Role " } value={ em?.position}/>
        <InfoField title={"Email " } value={em?.email}/>
        </Stack>
      </Flex>
<Flex alignItems={"center"} mt={14} gap={4}  w={"40%"} p={4}> 
<AiFillSetting/>
<Text fontSize={"1.2rem"}> Setting  </Text>
</Flex>


<Divider w={"90%"}/>

{/* --------------Conform Password------------ */}
    
    <Flex alignItems={"center"} w={"60%"} m="auto" mt={14} justifyContent={"space-between"} p={4}>

      <Stack w={"65%"} gap={2}>
      <FormControl isRequired>
                <FormLabel> Enter Old Password : </FormLabel>
                <Input
                  placeholder="Enter First name"
                  name="firstname"
                  // onChange={Handeldinput}
                  type="text"
                />
              </FormControl>
      <FormControl isRequired>
                <FormLabel>Enter New Password :  </FormLabel>
                <Input
                  placeholder="Enter First name"
                  name="firstname"
                  // onChange={Handeldinput}
                  type="text"
                />
              </FormControl>
      <FormControl isRequired>
                <FormLabel>Conform Password : </FormLabel>
                <Input
                  placeholder="Enter First name"
                  name="firstname"
                  // onChange={Handeldinput}
                  type="text"
                />
              </FormControl>

      </Stack>

      <Button>Change Password</Button>
    </Flex>
    
    </>
  );
};

export default Profilepage;
