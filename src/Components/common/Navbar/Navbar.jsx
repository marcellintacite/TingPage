import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../../assets/tingpgeLogo.png";
import "./../../../css/navbar.css";

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <div className="navbar">
      <img src={logo} alt="Logo ting page" />
      <div className="collapse_togle" onClick={() => setActive(!active)}>
        <span className={active ? "fa fa-times" : "fa fa-align-justify"}></span>
      </div>

      <div className={active ? "items active" : "items"}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive && "active"}>
              Accueil
              <div className="line"></div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Design"
              className={({ isActive }) => isActive && "active"}
            >
              Designs
              <div className="line"></div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive && "active"}
            >
              Contacts
              <div className="line"></div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive && "active"}
            >
              A propos
              <div className="line"></div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="right">
        <a href="tel:+243999537420">+243 999 537 410</a>
      </div>
    </div>
  );
}

export default Navbar;
