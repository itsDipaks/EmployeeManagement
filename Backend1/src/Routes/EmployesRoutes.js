let {Router} = require("express");
const {UserModel} = require("../model/user.model");

let EmployeeRouter = Router();

EmployeeRouter.get("/allempolyees", async (req, res) => {
  try {
    let AllEmployeedata = await UserModel.find();

    res.status(200).send({masg: "All Employee Data", Employees: AllEmployeedata});
  } catch (er) {
    res.status(204).send({msg: "No Data Found ", Data: null});
  }
});


EmployeeRouter.get("/empolyeeprofile", async (req, res) => {

    let {_id}=req.headers
    console.log
  try {
    let EmployeeProfile = await UserModel.findById({_id});
let arr=[]
arr.push(EmployeeProfile)
    res.status(200).send({masg: "Employee Data", EmployeeProfile: arr});
  } catch (er) {
    res.status(204).send({msg: "No Data Found ", Data: null});
  }
});

EmployeeRouter.get("/singleemployee", (req, res) => {});

module.exports = {EmployeeRouter};
