import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';
import Logo from '../../images/logo.png';

const Header = () => {
    return (
        <header>
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src={Logo} alt="Logo"/>
          </Link>
          <div className="navlink">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/it-staffing">IT Staffing</Link></li>
                <li><Link to="/contact-us">Contact us</Link></li>
            </ul>
          </div>
        </nav>
      </header>
   
    );
};

export default Header;