import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

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
          <img src="img/mmmut_logo.png" alt="NSUT IIF Logo" />
        </div>

        <div className="Nav_txt">
          <h1>MADAN MOHAN MALAVIYA UNIVERSITY OF TECHNOLOGY</h1>
          <h2>
            मदन मोहन मालवीय प्रौद्योगिकी विश्वविद्यालय, गोरखपुर, उत्तर प्रदेश
          </h2>
          <h3>MMMUT FOUNDATION</h3>
        </div>
        <div className="Nav_img">
          <img src="img/logo.png" alt="NSUT Logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>

      <div
        className={`Nav_link ${menuOpen ? "menu-open" : ""}`}
        ref={navbarRef}
      >
        <div className="links">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/startup" onClick={toggleMenu}>Startup</Link>
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
          <Link to="/apply" onClick={toggleMenu}>Apply</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
