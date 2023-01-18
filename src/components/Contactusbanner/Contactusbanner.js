import React from "react";
import './Contactusbanner.scss';
import bannerimage from "../../images/contactusbannerimg.jpg";
import bannerimage1 from "../../images/contactus_banner2.jpg";

const Contactusbanner = () => {
    return (
        <div className="contactusbanner">
            <img src={bannerimage1} alt="bannerimage" />
            <div className="contactusbanner-text">
            <div className="contactusbanner-heading">Contact Us</div>
            <div className="contactusbanner-paragraph">We would be pleased to help you solve your queries. For any query, feel free to contact us at the information provided below.</div>
            </div>
        </div>
    );
};

export default Contactusbanner;