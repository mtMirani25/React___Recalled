import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleModeHandler = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <>
      <Navbar title="Twist" mode={mode} toggleMode={toggleModeHandler} />
      <div className="my-5">
        <TextForm heading="Enter the text below for transformation" />
        <About />
      </div>
    </>
  );
};

export default App;
