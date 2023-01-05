import React from "react";
import './Contactuscontent.scss';
import locationicon from "../Contactuscontent/contactusicon1.png";
import phoneicon from "../Contactuscontent/contactusicon2.png";

const Contactuscontent = () => {
    return (
        <div className="contactuscontent">
            <div className="contactuscontent-heading">CONTACT US</div>
            <div className="contactuscontent-heading-ul"><hr /></div>
            <div className="contactuscontent-colums">
                <div className="contactuscontent-colum1">
                    <img src={locationicon} alt="locationicon" />
                    <div className="contactuscontent-colum1-heading">USA ADRESS</div>
                    <div className="contactuscontent-colum1-text">Unicorn Technologies
                        4080 MCGinnis ferry Rd, Suite 1305,
                        Alpharetta, GA 30005
                    </div>
                </div>
                <div className="contactuscontent-colum2">
                    <img src={locationicon} alt="locationicon" />
                    <div className="contactuscontent-colum1-heading">INDIA ADRESS</div>
                    <div className="contactuscontent-colum1-text">Unicorn IT resources Pvt Ltd
                        IT Hub, Yellandu Cross Road,
                        Kaviraj Nagar, Khammam,
                        Telangana 507002
                    </div>
                </div>
                <div className="contactuscontent-colum3">
                    <img src={phoneicon} alt="locationicon" />
                    <div className="contactuscontent-colum1-heading">PHONE NUMBER</div>
                    <div className="contactuscontent-colum1-text">(USA): (855) 844-6880
                    (INDIA): 040-40072327
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactuscontent;