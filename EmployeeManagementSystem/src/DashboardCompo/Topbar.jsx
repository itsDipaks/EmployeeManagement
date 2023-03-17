import {Box, Button, Flex, Spacer, useColorMode} from "@chakra-ui/react";
import {Navigate, useNavigate} from "react-router-dom";
import SwitchTheam from "../Components/SwitchTheam";
import {FcHome} from "react-icons/fc"
const Topbar = ({pannel}) => {
  let navigate = useNavigate();
  let RedirecttoHome = () => {
    pannel(false);
    navigate("/");
  };
  return (
    <>
      <Box border="1px" height="50px">
        <Flex alignItems={"center"}>
          <Flex w="20%">Dipak</Flex>
          <Spacer />

          <Flex alignItems={"center"} w="15%">
            <Button onClick={RedirecttoHome}>
              <FcHome/>
            </Button>
            <Spacer />
            <SwitchTheam />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Topbar;
