import {useState} from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AdminDashboard from "./Pages/AdminDashboard";
import CombineRoutes from "./Routes/CombineRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import {Box} from "@chakra-ui/react";
function App() {
  let [ispanel, setispanel] = useState(false);
  AOS.init();
  
  return (
    <div className="App">
      {ispanel ? (
        <AdminDashboard setispanel={setispanel} />
      ) : (
        <div>
          <Box position="fixed" top={0} w={"100%"} zIndex="14">
            {" "}
            <Navbar ispanel={ispanel} setispanel={setispanel} />
          </Box>
          <Box position="relative" top={"6rem"}>
            <CombineRoutes />
          </Box>
        </div>
      )}

      
    </div>
  );
}

export default App;
