import React from "react";
import "./StaffingSolutions.scss";
const StaffingTypes = (props) => {
  return (
    <>
      <div className="StaffingTypes-container">
        <div className="StaffingTypes-icon">
          <img src={props.icon}></img>
        </div>
        <div className="StaffingTypes-heading">
          <h1>{props.title}</h1>
        </div>
        <div className="StaffingTypes-description">
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};
export default StaffingTypes;
