import React, { useState } from "react";
import { motion } from "framer-motion";

function SettingsPage({ token, user }) {
  //console.log(user);
  const [mailDetails, setMailDetails] = useState({ email: "" });
  const [userDetails, setUserDetails] = useState({ username: "" });
  const [passwordDetailsOld, setPasswordDetails] = useState({
    passwordOld: "",
    passwordNew: "",
  });

  const changeEmail = async (e) => {
    e.preventDefault();
    await fetch(`http://127.0.0.1:8000/users/${user.userID}/`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        email: `${mailDetails.email}`,
      }),
    })
      .then((result) => console.log(result.json()))
      .catch((error) => console.log(error));

    alert("Data will be updated by the next login!");
  };

  const changeUsername = async (e) => {
    e.preventDefault();

    fetch(`http://127.0.0.1:8000/users/${user.userID}/`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        username: `${userDetails.username}`,
      }),
    });

    alert("Data will be updated by the next login!");
  };

  const changePassword = async (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/change-password/`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        old_password: `${passwordDetailsOld.passwordOld}`,
        new_password: `${passwordDetailsOld.passwordNew}`,
      }),
    });

    alert("Data will be updated by the next login!");
  };

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
        <p>Set new informations:</p>
        <p>Change E-mail:</p>
        <form onSubmit={changeEmail}>
          <input
            type="email"
            name="email"
            id="Chemail"
            placeholder="email"
            onChange={(e) =>
              setMailDetails({ ...mailDetails, email: e.target.value })
            }
          />
          <input type="submit" value="Change" id="ChangeEmail" />
        </form>
        <p>Change Username:</p>
        <form onSubmit={changeUsername}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
          />
          <input type="submit" value="Change" id="ChangeUserName" />
        </form>
        <p>Old Password:</p>
        <form onSubmit={changePassword}>
          <input
            type="password"
            name="oldpassword"
            id="chpasswordOld"
            placeholder="old password"
            onChange={(e) =>
              setPasswordDetails({
                ...passwordDetailsOld,
                passwordOld: e.target.value,
              })
            }
          />
          <p>New Password:</p>
          <input
            type="password"
            name="newpassword"
            id="chpasswordNew"
            placeholder="new password"
            onChange={(e) =>
              setPasswordDetails({
                ...passwordDetailsOld,
                passwordNew: e.target.value,
              })
            }
          />
          <input type="submit" value="Change" id="ChangePasswordOld" />
        </form>
      </div>
    </motion.div>
  );
}

export default SettingsPage;
