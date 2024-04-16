import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavbarHook from "./Components/NavbarHook/NavbarHook";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus";
import InMemoriam from "./pages/Memoriam";
import Footer from "./Components/Footer/Footer";
import FosterHome from "./pages/FosterHome";
import Donate from "./pages/Donate";
import DonateToUs from "./pages/DonateToUs";
import Title from "./Components/Title";
import { useTranslation } from 'react-i18next';
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";

const getCurrentImagePath = (pathname) => {
  switch (pathname) {
    case "/about-us":
      return { imagePath: "../img/about-us.jpg", titleKey: "about.title" };
    case "/become-a-foster-home":
      return { imagePath: "../img/foster.jpg", titleKey: "foster.title" };
    case "/volunteer":
      return { imagePath: "../img/volunteer.jpg", titleKey: "volunteer.title" };
    case "/donating-items-to-us":
      return { imagePath: "../img/donate-to-us.jpg", titleKey: "donate-to-us.title" };
    case "/contact":
      return { imagePath: "../img/contact.png", titleKey: "contact.title" };
    case "/donate":
      return { imagePath: "../img/donate.png", titleKey: "donate.title" };
    default:
      return { imagePath: "../img/home.jpg", titleKey: "home.title" };
  }
};

const TitleWithLocation = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { imagePath, titleKey } = getCurrentImagePath(location.pathname);

  return (
    <Title title={t(titleKey)} imagePath={imagePath} />
  );
};

const App = () => {
  return (
    <Router>
      <NavbarHook />
      <main className="main-content">
        <TitleWithLocation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/in-memoriam" element={<InMemoriam />} />
          <Route path="/become-a-foster-home" element={<FosterHome />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donating-items-to-us" element={<DonateToUs />} />
          {/* Define other routes that you need*/}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
