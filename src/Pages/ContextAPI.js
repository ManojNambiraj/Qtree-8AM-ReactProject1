import React, { createContext } from "react";
import Component1 from "../Components/Component1";

export const StudentContext = createContext();

function ContextAPI() {

    const userName = "siva";

  return (
    <StudentContext.Provider value={userName}>
      <div>
        <h1>Hi... Good Morning...! {userName}</h1>

        <Component1 />
      </div>
    </StudentContext.Provider>
  );
}

export default ContextAPI;
