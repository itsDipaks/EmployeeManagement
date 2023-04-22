
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: { type: String},
  lastname: { type: String},
  email: { type: String,required: true},
  password: { type: String,required: true},
  MobileNumber: { type: Number,min:10},
  salary: { type: Number },
  position: { type: String },
  Country: { type: String },
  state: { type: String },
  City: { type: String },
  StreetAddress: { type: String },
  github: { type: String },
  Linkdin: { type: String },
  joiningDate: { type: String },
  Status: { type: String,enum:["Active" ,"Inactive"],default:"Inactive" },
  gender: { type: String,enum:["male","female","Unspecifide"],required: true,default:"male"},
  isAdmin:{type:Boolean,enum:[true,false],required:true,default:false}
});


const UserModel = mongoose.model("userdata", UserSchema);

module.exports = {UserModel};
