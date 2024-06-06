import React from "react";

import Card from "../common/Card";
const achievements = [
  {
    id: 1,
    image: "imgy/mortarboard.png",
    heading:"ok",
    text: "MentorShip from Industry Expert",
  },
  {
    id: 2,
    image: "imgy/finance.png",
    heading:"ok",
    text: "Financial Assistance",
  },
  {
    id: 3,
    image: "imgy/consultation.png",
    heading:"ok",
    text: "Acdemic Support",
  },
  {
    id: 4,
    image: "imgy/networking.png",
    heading:"ok",
    text: "Netwroking & Outreach",
  },
  {
    id: 5,
    image: "imgy/cloud.png",
    heading:"ok",

    text: "High End Tech Support",
  },
  {
    id: 6,
    image: "imgy/experience.png",
    heading:"ok",
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
          {achievements.map((data) => (
            <Card 
            key={data.id} 
              image={data.image} 
              heading={data.heading} 
              text={data.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
