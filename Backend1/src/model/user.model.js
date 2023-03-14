
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: { type: String},
  lastname: { type: String},
  email: { type: String,required: true},
  password: { type: String,required: true},
  mobile: { type: Number,min:10},
  salary: { type: Number },
  position: { type: String },
  joiningDate: { type: String },
  gender: { type: String,enum:["male","female","Unspecifide"],required: true,default:"male"},
  isAdmin:{type:Boolean,enum:[true,false],required:true,default:false}
});

const UserModel = mongoose.model("userdata", UserSchema);

module.exports = {UserModel};