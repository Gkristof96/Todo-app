import React, { useState } from "react";
import SVG from "./svg";
import Todo from "./todo";

import "./css/style.css";

function App() {
  const [todos, setTodos] = useState([{ name: "", checked: false }]);
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
                  name="todoinput"
                  placeholder="Type todo..."
                />
                <button>Add</button>
              </div>
              <div className="todos-list">
                {todos.map((todo, i) => (
                  <Todo key={i} todo={todo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
