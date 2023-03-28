import {Box, Button, Flex, Image, Text} from "@chakra-ui/react";
import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import {MdDashboardCustomize} from "react-icons/md";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import {FaUsers} from "react-icons/fa";

import {Link} from "react-router-dom";
const Sidebarcompo = () => {
  const {collapseSidebar, toggled, toggleSidebar} = useProSidebar();

  let sidebarmenu = [
    {
      Menuname: "Dashboard",
      linkto: "/dashpanel",
      icon: <MdDashboardCustomize />,
    },
    {
      Menuname: "Employee",
      linkto: "/employeelist",
      icon: <FaUsers />,
    },
    {
      Menuname: "Project",
      linkto: "/addprojects",
      icon: <AiOutlineFundProjectionScreen />,
    },
  ];
  return (
    <>
      <div style={{display: "flex", height: "100vh"}}>
        <Sidebar
          rootStyles={{
            color: "white",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
          collapsedWidth="70px"
          backgroundColor="rgb(6,9,14)"
        >
          <Menu>
            {sidebarmenu?.map((el) => (
              <MenuItem
                icon={el.icon}
                component={<Link to={el.linkto} color="red" />}
              >
                <Text ml="1rem" textDecoration="none" textAlign={"start"}>
                  {el.Menuname}
                </Text>
              </MenuItem>
            ))}
          </Menu>
        </Sidebar>
        <main>
          <Button onClick={() => collapseSidebar()}>
            {" "}
            <AiOutlineMenuUnfold />
          </Button>
        </main>
      </div>
    </>
  );
};

export default Sidebarcompo;
