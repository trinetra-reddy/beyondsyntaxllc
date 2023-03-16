import React from "react";
import "./ItStaffingStreams.scss";
const ItStaffingStreams = (props) => {
  return (
    <>
      <div className="ItStaffingStreams-container">
        <div className={`ItStaffingStreams-icon ${props.img}`}>
          <img src={props.icon} alt="Icon" />
        </div>
        <div className="ItStaffingStreams-header">
          <h1>{props.heading}</h1>
        </div>
        <div className="ItStaffingStreams-context">
          <ul>
            <li>{props.desc1}</li>
            <li>{props.desc2}</li>
            <li>{props.desc3}</li>
            <li>{props.desc4}</li>
            <li className={`ExtraInfo ${props.display}`}>{props.desc5}</li>
            <li className={`ExtraInfo ${props.display}`}>{props.desc6}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ItStaffingStreams;
