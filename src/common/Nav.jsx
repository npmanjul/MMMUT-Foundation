import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const navbarRef = useRef(null);
  const [stickyPosition, setStickyPosition] = useState(0);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (navbar) {
      setStickyPosition(navbar.offsetTop);
    }

    const handleScroll = () => {
      if (window.scrollY > stickyPosition) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stickyPosition]);

  return (
    <div id="navbar" className="Nav" >
      {/* Uncomment this section if you want to display the contact information */}
      {/* <div className="Nav_marquee">
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
      </div> */}
      
      <div className="Nav_mid">
        <div className="Nav_img">
          <img
            src="https://th.bing.com/th/id/R.03d002c0c9cce38e728151b3e44ef9d3?rik=GvxKdgfBtY%2bB9A&riu=http%3a%2f%2fwww.nsut.ac.in%2fnsutiif%2fimg%2fnsutiif_logo.jpeg&ehk=pH%2bsFwDKUzZc%2b%2fShSub5B%2bnsPayqF7r7xZCweSF9U%2bw%3d&risl=&pid=ImgRaw&r=0"
            alt="NSUT IIF Logo"
          />
        </div>

        <div className="Nav_txt">
          <h1>NETAJI SUBHAS UNIVERSITY OF TECHNOLOGY</h1>
          <h3>Incubation and Innovation Foundation</h3>
          <h4>Azad Hind Fauj Marg, Sector-3, Dwarka, New Delhi-110078</h4>
        </div>
        <div className="Nav_img">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Netaji_Subhas_University_of_Technology.svg/640px-Netaji_Subhas_University_of_Technology.svg.png"
            alt="NSUT Logo"
          />
        </div>
      </div>

      <div className="Nav_link menu3" ref={navbarRef}>
        <Link to="/">Home</Link>
        <Link to="/startup">Startup</Link>
        <Link to="/about">About Us</Link>
        <Link to="/apply">Apply</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default Nav;
