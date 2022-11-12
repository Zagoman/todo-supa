const express = require("express");
const router = express.Router();

const { addTodo, deleteTodo, getTasks } = require("../controllers/todo");

router.use(express.urlencoded({ extended: false }));
router.get("/api/v1/tasks", getTasks);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);
module.exports = router;
