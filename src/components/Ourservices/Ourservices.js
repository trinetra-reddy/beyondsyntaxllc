import React from "react";
import './Ourservices.scss';
import ourservicesimg_1 from "../Ourservices/ourservicesimg_1.jpg";
import ourservicesimg_2 from "../Ourservices/ourservicesimg_2.jpg";
import ourservicesimg_3 from "../Ourservices/ourservicesimg_3.jpg";



const Ourservices = () => {
    return (
        <div className="ourservices">
            <div className="ourservices-heading">
                 Our Services
                 <div className="ourservices-heading-underline">
                      <hr/>
                 </div>
            </div>
            <div className="ourservices-container-main">
                <div className="ourservices-container">
                    <img src={ourservicesimg_1}  alt="ourserviceimg_1" />
                    <div className="ourservices-content">
                        <h1>IT Staffing</h1>
                        <p>lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type  </p>
                        <button>VIEW MORE</button>
                    </div>
                </div>
                <div className="ourservices-container">
                    <img src={ourservicesimg_2}  alt="ourserviceimg_2" />
                    <div className="ourservices-content">
                        <h1>Data & Infrastructure</h1>
                        <p>lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type  </p>
                        <button>VIEW MORE</button>
                    </div>
                </div>
                <div className="ourservices-container">
                    <img src={ourservicesimg_3}  alt="ourserviceimg_3" />
                    <div className="ourservices-content">
                        <h1>Enterprise CMS</h1>
                        <p>lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type  </p>
                        <button>VIEW MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourservices;