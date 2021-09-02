// import './App.css';

import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import mrBean from "./mr-bean.gif";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

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
      <NavBar title="TextUtils" homeText="Home1" mode={mode} setMode={handleStyle} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter text to evaluate" mode={mode} showAlert={showAlert}/>
      </div>
      <div className="container-sm">
        <img className="img-thumbnail" src={mrBean} alt="loading..." width="20%"></img>
      </div>
    </>
  );
}

export default App;
