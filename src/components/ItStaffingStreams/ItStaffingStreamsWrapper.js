import React from 'react';
import "./ItStaffingStreams";
import icon1 from "../../images/itstaffingcontenticon1.png";
import icon2 from "../../images/itstaffingcontenticon2.png";
import ItStaffingStreams from './ItStaffingStreams';
const desc1 =
  "Our core service offering is providing IT staff augmentation services that help our clients execute large-scale technology initiatives. We have proven experience in delivering qualified, reliable IT professionals at an unbeatable value. We are the #1 provider of contract.";
const desc2 =
  "IT staffing in niche skill areas across the spectrum of information technology has resulted in hundreds of successful projects in several key areas, including application development, software testing, project management, systems engineering, business intelligence,enterprise architecture and security.";
const desc3 =
  "Our core service offering is providing IT staff augmentation services that help our clients execute large-scale technology initiatives. We have proven experience in delivering qualified, reliable IT professionals at an unbeatable value. We are the #1 provider of contract.";
const desc4 =
  "IT staffing in niche skill areas across the spectrum of information technology has resulted in hundreds of successful projects in several key areas, including application development, software testing, project management, systems engineering, business intelligence,enterprise architecture and security.";
const ItStaffingStreamsWrapper =() =>{
    return (
        <>
     <div class="Streams-container">
        <ItStaffingStreams
          icon={icon1}
          heading="We provide the candidates in the following streams"
          desc1={desc1}
          desc2={desc2}
          desc3={desc3}
          desc4={desc4}
          display="false"
        />
        <ItStaffingStreams
          icon={icon2}
          heading="We provide the candidates in the following streams"
          desc1={desc1}
          desc2={desc2}
          desc3={desc3}
          desc4={desc4}
          display="false"
        />
      </div>
        </>
    )
}
export default ItStaffingStreamsWrapper;