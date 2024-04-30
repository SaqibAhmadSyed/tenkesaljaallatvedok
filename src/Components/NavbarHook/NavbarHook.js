import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu, IoChevronDown } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from 'react-i18next';
import "./NavbarHook.css";

const NavbarHook = () => {
  // State to manage the open/close state of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Media query to determine if the device is mobile
  const isMobile = useMediaQuery({ maxWidth: "1080px" });

  // useTranslation hook
  const { t, i18n } = useTranslation();

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      // Disable scrolling when the mobile menu is open
      document.body.classList.add('overflow-hidden');
    } else {
      // Enable scrolling when the mobile menu is closed
      document.body.classList.remove('overflow-hidden');
    }
  };
  
  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
      // Remove overflow-hidden class to re-enable scrolling
      document.body.classList.remove('overflow-hidden');
    }
  };
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to toggle between English and Hungarian
  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'hu' : 'en'; // Toggle between 'en' and 'hu'
    i18n.changeLanguage(newLanguage); // Change language
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
            {t('nav.home')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            {t('nav.about')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/adopt"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            {t('nav.adopt')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/happy-stories"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            {t('nav.happyStories')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/in-memoriam"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            {t('nav.inMemoriam')}
          </NavLink>
        </li>
        <li
          className="dropdown"
          onClick={isMobile ? toggleDropdown : undefined}
        >
          <div className={linkClassName}>
            {t('nav.getInvolved')}<IoChevronDown className="icon" />
          </div>
          <div
            className={`dropdown-content ${isDropdownOpen && isMobile ? "show-dropdown" : ""
              }`}
          >
            <NavLink
              to="/volunteer"
              className={linkClassName}
              onClick={closeMobileMenu}
            >
              {t('nav.volunteer')}
            </NavLink>
            <NavLink
              to="/become-a-foster-home"
              className={linkClassName}
              onClick={closeMobileMenu}
            >
              {t('nav.becomeFosterHome')}
            </NavLink>
          </div>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            {t('nav.contact')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/donate"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            {t('nav.donate')}
          </NavLink>
        </li>
        {/* Language button */}
        <li>
          <NavLink
            className={buttonClassName}
            onClick={toggleLanguage}>
            {i18n.language === 'en' ? t('Hungarian') : t('English')}
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <header className="header">
      <div className="topbar">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/" className="nav__logo">
            <img
              src="../img/logo.jpg"
              alt="Navigation Logo"
            />
            <p className="nav__logo__title">{t('nav.logoTitle1')} <br /> {t('nav.logoTitle2')} </p>
          </NavLink></div>
        {/* Toggle menu icon for mobile */}
        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu style={{ color: 'white' }} />
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
              <IoClose style={{ color: 'white' }} />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </div>
    </header>
  );
};

export default NavbarHook;