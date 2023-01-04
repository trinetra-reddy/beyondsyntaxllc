import React from "react";
import './Header.scss';

const Header = () => {
    return (
        <header>
        <nav className="navbar">
          <a href="header.html" className="logo">BEYONDSYNTAXLLC.COM</a>
          <div className="navlink">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">It Staffing</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
          </div>
        </nav>
      </header>
   
    );
};

export default Header;