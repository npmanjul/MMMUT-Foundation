import React from "react";

const achievements = [
  {
    id: 1,
    image: "gif/firework.gif",
    number: "45+",
    text: "Startup Incubated",
  },
  {
    id: 2,
    image: "gif/avatar.gif",
    number: "500+",
    text: "Entrepreneur Engaged",
  },
  {
    id: 3,
    image: "gif/savingpig.gif",
    number: "18Cr+",
    text: "Fund Raised",
  },
  {
    id: 4,
    image: "gif/target.gif",
    number: "150+",
    text: "Job Created",
  },
  {
    id: 5,
    image: "gif/book.gif",
    number: "12+",
    text: "Graduated",
  },
  {
    id: 6,
    image: "gif/chart.gif",
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
              <img src={achievement.image} alt="" />
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
