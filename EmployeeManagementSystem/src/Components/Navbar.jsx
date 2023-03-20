import {
  Box,
  Button,
  CircularProgress,
  Container,
  Flex,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import SwitchTheam from "./SwitchTheam";
import {BiLogInCircle, BiLogOutCircle} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {getlocalsdata} from "../assets/Localstorage";
import {userLogout} from "../Redux/Auth/Auth.action";
const Navbar = ({setispanel}) => {
  let {isadmin, loading} = useSelector((store) => store.Auth);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  // -----If tiken avilable in local storqge that defins user login in sysytem-----

  let token = getlocalsdata("token");
  let logoutuser = () => {
    dispatch(userLogout());
    navigate("/");
  };
  return (
    <>
      <Box w="100%" borderBottom={"0.5px solid gray"}>
        <Flex
          p={"0.51rem"}
          justifyContent="space-between"
          alignItems={"center"}
          w="100%"
        >
          <Link to={"/"}>
            {" "}
            <Text>@DevelopWithDipak </Text>
          </Link>

          <Flex w="40%" gap={4} justifyContent="space-evenly" alignItems={"center"}>
            <Link to={"/"}>
              <Text>Home</Text>
            </Link>

            {token ? (
              isadmin ? (
                <Link to={"/Admindashboard"}>
                  {" "}
                  <Text onClick={() => setispanel(true)}>Admin Panel</Text>
                </Link>
              ) : (
                <Flex gap={4} w="80%" justifyContent="space-evenly">
                  <Link to={"/employdashbord"}>
                    <Text>Employee Panel</Text>
                  </Link>
                  <Link to={"/employdashbord"}>
                    <Text>Project Dashboard</Text>
                  </Link>
                </Flex>
              )
            ) : (
              ""
            )}
          </Flex>

          <Flex w="20%" justifyContent="space-evenly" alignItems={"center"}>
            {token ? (
              <Tooltip
                hasArrow
                label=" View Profile"
                bg="gray.300"
                color="black"
              >
                <Link to={"/eminfo"}>
                  <Image
                    cursor={"pointer"}
                    w="2.5rem"
                    h="2.5rem"
                    border={"2px solid white"}
                    borderRadius={"full"}
                    src="https://media.istockphoto.com/id/1309084016/photo/a-happy-farmer-talking-on-phone-smiling.jpg?b=1&s=170667a&w=0&k=20&c=pt6DqXyi6JKhaqt8ezKpUbzy8aI9BB-Ef8FwITvf2-8="
                    alt="profile image"
                  />
                </Link>
              </Tooltip>
            ) : (
              ""
            )}

            {token ? (
              <Button style={{marginLeft: "0.7rem"}} onClick={logoutuser}>
                Logout <BiLogOutCircle />
              </Button>
            ) : (
              <Link to="/login">
                {" "}
                <Button>
                  Login <BiLogInCircle style={{marginLeft: "0.5rem"}} />
                </Button>{" "}
              </Link>
            )}
            <SwitchTheam />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
