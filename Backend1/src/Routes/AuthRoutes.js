let {Router} = require("express");
const {UserModel} = require("../model/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config;

let AuthRouter = Router();
const privateKey = process.env.PRIVATEKEY;
AuthRouter.post("/addemployee", async (req, res) => {
  let {email} = req.body;
  let isexist = await UserModel.findOne({email});
  if (isexist) {
    res
      .status(200)
      .send({msg: "User Already Exist With this Email Plase Login !!"});
  } else {
    const {
      firstname,
      lastname,
      salary,
      position,
      joiningDate,
      gender,
      email,
      password,
    } = req.body;

    bcrypt.hash(password, 4, async function (err, hashedpassword) {
      if (err) {
        res.send({msg: "Something wents wrong ", err: err});
      } else {
      
        try {
          let admintrue=false
          if(email.includes("admin")){
            admintrue=true
          }else{
             admintrue=false
          }
          let newEmployee = new UserModel({
            firstname,
            lastname,
            salary,
            position,
            joiningDate,
            gender,
            email,
            password: hashedpassword,
            isAdmin:admintrue
          });
          await newEmployee.save();
          

          res.status(201).json({msg: "Signup Sucessfully"});
        } catch (err) {
          res
            .status(500)
            .json({msg: "something wents wrong to uploading the data"});
        }
      }
    });
  }
  //
});

AuthRouter.post("/login", async (req, res) => {
  const {email, password} = req.body;

  try {
    if (email && password) {
      const Checkuser = await UserModel.findOne({email});
      if (!Checkuser) {
        res.status(404).json({msg:"Unauthorized",isuser:false});
      } else {
        let isadmincheck=Checkuser.isAdmin
        const hashedpassword = Checkuser.password;
        const user_id = Checkuser._id;
        bcrypt.compare(password, hashedpassword, function (err, result) {
          if (result) {
            var token = jwt.sign({user_id: user_id}, privateKey);
            res.status(200).json({token: token,isAdmin:isadmincheck,msg:"Login sucsess"});
          } else {
            res.status(401).json({
              msg: "WrongCredential",
              isuser:false,
            });
          }
        });
      }
    } else {
      res.json({msg: "FieldMissing",isuser:false});
    }
  } catch (err) {
    res.json({msg: "SomeThing Wents Wrong please Try Again"});
  }
});

module.exports = {AuthRouter};
