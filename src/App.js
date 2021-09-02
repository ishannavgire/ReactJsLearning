// import './App.css';

import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import mrBean from "./mr-bean.gif";
import React, { useState } from "react";
import Alert from "./components/Alert";
import ColorPicker from "./components/ColorPicker";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("white");

  const handleStyle = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "grey";
      setMode("dark");
      showAlert("Dark mode enabled", "success");
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
      showAlert("Light mode enabled", "success");
    }
  };

  const applyColor = (colorName) => {
    console.log(colorName);
    setColor(colorName);
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    //can return only one tag
    // if multiple tags then use JSX fragment  => <> </>
    <>
      <NavBar title="TextUtils" homeText="Home1" mode={mode} setMode={handleStyle} applyColor={applyColor} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter text to evaluate" mode={mode} showAlert={showAlert} color={color}/>
      </div>
      <div className="container-sm">
        <img className="img-thumbnail" src={mrBean} alt="loading..." width="20%"></img>
      </div>
    </>
  );
}

export default App;
