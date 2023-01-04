import React from "react";
import './Imagecarousel.scss';
import image_1 from "../Imagecarousel/bannerimage_1.jpg";

const Imagecarousel = () => {
    return (
        <div className="Imagecarouse-Wrapper">
            <img className="CarouselImage-1" src={image_1} alt="Carouselimage1" />
        </div>
    );
};

export default Imagecarousel;