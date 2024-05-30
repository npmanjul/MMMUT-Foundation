import React from "react";
import "./startup.css";

const Startups = () => {
  return (
    <div className="startup">
      <div className="startup_title">STARTUP</div>
      <div className="startupimg">
        <div className="cont_gallery">
          <div className="div">
           <img src="./startup/s2logo.jpg" alt="" id="simg"/>
            <h1>PUSHPAK DRONE VIMAN PVT. LTD.</h1>
          </div>
          <div className="div">
          <img src="./startup/s1logo.jpg" alt="" id="simg"/>
            <h1>PIONEER INFOTECH</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startups;
