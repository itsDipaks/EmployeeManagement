import {Box, Flex} from "@chakra-ui/react";
import React from "react";
import Sidebarcompo from "../DashboardCompo/Sidebar";
import Topbar from "../DashboardCompo/Topbar";
import DashbordRoutes from "../Routes/DashbordRoutes";

const AdminDashboard = () => {
  return (
    <div>
      <Topbar />
      <Box w="100%" display={"flex"} justifyContent="space-btween">
        <Box>
          <Sidebarcompo />
        </Box>
        <Box width={"90%"} margin="auto">
          <DashbordRoutes />
        </Box>
      </Box>
    </div>
  );
};

export default AdminDashboard;
