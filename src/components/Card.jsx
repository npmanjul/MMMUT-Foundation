import React from "react";
import "./Cards.css";
const Card = () => {
  return (
    <div>
      <div className="cont">
        <div className="cont_title">
          <h1>NSUT-IIF</h1>
        </div>
        <div className="cont_base">
          <div className="cont_img">
            <img src="/img/homepagepic9.jpg" alt="" />
          </div>
          <div className="cont_txt">
            <p>
              <span className="cont_txt_bold">NSUT INCUBATION & INNOVATION FOUNDATION (NSUT-IIF)</span> a section 8
              company as per The Companies Act-2013 having its registered office
              at Netaji Subhas University of Technology, Azad Hind Fauz Marg,
              Sector 3, Dwarka New Delhi, was opened to incubate startups of
              NSUT students, alumni, faculty of NSUT, any other incubatee under
              the guidelines of Delhi Government at NSUT for two years with seed
              money (funding) from the NSUT-IIF.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
