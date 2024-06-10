import React from "react";
import './archieve.css';
import startup from '../assets/startup.png';
import Entrepreneur from '../assets/Entrepreneur.png';
import Funding from '../assets/funding.png';
import Jobcreation from '../assets/job creation.png';
import Graduated from '../assets/graduate.png';
import valuation from '../assets/valuation.png';
import CountUp from 'react-countup';

const achievements = [
  {
    id: 1,
    image: startup,
    number: 45,
    duration: 5,
    text: "Startup Incubated",
  },
  {
    id: 2,
    image: Entrepreneur,
    number: 500,
    duration: 5,
    text: "Entrepreneur Engaged",
  },
  {
    id: 3,
    image: Funding,
    number: 18,
    duration: 5,
    text: "Fund Raised",
    suffix: " Cr",
  },
  {
    id: 4,
    image: Jobcreation,
    number: 150,
    duration: 5,
    text: "Total Jobs Created",
  },
  {
    id: 5,
    image: Graduated,
    number: 12,
    duration: 5,
    text: "Students Graduated",
  },
  {
    id: 6,
    image: valuation,
    number: 150,
    duration: 5,
    text: "Valuation",
    suffix: " Cr",
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
                <h2>
                  <CountUp
                    end={achievement.number}
                    duration={achievement.duration}
                    suffix={achievement.suffix || ""}
                    enableScrollSpy={true}
                    scrollSpyDelay={500} 
                  />
                  +
                </h2>
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