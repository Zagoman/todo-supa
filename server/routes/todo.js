const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.use(express.urlencoded({ extended: false }));

router.post("/", (req, res) => {
  console.log("POST");
  const task = req.body.todo;
  const newBody = JSON.stringify({ task: task });
  console.log(newBody);
  fetch("https://xcckwxdaaemmncjylmpi.supabase.co/rest/v1/todo", {
    method: "POST",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjY2t3eGRhYWVtbW5janlsbXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NDYsImV4cCI6MTk4MjE3NDc0Nn0.enFCxOVSf-Zuj1olQZFLfKQbRnve3oQMEP9zFG03s-g",
      "Content-Type": "application/json",
    },
    body: newBody,
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  res.redirect("/");
});

router.delete("/:id", (req, res) => {
  console.log("DELETE");
  const options = {
    method: "DELETE",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjY2t3eGRhYWVtbW5janlsbXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NDYsImV4cCI6MTk4MjE3NDc0Nn0.enFCxOVSf-Zuj1olQZFLfKQbRnve3oQMEP9zFG03s-g",
    },
  };

  fetch("https://xcckwxdaaemmncjylmpi.supabase.co/rest/v1/todo?id=eq." + req.params.id, options)
    .then((response) => response.json())
    .then((response) => {
      res.end();
    })
    .catch((err) => console.error(err));
  res.end();
});
module.exports = router;
