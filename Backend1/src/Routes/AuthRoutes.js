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
          let newEmployee = new UserModel({
            firstname,
            lastname,
            salary,
            position,
            joiningDate,
            gender,
            email,
            password: hashedpassword,
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
        res.status(401).send({msg: "User Not Found Please Signup !! "});
      } else {
        const hashedpassword = Checkuser.password;
        const user_id = Checkuser._id;
        bcrypt.compare(password, hashedpassword, function (err, result) {
          if (result) {
            var token = jwt.sign({user_id: user_id}, privateKey);
            res.status(200).send({token: token, user_id: user_id});
          } else {
            res.status(404).send({
              msg: "Authentication Faild please Check your Password",
              err: err,
            });
          }
        });
      }
    } else {
      res.send({msg: "Input Field Is Missing"});
    }
  } catch (err) {
    res.send({msg: "SomeThing Wents Wrong please Try Again", err});
  }
});

module.exports = {AuthRouter};
