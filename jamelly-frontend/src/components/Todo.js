import React from "react";

const Todo = ({ text, setTodos, todos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
      setTodos(todos.map(item => {
          if(item.id === todo.id){
              return {
                  ...item, completed: !item.completed
              }
          }
          return item;
      }))
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
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
