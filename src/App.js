import React, { useState } from "react";
import SideBar from "./components/sideBar";
import NavBar from "./components/navBar";
import Body from "./components/body";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <NavBar darkMode={darkMode} />

      <div className="d-flex" id="wrapper">
        <SideBar darkMode={darkMode} />
        <Body darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export default App;
