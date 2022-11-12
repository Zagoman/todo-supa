const express = require("express");
const app = express();
const todo = require("./routes/todo");

app.use(express.static("./front/dist/"));

app.use(todo);

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});
