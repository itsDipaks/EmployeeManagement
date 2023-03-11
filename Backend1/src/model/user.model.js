
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: { type: String,required: true},
  lastname: { type: String,required: true},
  email: { type: String,required: true},
  password: { type: String,required: true},
  mobile: { type: Number,required: true,min:10},
//   country: { type: String,required: true,enum:["india","usa","china","russia"],default:"india"},
  gender: { type: String,enum:["male","female","Unspecifide"],required: true,default:"male"},
});

const UserModel = mongoose.model("userdata", UserSchema);

module.exports = {UserModel};