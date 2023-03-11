// 1. import `extendTheme` function
import {extendTheme} from "@chakra-ui/react";

// 2. Add your color mode config
let mytheam = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
};

// 3. extend the theme
const theme = extendTheme(mytheam);

export default theme;