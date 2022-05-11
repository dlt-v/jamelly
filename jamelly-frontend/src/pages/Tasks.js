import React from "react";
import { motion } from "framer-motion";

import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function TasksPage() {
  return (
    <motion.div
      className="ToDoListMain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        <TodoList/>
    </motion.div>
  );
}

export default TasksPage;
