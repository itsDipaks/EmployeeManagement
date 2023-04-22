import {Box, Button, Flex, Spacer, useColorMode} from "@chakra-ui/react";
import {Navigate, useNavigate} from "react-router-dom";
import SwitchTheam from "../Components/SwitchTheam";
import {AiTwotoneHome} from "react-icons/ai";
const Topbar = ({pannel}) => {
  let navigate = useNavigate();
  let RedirecttoHome = () => {
    pannel(false);
    navigate("/feedDashbord");
  };
  return (
    <>
      <Box bg={'green.400'} p={2}>
        <Flex alignItems={"center"}>
          <Flex w="20%">Dipak</Flex>
          <Spacer />

          <Flex alignItems={"center"} w="15%">
            <Button onClick={RedirecttoHome}>
              <AiTwotoneHome color="red" />
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
