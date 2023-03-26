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
import {AiFillLinkedin, AiFillSetting, AiOutlineLink} from "react-icons/ai";
import {BsGithub} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import {getlocalsdata} from "../../assets/Localstorage";
import AddressDetails from "../../Components/EmployeePages/AddressDetails";
import InfoField from "../../Components/EmployeePages/InfoField";
import {ChangedPassword} from "../../Redux/Auth/Auth.action";
import {Employeeprofile} from "../../Redux/Employee/Employee.action";

const Profilepage = () => {
  let [formdata, setformdata] = useState({});
  // ----------For Show Update profile or not--------
  let [showpage, setshowpage] = useState(false);

  // -----Update Address States--------
  let [Country, Setcountry] = useState("IN");
  let [state, setstate] = useState("MH");
  let [City, Setcity] = useState("");
  let [checkadd, setcheckadd] = useState(false);
  let dispatch = useDispatch();
  let {employeeData, loading} = useSelector((state) => state.Storedata);
  let {token} = useSelector((store) => store.Auth);
  console.log(token + "tokwen");
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
    console.log("yes");
  };
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
            <InfoField
              title={"Name "}
              value={employeeData[0].firstname + " " + employeeData[0].lastname}
            />
            <HStack gap={14}>
              <InfoField
                title={"Position / Role "}
                value={employeeData[0].position}
              />
              <InfoField title={"Gender"} value={employeeData[0].gender} />
            </HStack>

            <InfoField title={"Email "} value={employeeData[0].email} />
          </Stack>
        </Flex>

        <Divider w={"90%"} m={2} mt={8} />

        {/* --------------Update Profile------------ */}
        <Flex>
          <Button
            colorScheme="messenger"
            onClick={() => (showpage ? setshowpage(false) : setshowpage(true))}
            m={4}
          >
            Complete Profile
          </Button>
        </Flex>

        {showpage ? (
          <Box>
            <FormControl isRequired w={"40%"}>
              <FormLabel>Mobile No: </FormLabel>
              <Input
                placeholder="Enter Nobile Number"
                name="conformpassword"
                // onChange={Handeldinput}
                type="number"
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
                  <Input placeholder="Enter Url" />
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
                  <Input placeholder="Enter Url" />
                  <InputRightElement
                    children={<AiOutlineLink color="green" />}
                  />
                </InputGroup>
              </Flex>
            </Flex>

            <Button mt={14} colorScheme="whatsapp" onClick={udateprofile}>
              Update Profile
            </Button>
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
