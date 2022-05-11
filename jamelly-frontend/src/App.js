import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import WelcomeSite from "./pages/WelcomeSite";
import Notebook from "./pages/Notebook";
import Settings from "./pages/Settings";
import Tasks from "./pages/Tasks";

import { ReactComponent as Homepageico } from "./icons/homepage-svgrepo-com.svg";
import { ReactComponent as Jamjarico } from "./icons/jam-svgrepo-com.svg";
import { ReactComponent as Notebookico } from "./icons/notebook-svgrepo-com.svg";
import { ReactComponent as Settingsico } from "./icons/settings-svgrepo-com.svg";
import { ReactComponent as Tasksico } from "./icons/tasks-svgrepo-com.svg";

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
          <span classname="icon-button">{props.leftIcon}</span>
          {props.children}
        </button>
      );
    }

    return (
      <div className="dropdown">
        <Link to="/"><DropdownItem leftIcon={<Homepageico />}>Home</DropdownItem></Link>
        <Link to="/Notebook"><DropdownItem leftIcon={<Notebookico />}>Notebook</DropdownItem></Link>
        <Link to="/Tasks"><DropdownItem leftIcon={<Tasksico />}>Tasks</DropdownItem></Link>
        <Link to="/Settings"><DropdownItem leftIcon={<Settingsico />}>Settings</DropdownItem></Link>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        {user.email != "" ? ( // jeśli pole email nie jest puste
          // wyświetlamy tymczasowo opcję powitania z możliwością wylogowania
          <div clasName="Welcome">
            <Navbar>
              <NavItem icon={<Jamjarico />}>
                <DropdownMenu />
              </NavItem>
            </Navbar>
            <Routes>
              <Route exact path="/" element={<WelcomeSite />}></Route>
              <Route path="/Notebook" element={<Notebook />}></Route>
              <Route path="/Tasks" element={<Tasks />}></Route>
              <Route path="/Settings" element={<Settings />}></Route>
            </Routes>
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
