import React, { useState } from "react";
//useState is a hook

export default function TextForm(props) {
  //Declare & define state variable
  const [text, setText] = useState("");
  const [clipboard, setClipboard] = useState("");
  const [selectedFile, setselectedFile] = useState(null);

  let fileReader;

  let myStyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.color,
  };

  switch (props.color) {
    case "#003366":
      myStyle = {
        color: "#b3d9ff",
        backgroundColor: props.color,
      };
      break;
    case "#3d1010":
      myStyle = {
        color: "#efc2c2",
        backgroundColor: props.color,
      };
      break;
    case "#1a3300":
      myStyle = {
        color: "#d9ffb3",
        backgroundColor: props.color,
      };
      break;
    default:
      myStyle = {
        color: props.mode === "light" ? "black" : "white",
        backgroundColor: props.color,
      };
  }

  const handleUpClick = () => {
    console.log("Clicked on handleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    console.log("Clicked on handleLoClick");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase", "success");
  };

  const handleClearText = () => {
    console.log("Clicked on handleClearText");
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleCopyText = () => {
    console.log("Clicked on handleCopyText" + text);
    setClipboard(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleOnFileChange = (event) => {
    setselectedFile(event.target.files[0]);
    props.showAlert("File '" + event.target.files[0].name + "' is selected. Please click 'Upload' to load the file in text editor.", "success");
  };

  const handleFileRead = (event) => {
    setText(fileReader.result);
    props.showAlert("File content loaded in text editor.", "success");
  };

  const handleUploadFile = () => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(selectedFile);
  };

  const calculateWords = () => {
    let temp = text,
      count = 0;
    temp.split("\n").forEach((s) => {
      let arr = s.split(" ").filter((t) => t.length > 0);
      count = count + arr.length;
    });
    return count;
  };

  const handleOnChange = (event) => {
    console.log("Clicked on handleOnChange");
    setText(event.target.value);
  };

  return (
    <div>
      {/* <h1 className={`text-${props.mode === "light" ? "black" : "white"}`}> {props.heading} </h1> */}
      <h2 style={myStyle}> {props.heading} </h2>
      <div className="my-3">
        <textarea value={text} className="form-control" id="textbox" rows="8" onChange={handleOnChange}></textarea>
      </div>
      <div className="btn-group my-3">
        <button className="btn btn-primary mx-2" type="button" disabled={text.length===0} onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" type="button" disabled={text.length===0} onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" type="button" disabled={text.length===0} onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" type="button" disabled={text.length===0} onClick={handleCopyText}>
          Copy
        </button>
      </div>
      <div className="input-group my-3 mx-2">
        <input type="file" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" onChange={handleOnFileChange} />
        <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={handleUploadFile}>
          Upload
        </button>
      </div>
      {/* <div className={`my-3 mx-2 text-${props.mode === "light" ? "black" : "white"}`}> */}
      <div style={myStyle}>
        <h1> Your text summary </h1>
        <p>
          {calculateWords()}- words and {text.length}- characters
        </p>
        <p>
          Approx {calculateWords() * 0.008}
          minutes to read
        </p>
        <h2 style={myStyle}> Preview </h2> <p> {text} </p>
      </div>
    </div>
  );
}
