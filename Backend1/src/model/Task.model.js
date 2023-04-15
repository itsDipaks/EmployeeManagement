
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  Projectid: {  required: true ,type: String},
  AssignEmployee: {  required: true ,type: String},
  Task: {  required: true ,type: String},
  Status:{type: String ,enum:["Completed","InProgress","Incomplete"],default:"Incomplete"},
  DueDate:{  required: true ,type: String},
  created_at:{  type: Date, default: Date.now()}
 , updated_at:{type:Date, default: Date.now()}
});

const TaskModel = mongoose.model("ProjectTask", TaskSchema);

module.exports = {TaskModel};

