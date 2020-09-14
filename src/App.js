import React, { useState } from "react";
import SVG from "./svg";
import TodoList from "./todolist";

import "./css/style.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { title: todo, checked: false, id: Date.now() }]);
    setTodo("");
  };

  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="logo">
            <img src="todo.png" alt="todo" />
            <h1>Todo app</h1>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="image-wrapper">
            <SVG />
          </div>
          <div className="todo-wrapper">
            <div className="todo-card">
              <h1 className="title">Todos</h1>
              <div className="todo-input">
                <input
                  type="text"
                  value={todo}
                  onChange={(e) => handleChange(e)}
                  placeholder="Type todo..."
                />
                <button onClick={(e) => handleAddTodo(e)}>Add</button>
              </div>
              <div className="todos-list">
                <TodoList todos={todos} setTodos={setTodos} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
