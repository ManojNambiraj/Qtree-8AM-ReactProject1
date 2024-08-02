import React, { useContext } from "react";
import Component4 from "./Component4";
import { StudentContext } from "../Pages/ContextAPI";

function Component3() {
  const value = useContext(StudentContext);

  return (
    <div>
      <h1>It's my Component3  {value}</h1>

      <Component4 />
    </div>
  );
}

export default Component3;
