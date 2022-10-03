import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import "./../../css/home.css";
import illustration from "./../../assets/illustration.png";
import Card from "../common/card/Card";
import cards from "./../../config/cards";
import Footer from "../common/Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <header>
          <img src={illustration} alt="" />
          <div className="text_container">
            <p>
              Meilleure plateforme pour la conception de vos différentes pages
              sans vous soucier du design.{" "}
            </p>
            <Link to="/about">Apprendre plus</Link>
          </div>
        </header>
        <section className="pages">
          <h4>Modèle disponible :</h4>
          <div className="section_design">
            <p>Page de garde </p>
            <div className="cards">
              {cards.map((data) => (
                <Card data={data} key={data.id} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
