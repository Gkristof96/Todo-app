import React from "react";
import Todo from '../Todo';

const TodoList = ({ todos, setTodos }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isTodoChecked={todo.checked}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
        />
      ))}
    </>
  );
};

export default TodoList;
