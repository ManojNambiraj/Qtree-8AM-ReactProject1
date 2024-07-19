import React, { useState } from "react";
import "./States.css";

function States() {
  const [state, setState] = useState(0);
  const [color, setColor] = useState("green");

  const handleLike = () => {
    setState(state + 1);
    setColor("green");
  };

  const handleDisLike = () => {
    setState(state - 1);
    setColor("red");
  };

  return (
    <div className="like_container" style={{ backgroundColor: color }}>
      <button onClick={handleLike}>Like 👍</button>
      {state}
      <button onClick={handleDisLike}>Dislike 👎</button>
    </div>
  );
}

export default States;
