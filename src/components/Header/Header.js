import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
    return (
        <header>
        <nav className="navbar">
          <a href="header.html" className="logo">BEYONDSYNTAXLLC.COM</a>
          <div className="navlink">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/it-staffing">It Staffing</Link></li>
                <li><Link to="/contact-us">Contact us</Link></li>
            </ul>
          </div>
        </nav>
      </header>
   
    );
};

export default Header;