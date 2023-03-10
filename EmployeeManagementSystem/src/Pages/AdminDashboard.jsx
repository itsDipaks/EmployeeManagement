import {Flex} from "@chakra-ui/react";
import React from "react";
import Sidebarcompo from "../DashboardCompo/Sidebar";
import Topbar from "../DashboardCompo/Topbar";
import DashbordRoutes from "../Routes/DashbordRoutes";

const AdminDashboard = () => {
  return (
    <div>
      <Topbar />
      <Flex>
        <Sidebarcompo />
        <DashbordRoutes/>
      </Flex>
    </div>
  );
};

export default AdminDashboard;
