import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function TasksPage({token}) {
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
 //   saveLocalTodos(); //zapisujemy na dysku nasze todos przy każdej zmianie stanu
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.status === "FIN"));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.status === "ACT"));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //funkcja zapisująca na dysk nasze todos
  // const saveLocalTodos = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };

  //funkcja pobierająca z dysku nasze todos
  const getLocalTodos = async () => {
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
        token = {token}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
        token = {token}
      />
    </motion.div>
  );
}

export default TasksPage;
