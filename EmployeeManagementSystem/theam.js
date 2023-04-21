// 1. import `extendTheme` function
import {extendTheme} from "@chakra-ui/react";

// 2. Add your color mode config
let mytheam = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    primaryblue: {
      20:"#E6E6FA",
      50:"#CCCCFF",
      75:"#B0C4DE",
      100: "#002fa7",
      500:"#000080",

    },
  },
  colorScheme: {
    primaryblue: {
      50:"#CCCCFF",
      100: "#002fa7",
      500:"#000080",
    },
  },
 breakpoints : {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
  
};

// 3. extend the theme
const theme = extendTheme(mytheam);

export default theme;