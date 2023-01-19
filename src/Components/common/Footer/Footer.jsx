import React from "react";
import logo from "./../../../assets/tingpgeLogo.png";
import "./../../../css/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_left">
          <img src={logo} alt="" />
          <p>
            Concevez vos pages sans vous soucier du design avec Ting page. Une
            application conçue dans le but d’aider les jeunes étudiants durant
            leur cursus académique par la génération des pages sans connexion
            internet.
          </p>
        </div>
        <div className="footer_right">
          <div className="title">
            <h4>Liens importants</h4>
            <div className="line"></div>
          </div>
          <div className="links">
            <div className="first">
              <span>
                <Link to="/">Accueil</Link>
              </span>
              <span>
                <Link to="/contact">Contact</Link>
              </span>
              <span>
                <Link to="/about">A propos</Link>
              </span>
            </div>
            <div className="second">
              <span>
                <a href="mailto:aksantibahiga3@gmail.com">Nous accompagner</a>
              </span>
              <span>
                <a href="tel:+243999537410">Faire un don</a>
              </span>
              <span>
                <a href="https://wa.link/uan8yw">Contribuer</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="author">
        <span>marcydesign@2022</span>
      </div>
    </footer>
  );
}

export default Footer;
