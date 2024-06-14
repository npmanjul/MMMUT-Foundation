import React, { useState } from "react";
import "./apply.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="apply">
      <h1>APPLY FOR INCUBATION</h1>
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          <span>Apply here </span>
          <span className={`status ${isOpen ? "open" : ""}`}>Open</span>
          <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
        </div>
        {isOpen && (
          <div className="dropdown-content">
            <ul>
              <li>Event Date: 2024-10-15</li>
              <li>Application Opens: 2024-06-01</li>
              <li>Application Closes: 2024-08-10</li>
            </ul>
            <a href="https://forms.gle/MMJ1H1eX9PowdABq6"><button className="apply-button">Apply</button></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

{
  /* https://forms.gle/MMJ1H1eX9PowdABq6 */
}
