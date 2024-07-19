import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contacts from "./Pages/Contacts";
import Navbar from "./Components/Navbar";

function Routing() {
  return (
    <BrowserRouter>
        <Navbar />
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
