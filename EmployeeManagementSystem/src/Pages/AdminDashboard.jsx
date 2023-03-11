import {Box, Flex} from "@chakra-ui/react";
import React from "react";
import Sidebarcompo from "../DashboardCompo/Sidebar";
import Topbar from "../DashboardCompo/Topbar";
import DashbordRoutes from "../Routes/DashbordRoutes";

const AdminDashboard = () => {
  return (
    <div>
      <Topbar />
      <Box w="100%" display={"flex"}>
        <Box w="20%">
          <Sidebarcompo />
        </Box>
        <Box width={"75%"} margin="auto">
          <DashbordRoutes />
        </Box>
      </Box>
    </div>
  );
};

export default AdminDashboard;
