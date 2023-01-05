import React from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import "./../../css/contact.css";
import Input from "./Component/Input";
import i from "./../../assets/contact.png";

export default function Contact() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Navbar />
      <div className="contact">
        <div className="container">
          <div className="left">
            <h3>Contactez-nous : </h3>
            <form
              action="
            "
            >
              <Input
                nom="nom"
                label="Votre nom : "
                placeholder="ex : Aksanti bahiga"
                required
              />
              <Input
                label="Votre adresse mail : "
                nom="mail"
                placeholder="ex: aksantibahiga3@gmail.com"
                required
                type="email"
              />
              <div className="input_group">
                <label htmlFor="message">Votre adresse message : </label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Bonjour "
                  required
                ></textarea>
              </div>
              <button className="btn">Envoyer</button>
            </form>
          </div>
          <div className="right">
            <div className="contai">
              <img src={i} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
