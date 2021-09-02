import React, { useState } from "react";
//useState is a hook

export default function TextForm(props) {
  //Declare & define state variable
  const [text, setText] = useState("");

  // this is not allowed
  //text="new value"

  const handleUpClick = () => {
    console.log("Clicked on handleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Clicked on handleLoClick");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearText = () => {
    console.log("Clicked on handleClearText");
    setText("");
  };

  const handleOnChange = (event) => {
    console.log("Clicked on handleOnChange");
    setText(event.target.value);
  };

  return (
    <div>
      <h1 className={`text-${props.mode === "light" ? "black" : "white"}`}> {props.heading} </h1>
      <div className="mb-3">
        <textarea value={text} className="form-control" id="textbox" rows="8" onChange={handleOnChange}></textarea>
      </div>
      <div className="btn-group">
        <button className="btn btn-primary mx-2" type="button" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" type="button" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" type="button" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div className={`my-3 text-${props.mode === "light" ? "black" : "white"}`}>
        <h1> Your text summary </h1>
        <p>
          
          {text.split(" ").length}
          words and {text.length}
          characters
        </p>
        <p>
          
          Approx {text.split(" ").length * 0.008}
          minutes to read
        </p>
        <h2> Preview </h2> <p> {text} </p>
      </div>
    </div>
  );
}
