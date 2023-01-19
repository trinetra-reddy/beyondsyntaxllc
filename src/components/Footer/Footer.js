import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="column-1">
                <div className="column-1-heading">
                    Contact Us
                </div>
                <div className="column-1-content">
                    <div className="column-1-content-heading">
                        Office address:
                    </div>
                    <div className="column-1-content-paragraph">
                        Beyondsyntaxllc,
                        t Hub, Yellandu Cross Road,
                        Kaviraj Nagar, Khammam,
                        Telangana 507002.

                        Office: 040-40072327
                        Email: info@beyondsyntaxllc.com
                    </div>
                </div>
            </div>
            <div className="column-2">
                <div className="column-2-heading">
                    Solutions  
                </div>
                <div className="column-2-links">
                    <ul>
                        <li>Overview</li>
                        <li> Reference Architecture Solutions</li>
                        <li>Data Management Solutions</li>
                        <li>Cloud Solutions</li>
                        <li>Remote Infrastructure Management</li>
                    </ul>
                </div>
            </div>
            <div className="column-3">
                <div className="column-3-heading">
                    Quick Links 
                </div>
                <div className="column-3-links">
                    <ul className="footer-links">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about-us"><li>About us</li></Link>
                        <Link to="/it-staffing"><li>IT Staffing</li></Link>
                        <Link to="/contact-us"><li>Contact Us</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;