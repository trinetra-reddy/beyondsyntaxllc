import React from "react";
import './Ourtechnologies.scss';
import backgroundimage from "../Ourtechnologies/ourtechnologiesbg.jpg";
import image_1 from "../Ourtechnologies/ourtechnologiesimg_1.jpg";
import image_2 from "../Ourtechnologies/ourtechnologiesimg_2.jpg";
import image_3 from "../Ourtechnologies/ourtechnologiesimg_3.jpg";
import image_4 from "../Ourtechnologies/ourtechnologiesimg_4.jpg";


const Ourtechnologies = () => {
    return (
       <div className="ourtechnologies">
        <div className="ourtechnologies-backgroundwrapper">
            <img src={backgroundimage} alt="backgroundimage" />
        </div>
        <div className="ourtechnologies-contentwrapper">
        <div className="ourtechnologies-heading">
            OUR TECHNOLOGIES
        </div>
        <div className="ourtechnologies-image-wrapper">
            <div className="ourtechnologies-image">
            <img src={image_1}  alt="ourtechnologies-img-1" />
            </div>
            <div className="ourtechnologies-image">
            <img src={image_2}  alt="ourtechnologies-img-2" />
            </div>
            <div className="ourtechnologies-image">
            <img src={image_3}  alt="ourtechnologies-img-3" />
            </div>
            <div className="ourtechnologies-image">
            <img src={image_4}  alt="ourtechnologies-img-4" />
            </div>
        </div>
        <div className="ourtechnologies-button-wrapper">
            <button>MORE TECHNOLOGIES</button>
        </div>
        </div>
       </div>
    );
};

export default Ourtechnologies;