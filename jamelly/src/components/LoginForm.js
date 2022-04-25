import React from "react";

function LoginForm({Login, error}) {
  return (
    <form>
      <h1>
        <p id="Jam">Jam</p>
        <p id="elly">elly</p>
      </h1>
      <div id="Rectangle2">
        <div id="Rectangle1">
          <input type="email" name="email" id="email" />
        </div>
        <div id="Rectangle3">
          <input type="text" name="password" id="password" />
        </div>
        <div>
            <input type="submit" value="Zaloguj" id="Login" />
        </div>
      </div>
    </form>
  );
}

export default LoginForm;