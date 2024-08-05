import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import mmmutlogo from '../assets/Common/mmmut_logo.png';
import mmmutfoundationlogo from '../assets/Common/logo.png'
import mobilelogo from '../assets/Common/MMMUT foundation mobile logo.png';
import menuline from '../assets/Common/menu-line.png'

const Nav = () => {
  const navbarRef = useRef(null);
  const [stickyPosition, setStickyPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (navbar) {
      setStickyPosition(navbar.offsetTop);

    }

    const handleScroll = () => {
      if (window.innerWidth > 720) {
        if (window.scrollY > stickyPosition) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      } else {
        navbar.classList.remove("sticky");
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 720) {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [stickyPosition]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

  };

  return (
    <div id="navbar" className="Nav">
      <div className="Nav_mid">
        <div className="Nav_img mmmlogo">
        <Link to="/">
        <img src={mmmutfoundationlogo} alt="MMMUT Foundation" />
        </Link>
          
        </div>

        <div className="Nav_txt">
          <h1>Madan Mohan Malaviya University of Technology, Gorakhpur (U.P.) India</h1>
          <h2>मदन मोहन मालवीय प्रौद्योगिकी विश्वविद्यालय, गोरखपुर (उ.प्र.) भारत</h2>
          <h3>MMMUT FOUNDATION</h3>
        </div>
        <div className="Nav_img">
          <a href="http://www.mmmut.ac.in/" target="_blank"><img src={mmmutlogo} alt="MMMUT" /></a>
        </div>

      </div>

      <div className="nav_blank_space">

      </div>

      <div className="mobile_navbar">
        <div className="mobile_navbar_container">
          <div className="mobile_navbar_logo">
          <Link to="/">
            <img src={mobilelogo} />
        </Link>
          </div>
          <div onClick={toggleMenu} className="nav_menu_icon">
            <img src={menuline}/>
          </div>
        </div>
      </div>

      <div
        className={`Nav_link ${menuOpen ? "menu-open" : ""}`}
        ref={navbarRef}
      >
        <div className="links">

          <div className="hamburger cross" onClick={toggleMenu}>
            &#9932;
          </div>

          <Link to="/" onClick={toggleMenu} className="animated-underline-button">Home</Link>
          <Link to="/startup" onClick={toggleMenu} className="animated-underline-button">Startup</Link>
          <Link to="/about" onClick={toggleMenu} className="animated-underline-button">About Us</Link>
          <Link to="/apply" onClick={toggleMenu} className="animated-underline-button">Apply</Link>
          <Link to="/contact" onClick={toggleMenu} className="animated-underline-button">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
