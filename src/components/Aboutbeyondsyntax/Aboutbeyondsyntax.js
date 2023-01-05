import React from "react";
import './Aboutbeyondsyntax.scss';
import backgroundimg from "../Aboutbeyondsyntax/aboutbeyondbackgroundimage.jpg";

const Aboutbeyondsyntax = () => {
    return (
        <div className="aboutbeyondsyntax">
            <img src={backgroundimg} alt="backgroundimage" />
            <div className="aboutbeyondsyntax-content">
                <h2>About BeyondSyntaxllc.com</h2>
                <p>lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type  </p>
                <button>VIEW DETAILS</button>
            </div>
        </div>
    );
};

export default Aboutbeyondsyntax;