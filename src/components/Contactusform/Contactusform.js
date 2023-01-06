import React from "react";
import './Contactusform.scss';
import icon_1 from "../Contactusform/contactusicon3.png";
import icon_2 from "../Contactusform/contactusicon2.png";
import icon_3 from "../Contactusform/contactusicon1.png";

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
                        <div className="contactusform-col1-wrpr1-text-p">support@beyondsyntaxllc</div>
                    </div>
                </div>
                <div className="contactusform-col1-wrpr1">
                    <img src={icon_2} alt="icon_1" />
                    <div className="contactusform-col1-wrpr1-text">
                        <div className="contactusform-col1-wrpr1-text-h">Phone:</div>
                        <div className="contactusform-col1-wrpr1-text-p">+99999999999</div>
                    </div>
                </div>
                <div className="contactusform-col1-wrpr1">
                    <img src={icon_3} alt="icon_1" />
                    <div className="contactusform-col1-wrpr1-text">
                        <div className="contactusform-col1-wrpr1-text-h">Adress</div>
                        <div className="contactusform-col1-wrpr1-text-p">30323, l street, india</div>
                    </div>
                </div>
            </div>
            <div className="contactusform-col2">
                <div className="contactusform-col2-input">
                    <input
                        className="g-contactus-inputs"
                        id="name"
                        placeholder="Full Name"
                        name="name"
                        type="text"
                    ></input>
                </div>
                <div className="contactusform-col2-input">
                    <input
                        className="g-contactus-inputs"
                        id="name"
                        placeholder="E-mail"
                        name="name"
                        type="text"
                    ></input>
                </div>
                <div className="contactusform-col2-input">
                    <input
                        className="g-contactus-inputs"
                        id="name"
                        placeholder="Phone Number"
                        name="name"
                        type="text"
                    ></input>
                </div>
                <div className="contactusform-col2-input">
                    <input
                        className="g-contactus-inputs"
                        id="name"
                        placeholder="Your Message Here"
                        name="name"
                        type="text"
                    ></input>
                </div>
                <div className="g-contactus-button-wrapper">
                  <button className="g-contactus-button" type="submit">SUBMIT
                  </button>
                </div>
            </div>
        </div>
    );
};

export default Contactusform;