const express = require("express");
const {Connection} = require("mongoose");
require("dotenv").config();
const app = express();
let port = process.env.PORT;
app.use(express.json());

app.listen(port, async () => {
  try {
    await Connection;
    console.log(`Server Started At http://localhost:${port}`);
  } catch (err) {
    console.log(`Connection Problem`, err);
  }
});
