const express = require("express");
const {Connection} = require("./Config/db");
const { AuthRouter } = require("./Routes/AuthRoutes");
const { EmployeeRouter } = require("./Routes/EmployesRoutes");
const cors =require("cors")
// ........Env FileSystem.apply........
require("dotenv").config();
let port = process.env.PORT;




const app = express();
// ----Imp Middleweare----
app.use(cors())
app.use(express.json());


app.use("/auth",AuthRouter)
app.use("/employee",EmployeeRouter)

app.get("/",(req,res)=>{
  res.send("yes")
})


app.listen(port, async () => {
  try {
    await Connection;
    console.log(` http://localhost:${port}`);
  } catch (error) {
    console.log("Error in Connections", error);
  }
});

