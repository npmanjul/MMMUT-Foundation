import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <div className="Nav">
      <div className="Nav_marquee">
          <marquee behavior="sliding" direction="left">
            NEW SERVICES OPEN SOON
          </marquee>
        </div>
        <div className="Nav_contact">
          <div className="connect">
            <a href="connect.nsutiif@nsut.ac.in">connect.nsutiif@nsut.ac.in</a>
            <a href="support.nsutiif@nsut.ac.in">support.nsutiif@nsut.ac.in</a>
            <a href="+919987878689">+919987878689</a>
          </div>
          <div className="Nav_social">
            <a href="https://www.facebook.com/nsutiif">
              <img
                src="https://www.pngmart.com/files/23/Black-Facebook-Logo-PNG-Clipart.png"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/nsutiif/">
              <img
                src="https://www.pngmart.com/files/23/Black-Facebook-Logo-PNG-Clipart.png"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/company/nsutiif/">
              <img
                src="https://www.pngmart.com/files/23/Black-Facebook-Logo-PNG-Clipart.png"
                alt=""
              />
            </a>
            <a href="https://twitter.com/nsutiif">
              <img
                src="https://www.pngmart.com/files/23/Black-Facebook-Logo-PNG-Clipart.png"
                alt=""
              />
            </a>

          </div>
        </div>
        <div className="Nav_mid">
          <div className="Nav_img">
              <img
                src="https://th.bing.com/th/id/R.03d002c0c9cce38e728151b3e44ef9d3?rik=GvxKdgfBtY%2bB9A&riu=http%3a%2f%2fwww.nsut.ac.in%2fnsutiif%2fimg%2fnsutiif_logo.jpeg&ehk=pH%2bsFwDKUzZc%2b%2fShSub5B%2bnsPayqF7r7xZCweSF9U%2bw%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Netaji_Subhas_University_of_Technology.svg/640px-Netaji_Subhas_University_of_Technology.svg.png"
              alt=""
            />
          </div>

          <div className="Nav_txt">
            <h1>NETAJI SUBHAS UNIVERSITY OF TECHNOLOGY</h1>
            <h2>Incubation and Innovation Foundation</h2>
            <h4>Azad Hind Fauj Marg, Sector-3, Dwarka, New Delhi-110078</h4>
          </div>
        </div>
        
        <div className="Nav_link">
          <Link to="/">Home</Link>
          <Link to="/startup">Startup</Link>
          <Link to="/about">AboutUs</Link>
          <Link to="/apply">Apply</Link>
          <Link to="/contact">ContactUs</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
