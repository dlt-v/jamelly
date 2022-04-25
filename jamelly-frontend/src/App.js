import LoginForm from "./components/LoginForm";
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
      setError("Details do not match!");
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
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        //w przeciwnym wypadku wyświetlamy formularz logowania
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
