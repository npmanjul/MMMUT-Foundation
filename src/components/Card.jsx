import React from "react";
import "./Cards.css";
import cardImg from '../assets/Home/img9.jpg'

const Card = () => {
  return (
    <>
      <div className="cont">
        <div className="cont_title">
          <h1>MMMUT Foundation</h1>
          <div className="card_horizontal_line"></div>
        </div>
        <div className="cont_base">
          <div className="cont_img">
            <img src={cardImg} alt="Card_Img" />
          </div>
          <div className="cont_txt">
            <p>
              <span className="cont_txt_bold">MMMUT FOUNDATION</span> a Section-8
              company as per The Companies Act-2013 having its registered office
              at Madan Mohan Malaviya University of Technology, Gorakhpur,Uttar Pradesh, was opened to incubate startups of
              MMMUT students, alumni, faculty of MMMUT, any other incubatee under
              the guidelines of Uttar Pradesh Government at MMMUT for two years with seed
              money (funding) from the MMMUT Foundation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
