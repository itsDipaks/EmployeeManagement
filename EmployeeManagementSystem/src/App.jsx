import './App.css'
import Navbar from './Components/Navbar'
import Login from './Pages/Login'
import CombineRoutes from './Routes/CombineRoutes'

function App() {

  return (
    <div className="App">
   <Navbar/>
   <CombineRoutes/>
   <Login/>
    </div>
  )
}

export default App
