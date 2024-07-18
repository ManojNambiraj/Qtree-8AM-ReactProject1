import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.foo(props.btnName);
        }}
        className="btn1"
        // style={{backgroundColor: "red", color: "white"}}
      >
        {props.btnName}
      </button>
    </div>
  );
}

export default Button;
