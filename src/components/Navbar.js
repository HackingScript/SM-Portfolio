import React, { useState } from "react";
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import icon from './images/sm_logo.png';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  

  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
      <a className="navbar-brand" href="/">
      <img src={icon} alt="" width="30" height="24"/>
      SM
    </a>
      </div>
      <div className="navbar-menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className={`fas fa-bars ${isOpen ? "open" : ""}`}></i>
      </div>
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li className="navbar-menu-item">
          <a href="#Home">HOME</a>
        </li>
        <li className="navbar-menu-item">
          <a href="#Skills">SKILLS</a>
        </li>
        <li className="navbar-menu-item">
          <a href="#Projects">PROJECTS</a>
        </li>
        <li className="navbar-menu-item dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <a href="#Home" style={{cursor:'pointer'}}>MORE <FontAwesomeIcon icon={faCaretDown} size="xs"/></a>
          <ul className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
            <li className="dropdown-menu-item">
              <a href="#About">ABOUT ME</a>
            </li>
            <li className="dropdown-menu-item">
              <a href="#Contact">CONTACT</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
