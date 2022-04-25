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
  const [error, setError] = useState("ERROR");

  // funkcja logowania
  const Login = (details) => {
    console.log(details);
  };
  //funkcja wylogowania
  const Logout = () => {
    console.log("Logout");
  };

  return (
    <div className="App">
      {user.email != "" ? ( // jeśli pole email nie jest puste
        // wyświetlamy tymczasowo opcję powitania z możliwością wylogowania
        <div clasName="Welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button>Logout</button>
        </div>
      ) : (
        //w przeciwnym wypadku wyświetlamy formularz logowania
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;