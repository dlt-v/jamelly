import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, token }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo todo={todo} setTodos={setTodos} todos={todos} text={todo.name} key={todo.id} token={token} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
