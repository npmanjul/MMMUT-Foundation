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
            src="img/mmmut_logo.png"
            alt="NSUT IIF Logo"
          />
        </div>

        <div className="Nav_txt">
          <h1>MADAN MOHAN MALAVIYA UNIVERSITY OF TECHNOLOGY</h1>
          <h2>मदन मोहन मालवीय प्रौद्योगिकी विश्वविद्यालय, गोरखपुर, उत्तर प्रदेश</h2>
          <h3>INSTITUTIONS INNOVATION COUNCIL</h3>
          {/* <h6>GORAKHPUR UP INDIA</h6> */}
        </div>
        <div className="Nav_img">
          <img
          src="img/logo.png"
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
