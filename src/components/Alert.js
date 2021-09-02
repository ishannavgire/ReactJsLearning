import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div>
          <div className={`alert alert-primary alert-${props.alert.type}`} role="alert" id="liveAlert">
            <strong>{props.alert.msg}</strong>
          </div>
        </div>
      )}
    </div>
  );
}
