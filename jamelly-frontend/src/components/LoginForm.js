import React, { useState } from "react";
import ForgotPassword from "../pages/ForgotPassword";


function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>
        <p id="Jam">Jam</p>
        <p id="elly">elly</p>
      </h1>
      <div id="Rectangle2">
        {error != "" ? <div id="error">{error}</div> : ""}
        <div id="Rectangle1">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email adress"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
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
        <a href="/ForgotPassword">Forgot password?</a>
      </h6>
    </form>
  );
}

export default LoginForm;
