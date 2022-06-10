import React, { useState } from "react";
import ForgotPassword from "../pages/ForgotPassword";


function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <button href="Register.js" id="register">Register</button>
      <h1>
        <p id="Jam">Jam</p>
        <p id="elly">elly</p>
      </h1>
      <div id="Rectangle2">
        {error != "" ? <div id="error">{error}</div> : ""}
        <div id="Rectangle1">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="username"
            onChange={(e) => setDetails({ ...details, username: e.target.value })}
            value={details.email}
          />
        </div>
        <div id="Rectangle3">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <div>
          <input type="submit" value="Login" id="Login" />
        </div>
      </div>
      <h6>
        <a href="Forgotpassword.js">Forgot password?</a>
      </h6>
    </form>
  );
}

export default LoginForm;
