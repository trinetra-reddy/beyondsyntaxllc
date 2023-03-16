import React from "react";
import './Itstaffingbanner.scss';
import itstaffingbannerimage from "../../images/itstaffingbannerimg.jpg";
import itstaffingbannerimage1 from "../../images/itstaffing_banner.jpg";

const Itstaffingbanner = () => {
    return (
            <div className="itstaffingbanner-imgwrapper">
                <img src={itstaffingbannerimage1} alt="itstaffingbannerimage" />
                <div className="itstaffingbanner-imgwrapper-text">
                    <div className="itstaffingbanner-imgwrapper-heading">IT Staffing</div>
                    <div className="itstaffingbanner-imgwrapper-paragraph">Time-tested, fool proof and result-oriented solutions in the core domain of IT Staffing. A committed and skilled team of IT Staffing specialists who are ready to serve you in a profitable manner.</div>
                </div>
            </div>
    );
};

export default Itstaffingbanner;