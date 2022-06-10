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

function AnimatedRoutes({token}) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<WelcomeSite />}></Route>
        <Route path="/Notebook" element={<Notebook />}></Route>
        <Route path="/Tasks" element={<Tasks token={token}/>}></Route>
        <Route path="/Settings" element={<Settings />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
