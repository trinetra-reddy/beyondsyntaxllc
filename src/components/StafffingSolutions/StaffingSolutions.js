import React from "react";
import "./StaffingSolutions.scss";
import icon1 from "../../images/weoffericon1.png";
import icon2 from "../../images/weoffericon2.png";
import icon3 from "../../images/weoffericon3.png";
import StaffingTypes from "./StaffingTypes";
const desc1 =
  "Here we permanently place the candidate at the client’s place. Permanent Staffing is where a candidate is employed for a full-time position";
const StaffingSolutions = (props) => {
  return (
    <>
      <div className="StaffingSolutions-container">
        <div className="StaffingSolutions-header">
          <h1>
            We 0ffer Staffing Solutions in Three Modes Which Are As Follows:
          </h1>
        </div>
        <div className="StaffingSolutions-cards">
          <StaffingTypes
            icon={icon1}
            title="Permanent Staffing"
            description={desc1}
          />
          <StaffingTypes
            icon={icon2}
            title="Temporary Staffing"
            description={desc1}
          />
          <StaffingTypes
            icon={icon3}
            title="Contract Staffing"
            description={desc1}
          />
        </div>
      </div>
    </>
  );
};

export default StaffingSolutions;
