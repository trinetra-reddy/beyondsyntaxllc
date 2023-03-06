import React from "react";
import "./BannerComponent.scss";
const BannerComponent = (props) => {
  return (
    <>
      <div className={`banner-container ${props.image}`}>
        <div className="banner-heading">
          <h1>{props.heading}</h1>
        </div>
        <div className="banner-desc">
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
};
export default BannerComponent;
