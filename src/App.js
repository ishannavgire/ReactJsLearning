// import './App.css';

import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import mrBean from "./mr-bean.gif";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("white");

  const handleStyle = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "grey";
      applyColor("grey");
      setMode("dark");
      showAlert("Dark mode enabled", "success");
      // document.title="TextUtils - Dark Mode";
    } else {
      document.body.style.backgroundColor = "white";
      applyColor("white");
      setMode("light");
      showAlert("Light mode enabled", "success");
      // document.title="TextUtils - Light Mode";
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
      {/* <Router>
        <NavBar title="TextUtils" homeText="Home" mode={mode} setMode={handleStyle} applyColor={applyColor} />
        <Alert alert={alert} />

        <Switch>
          <Route exact path="/about">
            <div className="container">
              <About />
            </div>
          </Route>
          <Route exact path="/">
            <div className="container">
              <TextForm heading="Enter text to evaluate" mode={mode} showAlert={showAlert} color={color} />
            </div>
          </Route>
        </Switch>
        <div className="container-sm">
          <img className="img-thumbnail" src={mrBean} alt="loading..." width="20%"></img>
        </div>
      </Router> */}

      <NavBar title="TextUtils" homeText="Home" mode={mode} setMode={handleStyle} applyColor={applyColor} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Try TextUtils - Word counter, character counter, case conversion, upload file" mode={mode} showAlert={showAlert} color={color} />
      </div>
      <div className="container">
        <img className="img-thumbnail" src={mrBean} alt="loading..." width="20%"></img>
      </div>
    </>
  );
}

export default App;
