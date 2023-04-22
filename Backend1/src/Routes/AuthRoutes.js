let {Router} = require("express");
const {UserModel} = require("../model/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config;

let AuthRouter = Router();
const privateKey = process.env.PRIVATEKEY;

// ----------------------Add Employee ----------------------------

AuthRouter.post("/addemployee", async (req, res) => {
  let {email} = req.body;
  console.log(req.body)
  let isexist = await UserModel.findOne({email});
  if (isexist) {
    res
      .status(400)
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
        res.status(404).send({msg: "Something wents wrong ", err: err});
      } else {
        try {
          let admintrue = false;
          if (email.includes("admin")) {
            admintrue = true;
          } else {
            admintrue = false;
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
            isAdmin: admintrue,
            MobileNumber:"",
            Country:"",
            City:"",
            state:"",
            StreetAddress:"",
            github:"",
            Linkdin:"",
            Status:"Inactive"
          });
          await newEmployee.save();

          res.status(200).send({msg: "Signup Sucessfully", data: newEmployee});
        } catch (err) {
          res
            .status(404)
            .send({msg: "something wents wrong to uploading the data",err});
        }
      }
    });
  }
});

// ----------------------Login Employee ----------------------------

AuthRouter.post("/login", async (req, res) => {
  const {email, password} = req.body;

  try {
    if (email && password) {
      const Checkuser = await UserModel.findOne({email});
      if (!Checkuser) {
        res.status(404).json({msg: "Unauthorized", isuser: false});
      } else {
        let isadmincheck = Checkuser.isAdmin;

        const hashedpassword = Checkuser.password;
        const user_id = Checkuser._id;
        bcrypt.compare(password, hashedpassword, function (err, result) {
          if (result) {
           UserModel.findOneAndUpdate({_id:Checkuser._id},{ $set:{Status:"Active"} })
            var token = jwt.sign({user_id: user_id}, privateKey);
            res.status(200).json({
              token: token,
              isAdmin: isadmincheck,
              userinfo: {
                name: Checkuser.firstname + " " + Checkuser.lastname,
                email: Checkuser.email,
                _id:Checkuser._id
              },
              msg: "Login sucsess",
            });
          } else {
            res.status(401).json({
              msg: "WrongCredential",
              isuser: false,
            });
          }
        });
      }
    } else {
      res.json({msg: "FieldMissing", isuser: false});
    }
  } catch (err) {
    res.json({msg: "SomeThing Wents Wrong please Try Again"});
  }
});

// ----------------------Edit Employee Password ----------------------------

AuthRouter.patch("/editpass", async (req, res) => {
  const {newpassword, oldpassword} = req.body;
  let {authorization} = req.headers;
  try {
    jwt.verify(authorization, privateKey, async function (err, decoded) {
      let user_id = decoded.user_id;
      let employeefind = await UserModel.findById({_id: user_id});
      if (employeefind) {
        let {password} = employeefind;

        bcrypt.compare(oldpassword, password, async function (err, result) {
          if (result) {
            bcrypt.hash(newpassword, 4, async function (err, hashedpassword) {
              if (!err) {
                let EmployeeInfo = await UserModel.findOneAndUpdate(
                  {_id: user_id},
                  {password: hashedpassword}
                );
                res.status(200).send({
                  msg: "Password Changed Sucess",
                });
              }
            });
          } else {
            res.status(400).send({
              msg: "Something Wents Wrong",
            });
          }
        });
      }
    });
  } catch (err) {
    res.status(400).send({msg: "Something Wents Wrong"});
  }
});

AuthRouter.patch("/:email", async (req, res) => {
  let {email}=req.params
  let {updateData}=req.body
  try {
    let EmployeeInfo = await UserModel.updateOne(
      { email: email },
      { $set:{...updateData} })
    res.status(200).send({
      msg: "Profile Updated",
    });
  } catch (err) {
    res.status(400).send({msg: "Something Wents Wrong"});
  }
});

module.exports = {AuthRouter};
