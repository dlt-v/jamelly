import React from "react";
import { motion } from "framer-motion";

function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
    >
      Ustawienia
    </motion.div>
  );
}

export default SettingsPage;
