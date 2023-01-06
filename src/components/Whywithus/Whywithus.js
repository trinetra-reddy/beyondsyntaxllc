import React from "react";
import './Whywithus.scss';
import image from "../Whywithus/whyusimg.jpg";

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
                    lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type lorem is simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type lorem is simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of
                </div>
            </div>
        </div>
    );
};

export default Whywithus;