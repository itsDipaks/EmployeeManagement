let {Router} = require("express");
const {TaskModel} = require("../model/Task.model");

let TaskRouter = Router();

TaskRouter.post("/addtask", async (req, res) => {
  let data = req.body;
  let {Task, AssignEmployee, DueDate,Projectid} = data.Newtask;
  try {
    let AddTask = new TaskModel({
      Task,
      AssignEmployee,
      DueDate,
      Projectid
    });
    await AddTask.save();
    res.status(200).send({msg: "Task Added Sucessfully"});
  } catch (err) {
    res
      .status(400)
      .send({msg: "something wents wrong to uploading the data", err: err});
  }
});

TaskRouter.get("/alltask/:id", async (req, res) => {
  let {id} = req.params;
  console.log(id)
  try {
    let Alltasks = await TaskModel.find({Projectid:id});
    res.status(200).send({msg: "All Tasks Data", Alltasks: Alltasks});
  } catch (err) {
    res.status(204).send({msg: "No Task Found ", err: err});
  }
});

TaskRouter.delete("/deletetask", async (req, res) => {
  let {taskid} = req.headers;
  try {
    let DeletedData = await TaskModel.findByIdAndDelete({_id: taskid});
    res.status(200).send({
      msg: "Task Deleted Sucessfully",
      DeletedTask: DeletedData,
    });
  } catch (err) {
    res.status(400).send({msg: "Something Wents Wrong"});
  }
});

// ==========Task Status Changed =============

TaskRouter.patch("/changestatus", async (req, res) => {
  const {Status} = req.body;
  let {taskid} = req.headers;
  try {
    let TaskInfo = await TaskModel.findOneAndUpdate(
      {_id: taskid},
      {Status: Status}
    );
    console.log(TaskInfo);
    res.status(200).send({
      msg: `Task Status Changed to ${Status}`,
    });
  } catch (err) {
    res.status(400).send({msg: "Something Wents Wrong"});
  }
});

module.exports = {TaskRouter};
