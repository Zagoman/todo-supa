import React from "react";

function Form() {
  return (
    <form action="/" method="post">
      <label htmlFor="todo_item">Add todo</label>
      <input type="text" name="task" id="todo_item" />
      <input type="submit" value="Add todo" />
    </form>
  );
}

export default Form;
