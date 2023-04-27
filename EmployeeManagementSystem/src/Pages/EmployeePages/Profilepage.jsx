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
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Progress,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {useState} from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillSetting,
  AiOutlineLink,
} from "react-icons/ai";
import {BsGithub} from "react-icons/bs";
import {FiLink} from "react-icons/fi";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import {getlocalsdata} from "../../assets/Localstorage";
import AddressDetails from "../../Components/EmployeePages/AddressDetails";
import InfoField from "../../Components/EmployeePages/InfoField";
import {ChangedPassword, UpDateProfile} from "../../Redux/Auth/Auth.action";
import {Employeeprofile} from "../../Redux/Employee/Employee.action";
const Profilepage = () => {
  let [formdata, setformdata] = useState({});
  let [updateform, setupdateform] = useState({});
  let dispatch = useDispatch();
  // ----------For Show Update profile or not--------
  let [showpage, setshowpage] = useState(false);
  // -----Update Address States--------
  let [Country, Setcountry] = useState("IN");
  let [state, setstate] = useState("MH");
  let [City, Setcity] = useState("NA");
  let [mobileno, setmobileno] = useState(0);
  let [github, setgithub] = useState("");
  let [linkdin, setlinkdin] = useState("");
  let [streataddress, setstreetaddress] = useState("");

  let {employeeData, loading} = useSelector((state) => state.Storedata);
  let {token, email} = useSelector((store) => store.Auth);

  let Handeldinput = (e) => {
    e.preventDefault();
    let {value, name} = e.target;
    setformdata({...formdata, [name]: value});
  };
  let submitChangedPasswor = (e) => {
    e.preventDefault();
    let {newpassword, conformpassword} = formdata;
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
    dispatch(Employeeprofile(token));
  }, []);
  let udateprofile = () => {
    if (
      Country &&
      state &&
      City &&
      mobileno &&
      streataddress &&
      github &&
      linkdin
    ) {
      let updateData = {
        Country: Country,
        state: state,
        City: City,
        MobileNumber: mobileno,
        github: github,
        Linkdin: linkdin,
        StreetAddress: streataddress,
      };
      dispatch(UpDateProfile(email, updateData));
    } else {
      Swal.fire({
        icon: "error",
        title: "Faild !! ",
        text: "Entered Old Password is Wrong !",
      });
    }
  };
  return (
    <>
      <Box w={"100%"} m="auto">
        <Flex textAlign={"start"} fontSize="1.2rem" p={1} ml={12} gap={4}>
          Hellow , <Text color={"green.400"} fontSize={"1.5rem"} fontWeight={500}>{employeeData[0]?.firstname}</Text>
        </Flex>
        <Divider w={"90%"} m={4} />
        <Flex
          w="90%"
          justifyContent={"space-between"}
          alignItems="center"
          gap={14}
          m={"auto"}
          flexDirection={["row","column","row"]}
        >
          <Box border={2}>
            <Image
              w={"90%"}
              m="auto"
              h={"20rem"}
              src="https://loremflickr.com/640/360"
              alt="ProfileImage"
              rounded={14}
            />
          </Box>

          {/* ------------Left Side Box Emploee show info------------ */}
          <Stack width={"75%"} gap={4}>
            <InfoField
              title={"Name"}
              value={
                employeeData[0]?.firstname + " " + employeeData[0]?.lastname
              }
            />
            <Flex   gap={4} flexDirection={["row","column","row"]} >
              <InfoField
                title={"Position / Role "}
                value={employeeData[0]?.position}
              />
              <InfoField title={"Gender"} value={employeeData[0]?.gender} />
            </Flex>

            <Flex   flexDirection={["row","column","row"]} gap={4}>
              <InfoField title={"Email "} value={employeeData[0]?.email} />
              {employeeData[0]?.MobileNumber ? (
                <InfoField
                  title={"Mobile Number "}
                  value={employeeData[0]?.MobileNumber}
                />
              ) : (
                ""
              )}
            </Flex>


            <Flex>
              {employeeData[0]?.StreetAddress ? (
                <HStack>
                  <Text color={"green.400"} fontSize={"1.2rem"} fontWeight={700}>
                    {" "}
                    Address :{" "}
                  </Text>
                  <Text  fontSize={"1.2rem"}>
                    {" "}
                    Street : {employeeData[0]?.StreetAddress} ,City :{" "}
                    {employeeData[0]?.City}, State : {employeeData[0]?.state} ,
                    Country : {employeeData[0]?.Country}{" "}
                  </Text>
                </HStack>
              ) : (
                ""
              )}
            </Flex>

            {employeeData[0]?.Linkdin && employeeData[0]?.github ? (
              <Flex gap={18}w={"full"}>
                <a href={employeeData[0]?.Linkdin}>

                  <Flex
                    alignItems={"center"}
                    border={"1px"}
                    p={2}
                    px={5}
                    rounded={"10px"}
                    gap={4}
                    w={["8vw","10vw","30vw"]}
                    justifyContent={"space-between"}
                  >
                    <AiFillLinkedin color="blue"  style={{width:"1.25rem",height:"1.25rem"}}/>
                   <FiLink/>
                  </Flex>
                
                </a>
                <a href={employeeData[0]?.github}>
                  <Flex
                    alignItems={"center"}
                    border={"1px"}
                    p={2}
                    px={5}
                    rounded={"10px"}
                    gap={4}
                  >
                    <AiFillGithub color="black" style={{width:"1.25rem",height:"1.25rem"}}/>
                           <FiLink/>
                  </Flex>
                </a>
              </Flex>
            ) : (
              ""
            )}
          </Stack>
        </Flex>



        <Divider w={"90%"} m={2} mt={8} />


        {/* --------------Update Profile------------ */}
        <Flex>
          <Button
            colorScheme="messenger"
            onClick={() => (showpage ? setshowpage(false) : setshowpage(true))}
            m={4}>
            Complete Profile
          </Button>
        </Flex>



        {showpage ? (
          <Box bg={"gray.100"} w={"100%"} p={14}>
            <form>
              <FormControl isRequired w={"40%"}>
                <FormLabel color={"blue.700"}>Mobile No: </FormLabel>
                <Input
                  placeholder="Enter Nobile Number"
                  name="conformpassword"
                  onChange={(e) => setmobileno(e.target.value)}
                  type="number"
                  border={"1px solid green"}
                />
              </FormControl>

              <Text
                textAlign={"start"}
                fontWeight="semibold"
                fontSize="xl"
                m={4}
                mt={8}
              >
                Address
              </Text>
              <AddressDetails
                Country={Country}
                Setcountry={Setcountry}
                state={state}
                setstate={setstate}
                City={City}
                Setcity={Setcity}
                setstreetaddress={setstreetaddress}
              />

              <Text
                textAlign={"start"}
                fontWeight="semibold"
                fontSize="xl"
                m={4}
                mt={8}
              >
                Socials
              </Text>
              <Flex gap={4} w="100%">
                <Flex w={"40%"} gap={2}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.800"
                      fontSize="1.2em"
                      children={<BsGithub />}
                    />
                    <Input
                      placeholder="Enter Url"
                      onChange={(e) => setgithub(e.target.value)}
                      border={"1px solid gray"}
                    />
                    <InputRightElement
                      children={<AiOutlineLink color="green" />}
                    />
                  </InputGroup>
                </Flex>
                <Flex w={"40%"} gap={2}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="blue.700"
                      fontSize="1.2em"
                      children={<AiFillLinkedin />}
                    />
                    <Input
                      placeholder="Enter Url"
                      onChange={(e) => setlinkdin(e.target.value)}
                      border={"1px solid gray"}
                    />
                    <InputRightElement
                      children={<AiOutlineLink color="green" />}
                    />
                  </InputGroup>
                </Flex>
              </Flex>

              <Button mt={14} colorScheme="whatsapp" onClick={udateprofile}>
                Update Profile
              </Button>
            </form>
          </Box>
        ) : (
          ""
        )}
        <Divider w={"90%"} m={4} mt={14} />
        {/* --------------Setting------------ */}
        <Flex alignItems={"center"} ml={14} gap={4} w={"40%"} p={2}>
          <AiFillSetting />
          <Text fontSize={"1.2rem"}> SETTING </Text>
        </Flex>
        <Divider w={"90%"} m={2} />
        {/* --------------Conform Password------------ */}
        <form onSubmit={submitChangedPasswor}>
          <Flex
            alignItems={"center"}
            w={["60%","60%","60%"]}
            m="auto"
            gap={4}
         flexDirection={["row","column","row"]}
            justifyContent={"space-between"}
            p={4}
          >
            <Stack w={["65%","65%","full"]} gap={2}>
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
