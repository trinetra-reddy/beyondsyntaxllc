import React from "react";
import './Visionmission.scss';
import visionmissionbg from "../Visionmission/ourtechnologiesbg.jpg";

const Visionmission = () => {
    return (
       <div className="visionmission">
          <div className="visionmission-bgwrapper">
            <img src={visionmissionbg} alt="visionmissionbg" />
          </div>
          <div className="visionmission-content">
          <div className="visionmission-column-1">
               <div className="visionmission-column-1-heading">VISION</div>
               <div className="visionmission-column-1-paragraph">
                To be recognized as a leader in offering enterprises with technology solutions and workforce that is efficient and adaptable.
               </div>
           </div>
           <div className="visionmission-column-2">
           <div className="visionmission-column-2-heading">MISSION</div>
               <div className="visionmission-column-2-paragraph">
               BEYONDSYNTAXLLC mission is to provide the highest quality technology solutions services and to do it while being contextual, reliable and with low overall cost. With the utmost quality
                and consistency, we provide clients with effective solutions making technology an asset for them.
               </div>
           </div>
          </div>
       </div>
    );
};

export default Visionmission;