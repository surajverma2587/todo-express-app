const getAllTodo = (req, res) => {
  return res.send("getAllTodo");
};

const getTodoById = (req, res) => {
  return res.send("getTodoById");
};

const createTodo = (req, res) => {
  return res.send("createTodo");
};

const updateTodoById = (req, res) => {
  return res.send("updateTodoById");
};

const removeTodoById = (req, res) => {
  return res.send("removeTodoById");
};

module.exports = {
  getAllTodo,
  getTodoById,
  createTodo,
  updateTodoById,
  removeTodoById,
};
