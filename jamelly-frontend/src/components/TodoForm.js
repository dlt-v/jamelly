import React, { useState } from "react";

const TodoForm = ({ setInputText, todos, inputText, setTodos, setStatus, token }) => {
  const [id, setId] = useState(0);

  const giveId = (e) => {
    setId(id + 1);
    return id;
  };

  const inputTextHandler = async (e) => {
    setInputText(e.target.value);
    let todofromapi = {}
    
      let response = await fetch("http://localhost:8000/todos/", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${token}`
        }
      }).then(response => response.json())
      .then(data => {
      todofromapi = data})
      .catch((error) => console.log(error));
  
      setTodos(todofromapi)
  };

  const submitTodoHandler = async (e) => {
    e.preventDefault();
    if(inputText === "" || /^\s*$/.test(inputText)){
      return;
    }
    // Create a singular todo
    await fetch("http://localhost:8000/todos/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${token}`
        },
  
        body: JSON.stringify({
          name: inputText,
          status: 'ACT'
          }),
      });

      let todofromapi = {}
    
      let response = await fetch("http://localhost:8000/todos/", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${token}`
        }
      }).then(response => response.json())
      .then(data => {
      todofromapi = data})
      .catch((error) => console.log(error));
  
      setTodos(todofromapi)


    // setTodos([...todos, { text: inputText, completed: false, id: giveId() }]);
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
