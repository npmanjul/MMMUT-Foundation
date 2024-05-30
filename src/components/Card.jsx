import React from "react";
import "./Cards.css";
const Card = () => {
  return (
    <>
      <div className="cont">
        <div className="cont_title">
          <h1>MMMUT FOUNDATION</h1>
        </div>
        <div className="cont_base">
          <div className="cont_img">
            <img src="/img/img9.jpg" alt="" />
          </div>
          <div className="cont_txt">
            <p>
              <span className="cont_txt_bold">MMMUT FOUNDATION</span> a section 8
              company as per The Companies Act-2013 having its registered office
              at Madan Mohan Malaviya University of Technology, Gorakhpur,Uttar Pradesh, was opened to incubate startups of
              MMMUT students, alumni, faculty of MMMUT, any other incubatee under
              the guidelines of Delhi Government at NSUT for two years with seed
              money (funding) from the MMMUT-IIC.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
