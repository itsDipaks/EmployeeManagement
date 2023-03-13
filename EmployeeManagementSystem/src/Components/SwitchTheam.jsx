import {Box, Button} from "@chakra-ui/react";
import React from "react";

const SwitchTheam = () => {

    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
      <Box border="1px" height="50px">
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark" : "light"}
        </Button>
      </Box>
    </div>
  );
};

export default SwitchTheam;
