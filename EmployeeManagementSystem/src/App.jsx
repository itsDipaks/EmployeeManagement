import './App.css'
import Navbar from './Components/Navbar'
import AdminDashboard from './Pages/AdminDashboard'
import Login from './Pages/Login'
import CombineRoutes from './Routes/CombineRoutes'
function App() {

  return (
    <div className="App">
{/* <AdminDashboard/> */}
<CombineRoutes/>
    </div>
  )
}

export default App
