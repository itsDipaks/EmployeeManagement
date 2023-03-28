import {useState} from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AdminDashboard from "./Pages/AdminDashboard";
import CombineRoutes from "./Routes/CombineRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function App() {
  let [ispanel, setispanel] = useState(false);
  AOS.init();
  return (
    <div className="App">
      {/* <AdminDashboard/> */}

      {ispanel ? (
        <AdminDashboard setispanel={setispanel} />
      ) : (
        <div>
          <Navbar ispanel={ispanel} setispanel={setispanel} />
          <CombineRoutes />
        </div>
      )}
    </div>
  );
}

export default App;
