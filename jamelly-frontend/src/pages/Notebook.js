import React from "react";
import { motion } from "framer-motion";

function NotebookPage() {
  return (
    <motion.div
      className="NotebookMain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        Notebook
    </motion.div>
  );
}

export default NotebookPage;
