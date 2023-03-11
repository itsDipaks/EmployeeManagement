let {Router}=require("express")


let AuthRouter=Router()

AuthRouter.post("/signup",(req,res)=>{



})



AuthRouter.post("/login",async(req,res)=>{
const  {email,password}=req.body

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
})

module.exports = {AuthRouter};