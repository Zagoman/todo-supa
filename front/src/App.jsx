import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./modules/Form";
import TodoList from "./modules/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("/api/v1/tasks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTasks(data);
      });
    fetch("https://xcckwxdaaemmncjylmpi.supabase.co/rest/v1/todo", {
      method: "GET",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjY2t3eGRhYWVtbW5janlsbXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NDYsImV4cCI6MTk4MjE3NDc0Nn0.enFCxOVSf-Zuj1olQZFLfKQbRnve3oQMEP9zFG03s-g",
      },
    })
      .then((response) => response.json())
      .then((response) => setTasks(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="App">
      <Form />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
