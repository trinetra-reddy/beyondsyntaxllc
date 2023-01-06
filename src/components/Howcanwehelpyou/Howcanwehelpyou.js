import React from "react";
import './Howcanwehelpyou.scss';
import image from "../Howcanwehelpyou/howcanwehelpyouimg.png";

const Howcanwehelpyou = () => {
    return (
      <div className="howcanwehelpyou">
        <div className="howcanwehelpyou-content">
            <div className="howcanwehelpyou-content-heading">
                How can we help you ?
            </div>
            <div className="howcanwehelpyou-content-paragraph">
            lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type lorem is simply 
            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type  
            lorem is simply dummy text of  
            </div>
        </div>
        <div className="howcanwehelpyou-image">
            <img src={image} alt="image" />
        </div>
      </div>
    );
};

export default Howcanwehelpyou;