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
import Profilepage from '../Pages/EmployeePages/Profilepage'
const CombineRoutes = () => {

  let Admindashboard=[
    
    {
      id:1,
    name:"Admin Dashboard Page Route",
    path:"/Admindashboard",
    element:<AdminDashboard/>
  },
    {
      id:2,
    name:"Adminprofile panel ",
    path:"/adminprofile",
    element:<AdminProfile/>
  },
    {
      id:3,
    name:"Dashbord Panel ",
    path:"/dashpanel",
    element:<Dashboardpanel/>
  },
    {
      id:4,
    name:"Employeelist Panel ",
    path:"/employeelist",
    element:<ListEmp/>
  },
    {
      id:5,
    name:"Add Employee Panel ",
    path:"/addemp",
    element:<AddEmployee/>
  },
    {
      id:6,
    name:"Selected Employee profile Panel ",
    path:"/empProfile/:id",
    element:<EmpProfile/>
  },

]

let EmployeeBoard=[
  {
    id:1,
  name:"Employee dashboard Page",
  path:"/employdashbord",
  element:<EmployePgae/>
},
  {
    id:2,
  name:"Employee dashboard Page",
  path:"/eminfo",
  element:<Profilepage/>
},
]
let universalroutes=[
  {
    id:1,
    name:"Home",
    path:"/",
    element:<Home/>
  },
  {
    id:2,
    name:"Login",
    path:"/login",
    element:<Login/>
  }
 
]
  return (
    <div>
      
    <Routes>

      {/* -------------Pages------------ */}

      {universalroutes?.map((el)=>
      <Route key={el.id} path={el.path} element={el.element}/>
      )}
      {EmployeeBoard?.map((el)=>
      <Route  key={el.id} path={el.path} element={<EmployeePrivate>{el.element}</EmployeePrivate>}/>
      )}



    </Routes>
    </div>
  )
}

export default CombineRoutes