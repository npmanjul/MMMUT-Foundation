import React, { useState } from "react";
import "./apply.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (

    <>
      <div className='Apply-herosection'>
      Apply Here
    </div>
      <div className="apply-container">
        <div className="Apply-box">
          <div className="apply-heading">
            <div className="apply-heading-box">
              Apply For Incubation
              <div className="heading-line"></div>
            </div>
            <div className="dropdown">
              <div className="dropdown-header" onClick={toggleDropdown}>
                <span className="Apply_here_heading">👉 Apply Here </span>
                {/* <span className={`status ${isOpen ? "open" : ""}`}>Open</span> */}
                <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
              </div>
              {isOpen && (
                <div className="dropdown-content">
                  <ul>
                    <li><span className="dropdown-font">Event Date:</span> 2024-10-15</li>
                    <li><span className="dropdown-font">Application Opens:</span> 2024-06-01</li>
                    <li><span className="dropdown-font">Application Closes:</span> 2024-08-10</li>
                  </ul>
                  <a href="https://forms.gle/MMJ1H1eX9PowdABq6" target="_blank"><button className="apply-button">Apply</button></a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;

{
  /* https://forms.gle/MMJ1H1eX9PowdABq6 */
}
