import React from "react";

export const toform2 = () => {
  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="what is the task today"
      />
      <button type="submit" className="todo-btn" />
    </form>
  );
};
