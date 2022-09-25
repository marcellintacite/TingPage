import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import "./../../scss/navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="logo_container">
        <img src={logo} alt="" />
        <span className="logo">page</span>
      </div>
      <div className="logo_items">
        <ul>
          <li>
            <Link to="/">
              <p>Accueil</p> <span className="fa fa-home"></span>
            </Link>
          </li>
          <li>
            <Link to="/apropos">
              <p>A propos</p> <span className="fa fa-book"></span>
            </Link>
          </li>
          <li>
            <a href="tel:+243999537410">
              <p>+243 847 723 092</p> <span className="fa fa-phone"></span>
            </a>
          </li>
          <li>
            <a href="mailto:tacite.bahiga@gmail.com">
              <p>mail</p>
              <span className="fa fa-envelope"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
