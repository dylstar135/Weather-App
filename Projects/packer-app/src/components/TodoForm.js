import React from "react";

const TodoForm = () => {
  return (
    <form className="todoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="what do you want to pack?"
      />
      <button type="submit" className="todo-btn">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
