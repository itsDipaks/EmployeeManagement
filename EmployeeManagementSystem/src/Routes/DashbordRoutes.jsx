import React from "react";
import {Route, Routes} from "react-router-dom";
import AddEmployee from "../Pages/Dashboard/AddEmployee";
import AdminProfile from "../Pages/Dashboard/AdminProfile";
import Dashboardpanel from "../Pages/Dashboard/Dashboardpanel";
import EmpProfile from "../Pages/Dashboard/EmpProfile";
import ListEmp from "../Pages/Dashboard/ListEmp";
import ProjectAdd from "../Pages/Dashboard/ProjectAdd";
import { AdminPrivate } from "./PrivateRoutes";
const DashbordRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/adminprofile" element={<AdminProfile />} />
        <Route path="/dashpanel" element={<AdminPrivate><Dashboardpanel/></AdminPrivate>} />
        <Route path="/employeelist" element={<ListEmp />} />
        <Route path="/addprojects" element={<ProjectAdd />} />
      </Routes>
    </div>
  );
};

export default DashbordRoutes;
