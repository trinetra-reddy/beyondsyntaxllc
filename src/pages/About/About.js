import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header, Aboutbanner, ImageTextComponent, Whypartnerwithus, MissionVision} from "../../components";
import { CONSTANTS } from "../../utils/constants";
import image2 from "../../images/howcanwehelpimg.jpg";
import './About.scss';

const About = () => {
    const text2 = `Beyond Syntax LLC is founded to serve its customers with a core set of values. 
                    These core values guide our actions as we engage with our customers, employees, partners, and 
                    all whom we serve. We believe strongly in the value of high-quality processes to deliver 
                    consistent results, and a continuous improvement process to ensure we can be nimble and adopt 
                    quickly to technology, industry and market change`;
    return (
        <div>
            <Header />
            <Aboutbanner />
            <Whypartnerwithus />
            <MissionVision />
            <ImageTextComponent
                heading="How can we help you ?"
                image={image2}
                description={text2}
                imgposition="right"
            />
            <Footer />
        </div>
    );
};

export default About;