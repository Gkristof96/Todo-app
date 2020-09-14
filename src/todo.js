import React from "react";

const Todo = (props) => {
  const { name, checked } = props.todo;
  return (
    <>
      {checked ? (
        <div className="todo">
          {name}
          {checked}
        </div>
      ) : (
        <div className="todo">
          {name}
          {checked}
        </div>
      )}
    </>
  );
};

export default Todo;
