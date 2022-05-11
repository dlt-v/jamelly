import { motion } from "framer-motion";

function TasksPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
    >
      Zadania
    </motion.div>
  );
}

export default TasksPage;
