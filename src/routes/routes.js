const express = require("express");

const router = express.Router();

const {
  getTodos,
  detailTodos,
  addTodos,
  updateTodos,
  deleteTodos,
} = require("../controllers/todos");

router.get("/todos", getTodos);
router.get("/todo/:id", detailTodos);
router.post("/todo", addTodos);
router.patch("/todo/:id", updateTodos);
router.delete("/todo/:id", deleteTodos);

module.exports = router;
