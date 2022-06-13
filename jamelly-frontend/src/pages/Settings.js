import React, { useReducer } from "react";
import { motion } from "framer-motion";

function SettingsPage({ token, user }) {
  console.log(user);

  const changeEmail = (e) => {};
  const changeUsername = (e) => {};
  const changePassword = (e) => {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div id="SettingsBox">
        <div id="Avatar"></div>
        <p>E-Mail: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>Password: {user.password}</p>
        <p>Change E-mail:</p>

        <form onSubmit={changeEmail}>
          <input type="email" name="email" id="Chemail" placeholder="email" />
          <input type="submit" value="Change" id="ChangeEmail" />
        </form>
        <p>Change Username:</p>
        <form onSubmit={changeUsername}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
          <input type="submit" value="Change" id="ChangeUserName" />
        </form>
        <p>Change Passowrd:</p>
        <form onSubmit={changePassword}>
          <input
            type="password"
            name="password"
            id="chpassword"
            placeholder="password"
          />
          <input type="submit" value="Change" id="ChangePassword" />
        </form>
      </div>
    </motion.div>
  );
}

export default SettingsPage;
