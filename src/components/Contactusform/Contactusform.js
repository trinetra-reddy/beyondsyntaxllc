import React from "react";
import './Contactusform.scss';
import icon_1 from "../Contactusform/contactusicon1.png";
import icon_2 from "../Contactusform/contactusicon2.png";

const Contactusform = () => {
    return (
       <div className="contactusform ">
         <div className="contactusform-col1">
            <div className="contactusform-col1-heading">
                <div className="contactusform-col1-heading1">LET'S TALK</div>
                <div className="contactusform-col1-heading2">Call us NOW</div>
            </div>
            <div className="contactusform-col1-wrpr1">
                <img src={icon_1} alt="icon_1" />
                <div className="contactusform-col1-wrpr1-text">
                    <div className="contactusform-col1-wrpr1-text-h">BEYONDSYNTAXLLC</div>
                    <div className="contactusform-col1-wrpr1-text-h">support@beyondsyntaxllc</div>
                </div>
            </div>
            <div className="contactusform-col1-wrpr1">
                <img src={icon_1} alt="icon_1" />
                <div className="contactusform-col1-wrpr1-text">
                    <div className="contactusform-col1-wrpr1-text-h">Phone:</div>
                    <div className="contactusform-col1-wrpr1-text-h">+99999999999</div>
                </div>
            </div>
            <div className="contactusform-col1-wrpr1">
                <img src={icon_1} alt="icon_1" />
                <div className="contactusform-col1-wrpr1-text">
                    <div className="contactusform-col1-wrpr1-text-h">Adress</div>
                    <div className="contactusform-col1-wrpr1-text-h">30323, l street, india</div>
                </div>
            </div>
         </div>
         <div className="contactusform-col2"></div>
       </div>
    );
};

export default Contactusform ;