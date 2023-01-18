import React from "react";
import Navbar from "./../common/Navbar/Navbar";
import Footer from "./../common/Footer/Footer";
import i from "./../../assets/3902638.png";
import u from "./../../assets/female.png";
import "./../../css/about.css";

export default function About() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Navbar />
      <div className="content_about">
        <div className="first">
          <div className="left">
            <div className="title">
              <h2>Présentation</h2>
              <div className="line"></div>
            </div>
            <p>
              Tingpage est une application conçue dans le but d’aider les
              étudiants et élèves ne possédant pas d’ordinateur ou étant en
              urgence de leur générer d’une manière simple et rapide une page de
              garde personnalisée. Tingpage est une application web progressive
              (PWA), c’est-à-dire une fois installée, vous pouvez l’utiliser
              sans méga et voir même l’envoyer à votre ami via xender, etc.
            </p>
          </div>
          <div className="right">
            <div className="container">
              <img src={i} alt="" />
            </div>
          </div>
        </div>
        <div className="second">
          <div className="left">
            <div className="title">
              <h2>Communauté</h2>
              <div className="line"></div>
            </div>
            <p>
              Tingpage est une application conçue par{" "}
              <b>Aksanti Bahiga Tacite</b>, étudiant à l’université Catholique
              de Bukavu et membre du <b>Google Developer Strudents Club UCB</b>{" "}
              qui est un club des étudiants passionnés par la nouvelle
              technologie et qui s’assemblent pour partager leurs connaissances
              et résoudre les problèmes de notre communauté locale grâce à la
              technologie plus particulièrement en utilisant les technologies
              google.
            </p>
            <div className="social">
              <div className="gdsc">
                <h5>Suivez GDSC UCB</h5>
                <div className="icons">
                  <a href="https://twitter.com/gdscucbukavu/">
                    <span className="fa fa-twitter"></span>
                  </a>
                  <a href="https://web.facebook.com/gdscucbukavu/">
                    <span className="fa fa-facebook"></span>
                  </a>
                  <a href="https://www.instagram.com/gdscucbukavu/">
                    <span className="fa fa-instagram"></span>
                  </a>
                </div>
              </div>
              <div className="tacite">
                <h5>Suivez le concépteur</h5>
                <div className="icons">
                  <a href="https://twitter.com/BahigaTacite">
                    <span className="fa fa-twitter"></span>
                  </a>
                  <a href="https://web.facebook.com/marcellin.bt.1">
                    <span className="fa fa-facebook"></span>
                  </a>
                  <a href="https://www.linkedin.com/in/aksanti-bahiga-tacite-42b5981a1/">
                    <span className="fa fa-linkedin"></span>
                  </a>
                  <a href="https://github.com/marcellintacite">
                    <span className="fa fa-github"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="container">
              <img src={u} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
