let {Router} = require("express");

var jwt = require("jsonwebtoken");
const {ProjectModel} = require("../model/projects.model");
require("dotenv").config;

let ProjectRouter = Router();
const privateKey = process.env.PRIVATEKEY;

ProjectRouter.get("/allprojects",async (req, res) => {
    try {
        let AllProjectsData = await ProjectModel.find();
        res
          .status(200)
          .send({msg: "All Employee Data", GetallProjects: AllProjectsData});
      } catch (er) {
        res.status(204).send({msg: "No Projects Found ", Data: null});
      }
});




ProjectRouter.get("/assignproject",async (req, res) => {
  let {email}=req.headers;
  try {
      let AssignedProject = await ProjectModel.findOne({AssignedTeam:{$elemMatch:{email:email}}})
  if(AssignedProject!=null){
    res
    .status(200)
    .send({masg: "User Project Data", AssignedProject: AssignedProject});
  }else{
    res.status(404).send({msg: "No Projects Found for This user", AssignedProject: null});
  }
    } catch (err) {
      console.log(err)
      res.status(404).send({msg: "Something Wents Wrong", AssignedProject: err});
    }
});

// ------------------------Add Projects-------------------------------------------

ProjectRouter.post("/Addproject", async (req, res) => {
  let {
    ProjectTitle,
    Description,
    StartDate,
    EndDate,
    Status,
    AssignedTeam,
    ProjectimaageUrl,
    ProjectType,
    groupleader
  } = req.body;
  try {
    let addMyproject = new ProjectModel({
      ProjectTitle,
      Description,
      StartDate,
      EndDate,
      Status,
      AssignedTeam,
      ProjectimaageUrl,
      ProjectType,
      groupleader
    });
    
    await addMyproject.save();
    res.status(200).json({msg: "Project Added Sucessfully"});
  } catch (er) {
    res.status(500).json({msg: "something wents wrong to uploading the data"});
  }
});



ProjectRouter.delete("/deleteproject",async (req, res) => {
  let {projectid} = req.headers;
  console.log(projectid)
  try {
      let  DeletedData = await ProjectModel.findByIdAndDelete({_id: projectid});
      res.send({
        msg:"Project Data Deleted Sucessfully"
    });
  } catch (err) {
    res.send({msg: "Something Wents Wrong"});
  }
});

module.exports = {ProjectRouter};
