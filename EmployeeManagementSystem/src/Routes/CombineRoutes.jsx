import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'

const CombineRoutes = () => {
  return (
    <div>
      
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>


      {/* -------------Dashbord Routes------------ */}
      

    </Routes>
    </div>
  )
}

export default CombineRoutes