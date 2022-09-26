import React, { useState } from "react";
import About from "./About";
import Alert from "./Alert";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");
  const [showAlert, setShowAlert] = useState(null);

  // function for set an alert
  const showAlertHandler = (message, type) => {
    setShowAlert({
      msg: message,
      alertType: type,
    });

    setTimeout(() => {
      setShowAlert(null);
    }, 1000);
  };

  const toggleModeHandler = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#222222";
      showAlertHandler("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlertHandler("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="TextMonkey" mode={mode} toggleMode={toggleModeHandler} />
      <Alert alert={showAlert} />
      <div className="my-3">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text below for transformation"
                toggleMode={mode}
                alertShow={showAlertHandler}
              />
            }
          />
          <Route exact path="/about" element={<About toggleMode={mode} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
