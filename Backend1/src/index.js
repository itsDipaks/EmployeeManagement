const express = require("express");
const cors =require("cors");
const {Connection} = require("./Config/db");
const { AuthRouter } = require("./Routes/AuthRoutes");
const { EmployeeRouter } = require("./Routes/EmployesRoutes");
const { ProjectRouter } = require("./Routes/ProjectRoute");
// ........Env FileSystem.apply........
require("dotenv").config();
let port = process.env.PORT;




const app = express();
// ----Imp Middleweare----
app.use(cors())
app.use(express.json());


app.use("/auth",AuthRouter)
app.use("/employee",EmployeeRouter)
app.use("/project",ProjectRouter)

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

