const express = require("express");
const {Connection} = require("./Config/db");
const { AuthRouter } = require("./Routes/AuthRoutes");
const { EmployeeRouter } = require("./Routes/EmployesRoutes");
// ........Env FileSystem.apply........
require("dotenv").config();
let port = process.env.PORT;


const app = express();

app.use("/auth",AuthRouter)
app.use("/empl",EmployeeRouter)
// ----Convert Files In Json -----
app.get("/",(req,res)=>{
  res.send("yes")
})
app.use(express.json());

app.listen(port, async () => {
  try {
    await Connection;
    console.log(` http://localhost:${port}`);
  } catch (error) {
    console.log("Error in Connections", error);
  }
});

