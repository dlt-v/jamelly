import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import WelcomeSite from "../pages/WelcomeSite";
import Notebook from "../pages/Notebook";
import Settings from "../pages/Settings";
import Tasks from "../pages/Tasks";

import { AnimatePresence } from "framer-motion";
import LoginForm from "./LoginForm";

function AnimatedRoutes({ token, user }) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<WelcomeSite />}></Route>
        <Route
          path="/Notebook"
          element={<Notebook token={token} user={user} />}
        ></Route>
        <Route path="/Tasks" element={<Tasks token={token} />}></Route>
        <Route
          path="/Settings"
          element={<Settings token={token} user={user} />}
        ></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
