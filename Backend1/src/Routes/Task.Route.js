let {Router} = require("express");
const {TaskModel} = require("../model/Task.model");

let TaskRouter = Router();

TaskRouter.post("/addtask", async (req, res) => {
  let {EmployeeEmail, Task, DueDate} = req.body;
  try {
    let AddTask = new TaskModel({
        EmployeeEmail,
      Task,
      DueDate,
    });
    await AddTask.save();
    res.status(200).send({msg: "Task Added Sucessfully"});
  } catch (err) {
    res
      .status(400)
      .send({msg: "something wents wrong to uploading the data", err: err});
  }
});

TaskRouter.get("/alltask", async (req, res) => {
  try {
    let Alltasks = await TaskModel.find();
    res.status(200).send({masg: "All Tasks Data", Alltasks: Alltasks});
  } catch (err) {
    res.status(204).send({msg: "No Task Found ", err: err});
  }
});

// TaskRouter.delete("/deletefeed", async (req, res) => {
//   let {feedid} = req.headers;
//   try {
//     let DeletedData = await TaskModel.findByIdAndDelete({_id: feedid});
//     res.status(200).send({
//       msg: "Feed Data Deleted Sucessfully",
//     });
//   } catch (err) {
//     res.status(400).send({msg: "Something Wents Wrong"});
//   }
// });

// ==========Comment Sections =============

// TaskRouter.patch("/addcomment", async (req, res) => {
//   let {CommentMsg, FeedId, name, email} = req.body;

//   try {
//     let AddComment = await TaskModel.findOneAndUpdate(
//       {_id: FeedId},
//       {
//         comments: [
//           {CommentMasg: CommentMsg, CommentAuthor: name, AutherEmail: email},
//         ],
//       }
//     );

//     res.status(200).json({msg: "Comment Added Sucessfully", data: AddComment});
//   } catch (err) {
//     res.status(500).json({msg: "something wents wrong to Comment", err: err});
//   }
// });

module.exports = {TaskRouter};
