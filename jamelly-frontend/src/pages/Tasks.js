import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function TasksPage() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Wczytujemy todo's z dysku
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos(); //zapisujemy na dysku nasze todos przy każdej zmianie stanu
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //funkcja zapisująca na dysk nasze todos
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  //funkcja pobierająca z dysku nasze todos
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todofromlocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todofromlocal);
    }
  };

  return (
    <motion.div
      className="ToDoListMain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header id="Todoprompt">What miracle are we performing today?</header>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </motion.div>
  );
}

export default TasksPage;
