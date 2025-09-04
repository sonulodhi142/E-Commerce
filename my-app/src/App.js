import React from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kid from "./pages/Kid";
import Catagory from "./components/Catagory";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/men" element={<Catagory dataType='men'/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/kid" element={<Kid/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
