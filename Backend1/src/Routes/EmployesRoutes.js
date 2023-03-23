let {Router} = require("express");
const {UserModel} = require("../model/user.model");
var jwt = require("jsonwebtoken");
require("dotenv").config;

let EmployeeRouter = Router();
const privateKey = process.env.PRIVATEKEY;

EmployeeRouter.get("/allempolyees", async (req, res) => {
  try {
    let AllEmployeedata = await UserModel.find({isAdmin:false});

    res
      .status(200)
      .send({masg: "All Employee Data", Employees: AllEmployeedata});
  } catch (er) {
    res.status(204).send({msg: "No Data Found ", Data: null});
  }
});

// EmployeeRouter.get("/empolyeeprofile", async (req, res) => {

//     let {_id}=req.headers
//     console.log
//   try {
//     let EmployeeProfile = await UserModel.findById({_id});
// let arr=[]
// arr.push(EmployeeProfile)
//     res.status(200).send({masg: "Employee Data", EmployeeProfile: arr});
//   } catch (er) {
//     res.status(204).send({msg: "No Data Found ", Data: null});
//   }
// });

EmployeeRouter.get("/singleemployee",async (req, res) => {
  let {user_id} = req.headers;
  let _id=user_id
  console.log(user_id)
  try {
    

      let EmployeeInfo = await UserModel.findById({_id: user_id});
      res.status(200).send(
      EmployeeInfo,
    );
    console.log(EmployeeInfo)
  } catch (err) {
    res.send({msg: "Something Wents Wrong"});
  }
});


EmployeeRouter.delete("/deleteemployee",async (req, res) => {
  let {user_id} = req.headers;
  console.log(user_id)
  try {
    

      let DeletedData = await UserModel.findByIdAndDelete({_id: user_id});
    
      res.send({
        msg:"Employee Data Deleted Sucessfully"
    });
  } catch (err) {
    res.send({msg: "Something Wents Wrong"});
  }
});

module.exports = {EmployeeRouter};
