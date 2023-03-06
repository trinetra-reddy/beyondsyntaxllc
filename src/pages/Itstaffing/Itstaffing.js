import React from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  Header,
  ImageTextComponent,
  BannerComponent,
  TextComponent,
  Itstaffingcontent,
  RpoMps,
  Weoffer,
  ItStaffingStreams,
} from "../../components";
import { CONSTANTS } from "../../utils/constants";
import "./Itstaffing.scss";
import image from "../../images/itstaffing_jobsearch.jpg";
import icon1 from "../../images/itstaffingcontenticon1.png";
import icon2 from "../../images/itstaffingcontenticon2.png";
const description =
  "Time-tested, fool proof and result-oriented solutions in the core domain of IT Staffing. A committed and skilled team of IT Staffing specialists who are ready to serve you in a profitable manner.";
const text =
  "Beyond Syntax LLC is founded to serve its customers with a core set of values. These core values guide our actions as we engage with our customers, employees, partners, and all whom we serve. We believe strongly in the value of high-quality processes to deliver consistent results, and a continuous improvement process to ensure we can be nimble and adopt quickly to technology, industry and market change. Our areas of specialization include Technical Staffing, Training to the Employees, Application Development, Business Strategy, Human Resources and Talent Acquisition, Information Technology, and Technical Support.";
const desc1 =
  "Our core service offering is providing IT staff augmentation services that help our clients execute large-scale technology initiatives. We have proven experience in delivering qualified, reliable IT professionals at an unbeatable value. We are the #1 provider of contract.";
const desc2 =
  "IT staffing in niche skill areas across the spectrum of information technology has resulted in hundreds of successful projects in several key areas, including application development, software testing, project management, systems engineering, business intelligence,enterprise architecture and security.";
const desc3 =
  "Our core service offering is providing IT staff augmentation services that help our clients execute large-scale technology initiatives. We have proven experience in delivering qualified, reliable IT professionals at an unbeatable value. We are the #1 provider of contract.";
const desc4 =
  "IT staffing in niche skill areas across the spectrum of information technology has resulted in hundreds of successful projects in several key areas, including application development, software testing, project management, systems engineering, business intelligence,enterprise architecture and security.";
const Itstaffing = () => {
  return (
    <div>
      <Header />
      <BannerComponent heading="IT Staffing" desc={description} image="image" />
      <TextComponent
        heading="IT STAFFING"
        description="For any IT (or) Non IT Business to be highly successful, there is only one way that can guarantee optimum results in terms of both overall growth and profit maximization of that particular business and that is “MANPOWER”."
      />
      <ImageTextComponent
        heading="How can we help you ?"
        image={image}
        description={text}
        imgposition="right"
      />
      <div class="Streams">
        <ItStaffingStreams
          icon={icon1}
          heading="We provide the candidates in the following streams"
          desc1={desc1}
          desc2={desc2}
          desc3={desc3}
          desc4={desc4}
        />
        <ItStaffingStreams
          icon={icon2}
          heading="We provide the candidates in the following streams"
          desc1={desc1}
          desc2={desc2}
          desc3={desc3}
          desc4={desc4}
        />
      </div>
      <Itstaffingcontent />
      <Weoffer />
      <RpoMps />
      <Footer />
    </div>
  );
};

export default Itstaffing;
