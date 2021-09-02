import React, { useState } from "react";

export default function ColorPicker(props) {
  const paintColor = (event) => {
    props.applyColor(event.target.value);
    document.body.style.backgroundColor = event.target.value;
  };

  return (
    <div>
      <div className="btn-group hidden" role="group" aria-label="Basic radio toggle button group">
        <input type="color" name="btnradio" id="btnradio1" value={`#003366`} onChange={paintColor} onClick={paintColor} />
        <input type="color" name="btnradio" id="btnradio1" value={`#3d1010`} onChange={paintColor} onClick={paintColor} />
        <input type="color" name="btnradio" id="btnradio1" value={`#1a3300`} onChange={paintColor} onClick={paintColor} />
      </div>
    </div>
  );
}
