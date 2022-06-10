import LoginForm from "./components/LoginForm";
import AnimatedRoutes from "./components/AnimatedRoutes";

import { BrowserRouter as Router, Link } from "react-router-dom";

import { ReactComponent as Homepageico } from "./icons/homepage-svgrepo-com.svg";
import { ReactComponent as Jamjarico } from "./icons/jam-svgrepo-com.svg";
import { ReactComponent as Notebookico } from "./icons/notebook-svgrepo-com.svg";
import { ReactComponent as Settingsico } from "./icons/settings-svgrepo-com.svg";
import { ReactComponent as Tasksico } from "./icons/tasks-svgrepo-com.svg";

import React, { useEffect, useState } from "react";
var token =""
function App() {
  //Domyślny admin
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
    username: "Admin",
  };


  //pobieramy dane od użytkownika
  const [user, setUser] = useState({ username: "", password: "", token: "", loggedIn: false });
  //jeśli dane są nieprawidłowe, to wyrzucamy mu error
  const [error, setError] = useState("");

  // funkcja logowania
  const Login = async (details) => {
    //if (
    //details.email == adminUser.email &&
    //details.password == adminUser.password
    let isLoggedIn = false;
    const response = await fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        //Accept: "application/json",
      },
      body: JSON.stringify({
        username: details.username,
        password: details.password,
      }),
    }).then(response => response.json())
    .then(data => {token = data.token
    if (token) isLoggedIn = true;
    
    })
    .catch((error) => console.log(error));

    if (isLoggedIn){
        console.log("Logged in!");



        setUser({
          email: details.email,
          password: details.password,
          username: details.username,
          loggedIn: true,
          token: token
        });
        console.log(`User is ${details.username}\nToken is ${token}`);
      } else {
        console.log("Details do not match!");
        setError("Błędne dane");
      }
    
  };
  // ) 

  //funkcja wylogowania
  const Logout = () => {
    setUser({ username: "", password: "", loggedIn: false, token: "" });
  };

  function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }

  function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
      <li className="nav-item">
        <button className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </button>

        {open && props.children}
      </li>
    );
  }

  function DropdownMenu() {
    function DropdownItem(props) {
      return (
        <button className="menu-item">
          <span>{props.leftIcon}</span>
          {props.children}
        </button>
      );
    }

    return (
      <div className="dropdown">
        <Link to="/">
          <DropdownItem leftIcon={<Homepageico />}>Home</DropdownItem>
        </Link>
        <Link to="/Notebook">
          <DropdownItem leftIcon={<Notebookico />}>Notebook</DropdownItem>
        </Link>
        <Link to="/Tasks">
          <DropdownItem leftIcon={<Tasksico />}>Tasks</DropdownItem>
        </Link>
        <Link to="/Settings">
          <DropdownItem leftIcon={<Settingsico />}>Settings</DropdownItem>
        </Link>
      </div>
    );
  }

  useEffect(() => {});

  return (
    <div className="App">
      <Router>
        {user.username != "" ? ( // jeśli pole email nie jest puste
          // wyświetlamy tymczasowo opcję powitania z możliwością wylogowania
          <div className="Welcome">
            <Navbar>
              <NavItem icon={<Jamjarico />}>
                <DropdownMenu />
              </NavItem>
            </Navbar>
              <AnimatedRoutes token={token} />
            <button id="logout" onClick={Logout}>
              Logout
            </button>
          </div>
        ) : (
          //w przeciwnym wypadku wyświetlamy formularz logowania
          <LoginForm Login={Login} error={error} />
        )}
      </Router>
    </div>
  );
}

export default App;
