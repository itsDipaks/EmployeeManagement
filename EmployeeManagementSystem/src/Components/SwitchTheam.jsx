import {Box, Button, Tooltip, useColorMode} from "@chakra-ui/react";
import React from "react";
import { BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";

const SwitchTheam = () => {

    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
      {/* <Box border="1px" height="50px"> */}
      <Tooltip hasArrow label={colorMode=="light"?" Dark Mode":"Light Mode"} bg='gray.300' color='black'>

        <Button onClick={toggleColorMode} p="1rem"> 
          {colorMode === "light" ? <BsCloudMoonFill /> : <BsCloudSunFill />}
        </Button>
        </Tooltip>
      {/* </Box> */}
    </div>
  );
};

export default SwitchTheam;
