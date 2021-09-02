// import './App.css';

import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import mrBean from "./mr-bean.gif";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const handleStyle = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "grey";
      setMode("dark");
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
    }
  };

  return (
    //can return only one tag
    // if multiple tags then use JSX fragment  => <> </>
    <>
      <NavBar title="TextUtils" homeText="Home1" mode={mode} setMode={handleStyle} />
      <div className="container">
        <TextForm heading="Enter text to evaluate" mode={mode} />
      </div>
      <div className="container-sm">
        <img className="img-thumbnail" src={mrBean} alt="loading..." width="20%"></img>
      </div>
    </>
  );
}

export default App;
