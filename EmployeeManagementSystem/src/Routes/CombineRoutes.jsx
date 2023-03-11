import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployePgae from '../Pages/EmployePgae'
import Home from '../Pages/Home'
import Login from '../Pages/Login'

const CombineRoutes = () => {
  return (
    <div>
      
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/employdashbord' element={<EmployePgae/>}/>
      {/* -------------Dashbord Routes------------ */}
    </Routes>
    </div>
  )
}

export default CombineRoutes