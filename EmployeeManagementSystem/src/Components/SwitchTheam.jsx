import {Box, Button, useColorMode} from "@chakra-ui/react";
import React from "react";
import { BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";

const SwitchTheam = () => {

    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
      {/* <Box border="1px" height="50px"> */}
        <Button onClick={toggleColorMode} p="1rem"> 
          {colorMode === "light" ? <BsCloudMoonFill /> : <BsCloudSunFill />}
        </Button>
      {/* </Box> */}
    </div>
  );
};

export default SwitchTheam;
