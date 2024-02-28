import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import NavbarHook from "./NavbarHook/NavbarHook";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus/Aboutus";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <NavbarHook />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          {/* Define other routes that you need*/}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
