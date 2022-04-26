import LoginForm from "./components/LoginForm";
import WelcomeSite from "./pages/WelcomeSite";
import Notebook from "./pages/Notebook";
import Settings from "./pages/Settings";
import Tasks from "./pages/Tasks";

import React, { useState } from "react";

function App() {
  //Domyślny admin
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  //pobieramy dane od użytkownika
  const [user, setUser] = useState({ email: "", password: "" });
  //jeśli dane są nieprawidłowe, to wyrzucamy mu error
  const [error, setError] = useState("");

  // funkcja logowania
  const Login = (details) => {
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in!");
      setUser({
        email: details.email,
        password: details.password,
      });
    } else {
      console.log("Details do not match!");
      setError("Błędne dane");
    }
  };

  //funkcja wylogowania
  const Logout = () => {
    setUser({ email: "", password: "" });
  };

  return (
    <div className="App">
      {user.email != "" ? ( // jeśli pole email nie jest puste
        // wyświetlamy tymczasowo opcję powitania z możliwością wylogowania
        <div clasName="Welcome">
          <WelcomeSite />
          <button id="logout" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        //w przeciwnym wypadku wyświetlamy formularz logowania
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
