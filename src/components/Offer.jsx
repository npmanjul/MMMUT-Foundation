import React from "react";

const achievements = [
  {
    id: 1,
    image: "imgy/mortarboard.png",

    text: "MentorShip from Industry Expert",
  },
  {
    id: 2,
    image: "imgy/finance.png",

    text: "Financial Assistance",
  },
  {
    id: 3,
    image: "imgy/consultation.png",

    text: "Acdemic Support",
  },
  {
    id: 4,
    image: "imgy/networking.png",

    text: "Netwroking & Outreach",
  },
  {
    id: 5,
    image: "imgy/cloud.png",

    text: "High End Tech Support",
  },
  {
    id: 6,
    image: "imgy/experience.png",

    text: "Hands on Learning Experince",
  },
];

const Offer = () => {
  return (
    <div>
      <div className="achieve">
        <div className="achieve_title">
          <h1>WHAT WE OFFER </h1>
        </div>
        <div className="achieve_icons">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="icon icony">
              <img src={achievement.image} alt="" />
              <div className="txt">
            <h3>{achievement.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
