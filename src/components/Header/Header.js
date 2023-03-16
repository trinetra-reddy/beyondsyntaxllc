import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss';
import Logo from '../../images/logo.png';
import menu from "../../images/icon-menu.png";
import close from "../../images/icon-close.png";


const Header = () => {

  const onToggleclick = () => {
    const hamburger = document.querySelector('.hamburger');
    const navLink = document.querySelector('.nav__link');
    if (hamburger && navLink) {

      navLink.classList.toggle('hide');
      if (hamburger.classList.contains('expanded')) {
        hamburger.classList.remove('expanded');
      } else {
        hamburger.classList.add('expanded');
      }
    }
  }
  return (
    <header>
      <nav className="navbar">
        <NavLink to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <div className="hamburger" onClick={onToggleclick}>
          <div className="menu">
            <img src={menu} className="menu" alt="hamburger" />
          </div>
          <div className="close">
            <img src={close} className="close" alt="close" />
          </div>
        </div>

        <div className="nav__link hide">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about-us" activeclassname='active'>About us</NavLink>
          <NavLink to="/it-staffing" activeclassname='active'>IT Staffing</NavLink>
          <NavLink to="/contact-us" activeclassname='active'>Contact Us</NavLink>
        </div>
      </nav>
    </header>

  );
};

export default Header;