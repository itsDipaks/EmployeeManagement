let {Router} = require("express");
const { TodoModel } = require("../model/Todo.model");

let TodoRouter = Router();

TodoRouter.post("/addtodo", async (req, res) => {
  let data = req.body;
  console.log(data)
  let {Todo, AssignEmployee, DueDate,Priority} = data.todoformdata;
  try {
    let AddTask = new TodoModel({
      Todo,
      AssignEmployee,
      DueDate,
      Priority
    });
    await AddTask.save();
    res.status(200).send({msg: "Task Added Sucessfully"});
  } catch (err) {
    res
      .status(400)
      .send({msg: "something wents wrong to uploading the data", err: err});
  }
});

TodoRouter.get("/alltodos", async (req, res) => {
  try {
    let AllTodo = await TodoModel.find();
    res.status(200).send({msg: "All Todo Data", AllTodo: AllTodo});
  } catch (err) {
    res.status(204).send({msg: "No Todo Found ", err: err});
  }
});

TodoRouter.delete("/deletetodo", async (req, res) => {
  let {todoid} = req.headers;
  try {
    let DeletedTodo = await TodoModel.findByIdAndDelete({_id: todoid});
    res.status(200).send({
      msg: "Task Deleted Sucessfully",
      DeletedTodo: DeletedTodo,
    });
  } catch (err) {
    res.status(400).send({msg: "Something Wents Wrong"});
  }
});

// ==========Task Status Changed =============

TodoRouter.patch("/todostatus", async (req, res) => {
  const {Status} = req.body;
  let {todoid} = req.headers;
  try {
    let TodoInfo = await TodoModel.findOneAndUpdate(
      {_id: todoid},
      {Status: Status}
    );
    console.log(TodoInfo);
    res.status(200).send({
      msg: `Todo Status Changed to ${Status}`,
    });
  } catch (err) {
    res.status(400).send({msg: "Something Wents Wrong"});
  }
});

module.exports = {TodoRouter};
