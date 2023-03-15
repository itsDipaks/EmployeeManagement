import './App.css'
import Navbar from './Components/Navbar'
import AdminDashboard from './Pages/AdminDashboard'
import CombineRoutes from './Routes/CombineRoutes'
function App() {

  return (
    <div className="App">

{/* <AdminDashboard/> */}


<Navbar/>
<CombineRoutes/>

    </div>
  )
}

export default App
