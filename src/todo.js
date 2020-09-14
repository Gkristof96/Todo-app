import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked, ImBin } from "react-icons/im";

const Todo = ({ title, checked, todo, id, todos, setTodos }) => {
  const handleCheck = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  return (
    <div className="todo">
      <h2 className={checked ? "checked" : "unchecked"}>{title}</h2>
      <div className="btns">
        {checked ? (
          <ImCheckboxChecked className="check" onClick={() => handleCheck()} />
        ) : (
          <ImCheckboxUnchecked
            className="check"
            onClick={() => handleCheck()}
          />
        )}
        <ImBin className="del" onClick={() => handleDelete()} />
      </div>
    </div>
  );
};

export default Todo;
