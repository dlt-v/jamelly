import React from "react";
import { motion } from "framer-motion";

function ForgotPassword() {
  return (
    <motion.div
      className="ForgotPassword"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        Forgot Password
    </motion.div>
  );
}

export default ForgotPassword;