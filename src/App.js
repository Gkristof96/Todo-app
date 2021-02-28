import React, { useState, useEffect } from "react";
import SVG from "./svg";
import TodoList from "./todolist";
import { motion } from 'framer-motion'
import { textSwim, transitionOne } from './animations'

import "./css/style.css";
import Header from "./components/Header";

function App() {
  const data = JSON.parse(localStorage.getItem('todos'))
  const [todos, setTodos] = useState(data);
  const [todo, setTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.length > 0) {
      setTodos([...todos, { title: todo, checked: false, id: Date.now() }]);
      setTodo("");
    }
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  return (
    <div className="App">
      <Header />
      <section>
        <div className="container">
          <div className="image-wrapper">
            <SVG />
          </div>
          <div className="todo-wrapper">
            <motion.div
              className="todo-card"
              initial='out'
              animate='in'
              exit='out'
              variants={textSwim}
              transition={transitionOne}
            >
              <h1 className="title">Todos</h1>
              <div className="todo-input">
                <input
                  type="text"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  placeholder="Type todo..."
                />
                <button onClick={(e) => handleAddTodo(e)}>Add</button>
              </div>
              <div className="line"> </div>
              <div className="todos-list">
                <TodoList todos={todos} setTodos={setTodos} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
