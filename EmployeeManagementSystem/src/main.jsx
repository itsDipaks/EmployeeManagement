import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {ColorModeScript} from "@chakra-ui/color-mode";
import {ProSidebarProvider} from "react-pro-sidebar";
import theme from "../theam";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <Prov>
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
  <ProSidebarProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProSidebarProvider>
  </ChakraProvider>
);
