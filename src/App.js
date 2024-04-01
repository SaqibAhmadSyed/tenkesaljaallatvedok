import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NavbarHook from "./Components/NavbarHook/NavbarHook";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus";
import InMemoriam from "./pages/Memoriam";
import Footer from "./Components/Footer/Footer";
import FosterHome from "./pages/FosterHome";
import Donate from "./pages/Donate";


const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <NavbarHook />
      <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/in-memoriam" element={<InMemoriam />} />
            <Route path="/become-a-foster-home" element={<FosterHome />} />
            <Route path="/donate" element={<Donate />} />
            {/* Define other routes that you need*/}

          </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
