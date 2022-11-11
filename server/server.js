const express = require("express");
const app = express();
const todo = require("./routes/todo");
const tasks = require("./routes/tasks");

app.use(express.static("./front/dist"));

app.use(todo);
app.use("/api/v1/tasks", tasks);

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});
