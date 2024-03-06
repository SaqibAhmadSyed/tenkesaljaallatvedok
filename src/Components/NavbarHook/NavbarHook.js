import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoClose, IoMenu, IoChevronDown } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./NavbarHook.css";

const NavbarHook = () => {
  // State to manage the open/close state of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Media query to determine if the device is mobile
  const isMobile = useMediaQuery({ maxWidth: "1100px" });

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  // Function to render navigation links
  const renderNavLinks = () => {
    // Determine the class name for the list based on the device type
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";

    return (
      <ul className={listClassName}>
        {/* Navigation links */}
        <li>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            About us
          </NavLink>
        </li>
        {/* Add other navigation links */}
        <li>
          <NavLink
            to="/adopt"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Adopt
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/happy-stories"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Happy Stories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/in-memoriam"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            In Memoriam
          </NavLink>
        </li>
        <li
          className="dropdown"
          onClick={isMobile ? toggleDropdown : undefined}
        >
          <div className={linkClassName}>
            Get Involved<IoChevronDown className="icon" />
          </div>
          <div
            className={`dropdown-content ${
              isDropdownOpen && isMobile ? "show-dropdown" : ""
            }`}
          >
            <NavLink
              to="/volunteer"
              className={linkClassName}
              onClick={closeMobileMenu}
            >
              Volunteer
            </NavLink>
            <NavLink
              to="/become-a-foster-home"
              className={linkClassName}
              onClick={closeMobileMenu}
            >
              Become a Foster Home
            </NavLink>
          </div>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </li>
        {/* Language button */}
        <li>
          <NavLink
            to="/hungarian"
            className={buttonClassName}
            onClick={closeMobileMenu}
          >
            Hungarian
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <header className="header">
      <nav className="nav container">
        {/* Logo */}
        <NavLink to="/" className="nav__logo">
          <img
            src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
            alt="Navigation Logo"
          />
        </NavLink>

        {/* Toggle menu icon for mobile */}
        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}

        {/* Render mobile menu if isMobile is true */}
        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            {/* Close menu icon for mobile */}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          // Render regular navigation links if not mobile
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};

export default NavbarHook;