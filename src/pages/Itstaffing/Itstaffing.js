import React from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  Header,
  BannerComponent,
  ImageTextComponent,
  TextComponent,
  ItStaffingStreamsWrapper,
  StaffingSolutions,
  ItStaffingOutSourcing
} from "../../components";
import { CONSTANTS } from "../../utils/constants";
import "./Itstaffing.scss";
import image from "../../images/itstaffing_jobsearch.jpg";

const description =
  "Time-tested, fool proof and result-oriented solutions in the core domain of IT Staffing. A committed and skilled team of IT Staffing specialists who are ready to serve you in a profitable manner.";
const text =
  "Beyond Syntax LLC is founded to serve its customers with a core set of values. These core values guide our actions as we engage with our customers, employees, partners, and all whom we serve. We believe strongly in the value of high-quality processes to deliver consistent results, and a continuous improvement process to ensure we can be nimble and adopt quickly to technology, industry and market change. Our areas of specialization include Technical Staffing, Training to the Employees, Application Development, Business Strategy, Human Resources and Talent Acquisition, Information Technology, and Technical Support.";

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
      <ItStaffingStreamsWrapper />
      <StaffingSolutions />
      <ItStaffingOutSourcing />
      <Footer />
    </div>
  );
};

export default Itstaffing;
