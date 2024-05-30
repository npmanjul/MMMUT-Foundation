import React from "react";
import './archieve.css';

import startup from '../assets/startup.png';
import Entrepreneur from '../assets/Entrepreneur.png';
import Funding from '../assets/funding.png';
import Jobcreation from '../assets/job creation.png';
import Graduated from '../assets/graduate.png';
import valuation from '../assets/valuation.png'

const achievements = [
  {
    id: 1,
    image: startup,
    number: "45+",
    text: "Startup Incubated",
  },
  {
    id: 2,
    image: Entrepreneur,
    number: "500+",
    text: "Entrepreneur Engaged",
  },
  {
    id: 3,
    image: Funding,
    number: "18Cr+",
    text: "Fund Raised",
  },
  {
    id: 4,
    image: Jobcreation ,
    number: "150+",
    text: "Job Created",
  },
  {
    id: 5,
    image: Graduated,
    number: "12+",
    text: "Graduated",
  },
  {
    id: 6,
    image: valuation,
    number: "50Cr+",
    text: "Valuation",
  },
];

const Achieve = () => {
  return (
    <div>
      <div className="achieve">
        <div className="achieve_title">
          <h1>OUR ACHIEVEMENTS</h1>
        </div>
        <div className="achieve_icons">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="icon">
              <img src={achievement.image} alt="icon" />
              <div className="txt">
                <h2>{achievement.number}</h2>
                <h3>{achievement.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achieve;
