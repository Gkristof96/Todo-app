import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          checked={todo.checked}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
        />
      ))}
    </>
  );
};

export default TodoList;
