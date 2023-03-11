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
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {RiListCheck2} from "react-icons/ri";
import {BsPersonFillAdd, BsGraphUpArrow} from "react-icons/bs";

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
      Menuname: "List",
      linkto: "/employeelist",
      icon: <RiListCheck2 />,
    },
    {
      Menuname: "Add Employee",
      linkto: "/addemp",
      icon: <BsPersonFillAdd />,
    },
    {
      Menuname: "empprofile",
      linkto: "/empprofile",
      icon: <BsGraphUpArrow />,
    },
  ];
  return (
    <>
      <div style={{display: "flex", height: "100%"}}>
        <Sidebar
          rootStyles={{
            color: "white",
            backgroundColor: "black",
          }}
          collapsedWidth="70px"
          backgroundColor="black"
        >
          <Image
            borderRadius="full"
            boxSize="80px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            ml="1rem"
          />
          <Text ml="2rem">Dipak</Text>
          <Menu>
            {sidebarmenu?.map((el) => (
              <MenuItem icon={el.icon} component={<Link to={el.linkto} />}>
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
