import React, { useState, useEffect } from "react";

import SVG from "./components/Svg";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

import { motion } from 'framer-motion'
import { textSwim, transitionOne } from './animations'

import "./css/style.css";


function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addNewTodo = (e) => {
    e.preventDefault();
    if (todo.length > 0) {
      setTodos([...todos, { title: todo, checked: false, id: Date.now() }]);
      setTodo("");
    }
  };

  useEffect(() => {
    const todoJSON = localStorage.getItem('todos')
    const data = todoJSON ? JSON.parse(todoJSON) : []
    if(data.length > 0) {
      setTodos(data)
    }
    console.log('red alert')
  },[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log('green alert')
  },[todos])

  return (
    <div className="App">
      <Header />
      <section>
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
              <h1 className="card-title">Todos</h1>
              <div className="todo-input">
                <input
                  type="text"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  placeholder="Type todo..."
                />
                <button onClick={(e) => addNewTodo(e)}>Add</button>
              </div>
              <div className="horizontal-line"> </div>
              <div className="todos-list">
                <TodoList todos={todos} setTodos={setTodos} />
              </div>
            </motion.div>
          </div>
      </section>
    </div>
  );
}

export default App;
