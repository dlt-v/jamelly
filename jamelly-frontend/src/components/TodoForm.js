import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  const [id, setId] = useState(0);

  const giveId = () => {
    setId(id + 1);
    return id;
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: giveId(),
      text: input,
    });

    setInput("");
  };

  return (
    <form id="todoform" onSubmit={handleSubmit}>
      <input
        id="todoinput"
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button id="AddToDo">+</button>
    </form>
  );
}

export default TodoForm;
