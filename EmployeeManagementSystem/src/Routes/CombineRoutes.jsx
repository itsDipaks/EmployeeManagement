import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployePgae from '../Pages/EmployePgae'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
// ---------DAshboard Routes-------------
import AddEmployee from '../Pages/Dashboard/AddEmployee'
import AdminProfile from '../Pages/Dashboard/AdminProfile'
import Dashboardpanel from '../Pages/Dashboard/Dashboardpanel'
import EmpProfile from '../Pages/Dashboard/EmpProfile'
import ListEmp from '../Pages/Dashboard/ListEmp'
import AdminDashboard from '../Pages/AdminDashboard'
import { AdminPrivate, EmployeePrivate } from './PrivateRoutes'
const CombineRoutes = () => {
  return (
    <div>
      
    <Routes>

      {/* -------------Pages------------ */}
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/employdashbord' element={<EmployeePrivate><EmployePgae/></EmployeePrivate>}/>
      <Route path='/Admindashboard' element={<AdminPrivate><AdminDashboard/></AdminPrivate>}/>
      {/* -------------Dashbord Routes------------ */}

      <Route path='/adminprofile' element={<AdminProfile/>}/>
      <Route path='/dashpanel' element={<Dashboardpanel/>}/>
      <Route path='/employeelist' element={<ListEmp/>}/>
      <Route path='/addemp' element={<AddEmployee/>}/>
      <Route path='/empProfile/:id' element={<EmpProfile/>}/>
    </Routes>
    </div>
  )
}

export default CombineRoutes