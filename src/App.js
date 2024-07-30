import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserApp from "./Pages/UserApp";
import Routing from "./Routing";
import ShoppingCart from "./ShoppingCart";
import CreateUser from "./Pages/CreateUser";
// import Button from './Button';
// import States from './States';

function App() {
  // const foo = (value) => {
  //   alert(value);
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserApp />} />
          <Route path="/create" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>

      {/* <ShoppingCart /> */}

      {/* <Routing /> */}

      {/* <States /> */}

      {/* <Button btnName={"All"} foo={foo} />
      <Button btnName={"Music"}  foo={foo} />
      <Button btnName={"Cinema"}  foo={foo} />
      <Button btnName={"Sportz"}  foo={foo} />
      <Button btnName={"Books"}  foo={foo} />
      <Button btnName={"Bikes"}  foo={foo} />
      <Button btnName={"Cars"}  foo={foo} />
      <Button btnName={"Movies"}  foo={foo} /> */}
    </div>
  );
}

export default App;

// Hooks -> useState, useReducer, useEffect
