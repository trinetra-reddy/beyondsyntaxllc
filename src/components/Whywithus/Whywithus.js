import React from "react";
import './Whywithus.scss';
<<<<<<< HEAD
import image from "../../images/whyusimg.jpg";
=======
import image from "../../images/whywithusimg.jpg";
>>>>>>> 49da9f71d179afde44913d3939ab41f450684166

const Whywithus = () => {
    return (
        <div className="whywithus">
            <div className="whywithus-image">
                <img src={image} alt="image" />
            </div>
            <div className="whywithus-content">
                <div className="whywithus-content-heading">
                    Why Partner with Us
                </div>
                <div className="whywithus-content-paragraph">
                    Beyond Syntax LLC is a full-service provider of contingent staffing in support of technology solutions for industry leading Enterprise Technology Projects.
                    Our areas of specialization include Technical Staffing, Training to the Employees, Application Development, Business Strategy,
                    Human Resources and Talent Acquisition, Information Technology, and Technical Support.
                </div>
            </div>
        </div>
    );
};

export default Whywithus;