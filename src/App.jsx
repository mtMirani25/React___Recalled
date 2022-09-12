import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

const App = () => {
  return (
    <>
      <Navbar title="Twist" />
      <div className="my-5">
        <TextForm heading="Enter the text below for transformation" />
      </div>
    </>
  );
};

export default App;
