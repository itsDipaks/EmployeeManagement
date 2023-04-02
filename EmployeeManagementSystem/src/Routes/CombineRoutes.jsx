import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
// ---------DAshboard Routes-------------
import { EmployeePrivate, IsLogin } from './PrivateRoutes'
import Profilepage from '../Pages/EmployeePages/Profilepage'
import FeedsHome from '../Pages/FeedsHome'
import ProjectDashboard from '../Pages/EmployeePages/ProjectDashboard'
const CombineRoutes = () => {

let EmployeeBoard=[
  {
    id:1,
  name:"Employee dashboard Page",
  path:"/eminfo",
  element:<Profilepage/>
},
  {
    id:2,
  name:"Employee Project Dashboard",
  path:"/projetdashboard",
  element:<ProjectDashboard/>
},
]
let universalroutes=[
  {
    id:2,
    name:"Home",
    path:"/",
    element:<Home/>
  },
  {
    id:3,
    name:"Login",
    path:"/login",
    element:<Login/>
  },
]
  return (
    <div>
    <Routes >
      {/* -------------Pages------------ */}
      {universalroutes?.map((el)=>
      <Route key={el.id} path={el.path} element={el.element}/>
      )}
      {EmployeeBoard?.map((el)=>
      <Route  key={el.id} path={el.path} element={<EmployeePrivate>{el.element}</EmployeePrivate>}/>
      )}
        <Route path={"/feedDashbord"} element={<IsLogin><FeedsHome/></IsLogin>}/>
    </Routes>
    </div>
  )
}

export default CombineRoutes