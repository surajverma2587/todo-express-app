const { Router } = require("express");
const { todo } = require("./todo");

const router = Router();

router.use("/todo", todo);

module.exports = { router };
