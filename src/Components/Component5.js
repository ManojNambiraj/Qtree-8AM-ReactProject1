import React, { useContext } from "react";
import { StudentContext } from "../Pages/ContextAPI";

function Component5() {
  const value = useContext(StudentContext);
  return (
    <div>
      <h1>It's my Component5 {value}</h1>
    </div>
  );
}

export default Component5;
