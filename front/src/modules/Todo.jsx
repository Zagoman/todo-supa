import React from "react";

function Todo(props) {
  function removeTask() {
    fetch("/" + props.task.id, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  }
  return (
    <li>
      {props.children}
      <button onClick={removeTask}>Remove</button>
    </li>
  );
}

export default Todo;
