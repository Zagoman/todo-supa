import React from "react";
import Todo from "./Todo";

function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Todo key={task.id} task={task}>{task.task}</Todo>
      ))}
    </ul>
  );
}

export default TodoList;
