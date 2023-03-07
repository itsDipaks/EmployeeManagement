const mongoose = require("mongoose");
require("dotenv").config();

const Connection = mongoose.connect(process.env.MONGO_URL);

module.exports = {Connection};
