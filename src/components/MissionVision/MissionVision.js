import React from "react";
import "./MissionVision.scss";
import visionmissionicon1 from "../../images/visionmissionicon1.png";
import visionmissionicon2 from "../../images/visionmissionicon2.png";


const MissionVision = () => {
    return (
        <>
            <div className="visionmission-content">
                <div className="vision-mission">
                    <div className="visionmission-column-1">
                        <div className="visionmission-img">
                            <img className="vm-img" src={visionmissionicon1} alt="visionmissionicon1" />
                        </div>
                        <div className="visionmission-heading">VISION</div>
                        <div className="visionmission-paragraph">
                            To be recognized as a leader in offering enterprises with technology solutions and workforce that is efficient and adaptable.
                        </div>
                    </div>
                    <div className="visionmission-column-1">
                        <div className="visionmission-img">
                            <img className="vm-img" src={visionmissionicon2} alt="visionmissionicon2" />
                        </div>
                        <div className="visionmission-heading">MISSION</div>
                        <div className="visionmission-paragraph">
                            BEYONDSYNTAXLLC mission is to provide the highest quality technology solutions services and to do it while being contextual, reliable and with low overall cost. With the utmost quality
                            and consistency, we provide clients with effective solutions making technology an asset for them.
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default MissionVision;