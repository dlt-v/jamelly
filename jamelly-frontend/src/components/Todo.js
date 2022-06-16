import React from "react";

const Todo = ({ text, setTodos, todos, todo, token }) => {

  const deleteHandler = async () => {
    let idToDelete = todo.id

    
    await fetch(`http://localhost:8000/todos/${idToDelete}/`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${token}`
        }
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
  };

  const completeHandler = async () => {

    if (todo.status == 'ACT') {
      await fetch(`http://localhost:8000/todos/${todo.id}/`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${token}`
      },

      body: JSON.stringify({
        status: 'FIN'
        }),
    });
    } else if ((todo.status == 'FIN')) {
      await fetch(`http://localhost:8000/todos/${todo.id}/`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${token}`
      },

      body: JSON.stringify({
        status: 'ACT'
        }),
    });
    }
    

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
    console.log(todofromapi);
    setTodos(todofromapi)
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.status === "FIN" ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete">
        <i className="done">Done</i>
      </button>
      <button onClick={deleteHandler} className="trash">
        <i className="delete">Delete</i>
      </button>
    </div>
  );
};

export default Todo;
