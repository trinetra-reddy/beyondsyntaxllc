import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header, ImageTextComponent,Imagecarousel, Ourservices, Aboutbeyondsyntax, Whywithus, Howcanwehelpyou, Ourtechnologies, Ourclients } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Home.scss';
import image1 from "../../images/whywithusimg.jpg";
import image2 from "../../images/howcanwehelpimg.jpg";
const text1 = `Beyond Syntax LLC is a full-service provider of contingent staffing in support of technology solutions for industry leading Enterprise Technology Projects.
Our areas of specialization include Technical Staffing, Training to the Employees, Application Development, Business Strategy,
Human Resources and Talent Acquisition, Information Technology, and Technical Support.`;
const text2 = `Beyond Syntax LLC is founded to serve its customers with a core set of values. 
These core values guide our actions as we engage with our customers, employees, partners, and 
all whom we serve. We believe strongly in the value of high-quality processes to deliver 
consistent results, and a continuous improvement process to ensure we can be nimble and adopt 
quickly to technology, industry and market change`;
const Home = () => {
    return (
        <div>
            <Header />
            <Imagecarousel />
            <Ourservices />
            <Aboutbeyondsyntax />
            <ImageTextComponent
        heading="Why Partner With us"
        image={image1}
        description={text1}
      />
      <ImageTextComponent
        heading="How can we help you ?"
        image={image2}
        description={text2}
        imgposition="right"
      />
            <Ourtechnologies />
            {/* <Ourclients /> */}
            <Footer /> 
        </div>
    );
};

export default Home;
