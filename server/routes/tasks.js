const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const options = {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjY2t3eGRhYWVtbW5janlsbXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NDYsImV4cCI6MTk4MjE3NDc0Nn0.enFCxOVSf-Zuj1olQZFLfKQbRnve3oQMEP9zFG03s-g",
  },
};

router.get("/", (req, res) => {
  fetch("https://xcckwxdaaemmncjylmpi.supabase.co/rest/v1/todo", options)
    .then((response) => response.json())
    .then((response) => res.status(200).json(response))
    .catch((err) => console.error(err));
  //   res.status(401).send("Bad request");
});

module.exports = router;
