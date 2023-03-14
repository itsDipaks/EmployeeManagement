import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";
import SwitchTheam from "./SwitchTheam";
import {BiLogInCircle, BiLogOutCircle} from "react-icons/bi";
const Navbar = () => {
  let islogin = false;
  let isadmin = false;
  return (
    <>
      <Box w="100%" borderBottom={"0.5px solid gray"}>
        <Flex
          p={"0.51rem"}
          justifyContent="space-between"
          alignItems={"center"}
          w="100%"
        >
          <Text>@DevelopWithDipak </Text>

          <Flex w="20%" justifyContent="space-between" alignItems={"center"}>
            <Text>Home</Text>

            {islogin ? (
              isadmin ? (
                <Text>Admin Panel</Text>
              ) : (
                <Text>Employee Panel</Text>
              )
            ) : (
              ""
            )}
          </Flex>

          <Flex w="20%" justifyContent="space-evenly" alignItems={"center"}>
            {islogin ? (
              <Tooltip
                hasArrow
                label=" View Profile"
                bg="gray.300"
                color="black"
              >
                <Image
                  cursor={"pointer"}
                  w="2.5rem"
                  h="2.5rem"
                  border={"2px solid white"}
                  borderRadius={"full"}
                  src="https://media.istockphoto.com/id/1309084016/photo/a-happy-farmer-talking-on-phone-smiling.jpg?b=1&s=170667a&w=0&k=20&c=pt6DqXyi6JKhaqt8ezKpUbzy8aI9BB-Ef8FwITvf2-8="
                  alt="profile image"
                />
              </Tooltip>
            ) : (
              ""
            )}

            {islogin ? (
              <Button style={{marginLeft: "0.7rem"}}>
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
