const express = require("express");
const {Connection} = require("./Config/db");
// ........Env FileSystem.apply........
require("dotenv").config();
let port = process.env.PORT;


const app = express();

// ----Convert Files In Json -----

app.use(express.json());

app.listen(port, async () => {
  try {
    await Connection;
    console.log(` http://localhost:${port}`);
  } catch (error) {
    console.log("Error in Connections", error);
  }
});
