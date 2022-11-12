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
        setTasks(data);
      })
      .catch((err) => console.error(error));
  }, []);
  return (
    <div className="App">
      <Form />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
