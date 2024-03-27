import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NavbarHook from "./Components/NavbarHook/NavbarHook";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus/Aboutus";
import Footer from "./Components/Footer/Footer";
import Title from "./Components/Title/Title";

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
      <Footer />
    </Router>
  );
};

export default App;
