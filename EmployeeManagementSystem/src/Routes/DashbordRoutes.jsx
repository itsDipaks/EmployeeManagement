import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminProfile from '../Pages/Dashboard/AdminProfile'
import Dashboardpanel from '../Pages/Dashboard/Dashboardpanel'
import Employeepanel from '../Pages/Dashboard/Employeepanel'
const DashbordRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/adminprofile' element={<AdminProfile/>}/>
      <Route path='/dashpanel' element={<Dashboardpanel/>}/>
      <Route path='/employeepannel' element={<Employeepanel/>}/>
      </Routes>
    </div>
  )
}

export default DashbordRoutes