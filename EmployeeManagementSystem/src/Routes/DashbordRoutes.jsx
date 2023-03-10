import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddEmployee from '../Pages/Dashboard/AddEmployee'
import AdminProfile from '../Pages/Dashboard/AdminProfile'
import Dashboardpanel from '../Pages/Dashboard/Dashboardpanel'
import EmpProfile from '../Pages/Dashboard/EmpProfile'
import ListEmp from '../Pages/Dashboard/ListEmp'
const DashbordRoutes = () => {
  return (
    <div>
        <Routes>
     <Route path='/adminprofile' element={<AdminProfile/>}/>
      <Route path='/dashpanel' element={<Dashboardpanel/>}/>
      <Route path='/employeelist' element={<ListEmp/>}/>
      <Route path='/addemp' element={<AddEmployee/>}/>
      <Route path='/empProfile/:id' element={<EmpProfile/>}/>
      </Routes>
    </div>
  )
}

export default DashbordRoutes