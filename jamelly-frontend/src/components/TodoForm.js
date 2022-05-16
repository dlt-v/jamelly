import React, { useState } from "react";

const TodoForm = ({ setInputText, todos, inputText, setTodos, setStatus }) => {
  const [id, setId] = useState(0);

  const giveId = (e) => {
    setId(id + 1);
    return id;
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if(inputText === "" || /^\s*$/.test(inputText)){
      return;
    }

    setTodos([...todos, { text: inputText, completed: false, id: giveId() }]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form id="todoform">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        placeholder="Add a todo"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <p id="plus">+</p>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default TodoForm;
