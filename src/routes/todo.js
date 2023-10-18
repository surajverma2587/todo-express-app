const { Router } = require("express");
const {
  getAllTodo,
  getTodoById,
  createTodo,
  updateTodoById,
  removeTodoById,
} = require("../controllers/todo");
const { auth } = require("../middleware/auth");

const todo = Router();

todo.get("/", getAllTodo);
todo.get("/:id", getTodoById);
todo.post("/", auth, createTodo);
todo.put("/:id", auth, updateTodoById);
todo.delete("/:id", auth, removeTodoById);

module.exports = { todo };
