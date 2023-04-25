import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  CircularProgress,
  Container,
  Flex,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import SwitchTheam from "./SwitchTheam";
import {BiLogInCircle, BiLogOutCircle} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {getlocalsdata} from "../assets/Localstorage";
import {userLogout} from "../Redux/Auth/Auth.action";
import Logo from "./Logo";
const Navbar = ({setispanel}) => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  // -----If tiken avilable in local storqge that defins user login in sysytem-----
  let { isadmin} = useSelector((store) => store.Auth);
  let token =getlocalsdata("token")
  let logoutuser = () => {
    dispatch(userLogout());
    navigate("/");
  };
  return (
    <>
      <Box w="100%" boxShadow="lg" p={2} bg={'green.400'} top="0">
        <Flex
          p={"0.51rem"}
          justifyContent="space-between"
          alignItems={"center"}
          w="100%"
          
        >
          {/* ======= Website Logo ========= */}
          <Link to={"/"}>
           <Logo/>
          </Link>

          <Flex
            w="40%"
            gap={4}
            justifyContent="space-evenly"
            alignItems={"center"}
          >
            {token ? (
              <NavLink  style={({ isActive, isPending }) => {
                return {
                  fontWeight:"600",
                  color: isActive ? "white" : "black",
              borderBottom:isActive?"2px solid white":""
                };
              }}
            to={"/feedDashbord"}>
              Feed
              </NavLink>
            ) : (
              ""
            )}
            {token ? (
              isadmin ? (
                <Link to={"/Admindashboard"}>
                  {" "}
                  <Text color={"white"} onClick={() => setispanel(true)}>
                    Admin Panel
                  </Text>
                </Link>
              ) : (
                <Flex gap={4} w="80%" justifyContent="space-evenly">
                  <NavLink  style={({ isActive, isPending }) => {
                return {
                  fontWeight:"600",
                  color: isActive ? "white" : "black",
                  borderBottom:isActive?"2px solid white":""
                };
              }}
               to={"/projetdashboard"}>
                 Project Dashboard
                  </NavLink>
                  <NavLink to={"/todo"}  style={({ isActive, isPending }) => {
                return {
                  fontWeight:"600",
                  color: isActive ? "white" : "black",
                  borderBottom:isActive?"2px solid white":""
                };
              }}
              >
                   Todo
                  </NavLink>
                </Flex>
              )
            ) : (
              ""
            )}
          </Flex>
          <Flex w="20%" justifyContent="space-evenly" alignItems={"center"}>
            {token && !isadmin ? (
              <Tooltip
                hasArrow
                label=" View Profile"
                bg="gray.300"
                color="black"
              >
                <NavLink to={"/eminfo"} 
             >
                  <Avatar src='https://bit.ly/ryan-florence'>
                    <AvatarBadge
                    src='https://bit.ly/ryan-florence'
                      boxSize="1em"
                      bg="green.500"
                    />
                  </Avatar>
                </NavLink>
              </Tooltip>
            ) : (
              ""
            )}

            {token ? (
              <Button style={{marginLeft: "0.7rem"}} onClick={logoutuser}>
                Logout <BiLogOutCircle />
              </Button>
            ) : (
              <NavLink to="/login" 
               >
                {" "}
                <Button>
                  Login <BiLogInCircle style={{marginLeft: "0.5rem"}} />
                </Button>{" "}
              </NavLink>
            )}
            <SwitchTheam />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
