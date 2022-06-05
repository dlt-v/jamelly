import React, { useReducer } from "react";
import { motion } from "framer-motion";

function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
    >
      <div id="SettingsBox">
        <div id="Avatar"></div>
        <p id="SettingChoice">Pseudonim: Admin
        </p>
      </div>
    </motion.div>
  );
}

export default SettingsPage;
