const router = require('express').Router();
const controller = require("../controller/todoController")
router
.post("/",controller.createTask)
.get("/",controller.retreiveAllTasks)
.get("/:id",controller.getTask)
.put("/:id",controller.updateTask)
.delete("/:id",controller.deleteTask)

module.exports = router
