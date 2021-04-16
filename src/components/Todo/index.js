import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked, ImBin } from "react-icons/im";

const Todo = ({ title, isTodoChecked, id, todos, setTodos }) => {
  const handleCheckTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };
  const removeTodo = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  return (
    <div className="todo">
      <h2 className={isTodoChecked ? "checked" : "unchecked"}>{title}</h2>
      <div className="btns">
        {isTodoChecked && 
          <ImBin 
            className="del" 
            onClick={() => removeTodo()} 
          />}
        {isTodoChecked ? (
          <ImCheckboxChecked
            className="check"
            onClick={() => handleCheckTodo()}
          />
        ) : (
          <ImCheckboxUnchecked
            className="check"
            onClick={() => handleCheckTodo()}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
