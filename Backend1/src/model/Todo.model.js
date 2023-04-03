const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  useremail: {required: true, type: String},
  Todo: {required: true, type: String},
  Status: {
    type: String,
    enum: ["Completed", "InProgress", "Incomplete"],
    default: "Incomplete",
  },
  DueDate: {required: true, type: String},
  created_at: {type: Date, default: Date.now()},
  updated_at: {type: Date, default: Date.now()},
  Priority: {type: String, enum: ["1", "2", "3"]},
  time:{type: String, required:true}
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = {TodoModel};
