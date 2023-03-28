import {Box, Flex} from "@chakra-ui/react";
import React from "react";
import Sidebarcompo from "../DashboardCompo/Sidebar";
import Topbar from "../DashboardCompo/Topbar";
import DashbordRoutes from "../Routes/DashbordRoutes";

const AdminDashboard = ({setispanel}) => {
  return (
    <div>
      <Box position={"fixed"} top={0} w='100%' zIndex="14"  bg={"black"}><Topbar pannel={setispanel} /></Box>
      <Box w="100%" position={"relative"} top={"3.5rem"} display={"flex"} justifyContent="space-btween">
        <Box >
          <Sidebarcompo />
        </Box>
        <Box width={"90%"} >
          <DashbordRoutes />
        </Box>
      </Box>
    </div>
  );
};

export default AdminDashboard;
