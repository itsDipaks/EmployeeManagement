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
          .send({masg: "All Employee Data", GetallProjects: AllProjectsData});
      } catch (er) {
        res.status(204).send({msg: "No Projects Found ", Data: null});
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
    ProjectType
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
      ProjectType
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
      let DeletedData = await ProjectModel.findByIdAndDelete({_id: projectid});
      res.send({
        msg:"Project Data Deleted Sucessfully"
    });
  } catch (err) {
    res.send({msg: "Something Wents Wrong"});
  }
});

module.exports = {ProjectRouter};
