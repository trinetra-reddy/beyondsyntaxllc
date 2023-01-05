import React from "react";
import './Itstaffingcontent.scss';
import itstaffingcontentimg from "../Itstaffingcontent/itstaffingcontentimg.jpg"
import icon1 from "../Itstaffingcontent/itstaffingcontenticon1.png";
import icon2 from "../Itstaffingcontent/itstaffingcontenticon2.png";

const Itstaffingcontent = () => {
    return (
        <div className="itstaffingcontent">
            <div className="itstaffingcontent-1">
                <div className="itstaffingcontent-1-heading">IT STAFFING</div>
                <div className="itstaffingcontent-1-heading-underline"><hr /></div>
                <div className="itstaffingcontent-1-paragraph">For any IT (or) Non IT Business to be highly successful, there is only one way that can guarantee optimum results in terms of both overall growth and profit maximization of that particular business and that is “MANPOWER”.</div>
            </div>
            <div className="itstaffingcontent-2">
                <div className="itstaffingcontent-2-content">
                    <div className="itstaffingcontent-2-content-heading"> How Can We Help You ?</div>
                    <div className="itstaffingcontent-2-content-heading-ul"><hr /></div>
                    <div className="itstaffingcontent-2-content-paragraph">Unicorntek strongly believe in the above statement, and so have taken IT Staffing to an all new level. Yes, we have a dedicated IT staffing department consisting of skilled and experienced IT recruiters,
                        research analysts and Human resources managers. We follow a defined process when it comes to sourcing candidates at our client’s place. Our team of recruiters and research analysts work in a coordinated manner to ensure timely results by providing the exact candidate’s as per the requirement of the client and that too within the defined timeframe.
                        In today’s highly competitive scenario,  sets and qualification within the time frame, as per mentioned by the client.
                    </div>
                </div>
                <div className="itstaffingcontent-2-image">
                    <img src={itstaffingcontentimg} alt="itstaffingcontentimage" />
                </div>
            </div>
            <div className="itstaffingcontent-3">
                <div className="itstaffingcontent-3-col-1">
                    <img src={icon1} alt="itstaffingcontenticon1" />
                    <div className="itstaffingcontent-3-col-1-heading">We provide the candidates in the following streams</div>
                    <div className="itstaffingcontent-3-col-1-paragraph">
                        <ul>
                            <li>Our core service offering is providing IT staff augmentation services that help our clients execute large-scale technology initiatives. We have proven experience in delivering qualified, reliable IT professionals at an unbeatable value.
                                We are the #1 provider of contract</li>
                            <li>IT staffing in niche skill areas across the spectrum of information technology has resulted in hundreds of successful projects in several key areas, including application development, software testing, project management, systems engineering, business intelligence,enterprise architecture and security.</li>
                            <li>Our core service offering is providing IT staff augmentation services that help our clients execute large-scale technology initiatives. We have proven experience in delivering qualified, reliable IT professionals at an unbeatable value.
                                We are the #1 provider of contract</li>
                            <li>IT staffing in niche skill areas across the spectrum of information technology has resulted in hundreds of successful projects in several key areas, including application development, software testing, project management, systems engineering, business intelligence,enterprise architecture and security.</li>
                        </ul> </div>
                </div>
                <div className="itstaffingcontent-3-col-2">
                    <img src={icon2} alt="itstaffingcontenticon2" />
                    <div className="itstaffingcontent-3-col-2-heading">
                        Direct Hire
                        IT Staffing</div>
                    <div className="itstaffingcontent-3-col-2-paragraph">
                        <ul>
                            <li>Our core service offering is providing IT staff augmentation services that help our clients execute large-scale technology initiatives. We have proven experience in delivering qualified, reliable IT professionals at an unbeatable value.
                                We are the #1 provider of contract</li>
                            <li>IT staffing in niche skill areas across the spectrum of information technology has resulted in hundreds of successful projects in several key areas, including application development, software testing, project management, systems engineering, business intelligence,enterprise architecture and security.</li>
                            <li>Our core service offering is providing IT staff augmentation services that help our clients execute large-scale technology initiatives. We have proven experience in delivering qualified, reliable IT professionals at an unbeatable value.
                                We are the #1 provider of contract</li>
                            <li>IT staffing in niche skill areas across the spectrum of information technology has resulted in hundreds of successful projects in several key areas, including application development, software testing, project management, systems engineering, business intelligence,enterprise architecture and security.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Itstaffingcontent;