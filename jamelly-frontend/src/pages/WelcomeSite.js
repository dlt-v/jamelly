import React, { useState } from "react";
import { motion } from "framer-motion";

function WelcomeSite(props) {
  return (
    <motion.div
      clasName="Welcome"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
    >
      <h1>
        <p id="Jam2">Jam</p>
        <p id="elly2">elly</p>
      </h1>
      <h2>
        <p id="Learn">
          <i>Learn</i>
        </p>
        <p id="smarter">
          <i>smarter</i>
        </p>
      </h2>
    </motion.div>
  );
}

export default WelcomeSite;
