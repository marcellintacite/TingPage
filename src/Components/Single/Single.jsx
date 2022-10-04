import React, { useContext, useState } from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import PageContext from "../../config/PageContext";

function Single(props) {
  const data = useContext(PageContext);
  const [currentCommand, setCurrent] = useState("informations");
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="tile">
          <h4>Page de garde pour étudiant :</h4>
          <div className="line"></div>
        </div>
        <div className="left">
          <div className="commands">
            <div
              className={
                currentCommand === "informations" ? "command active" : "command"
              }
            >
              Informations
            </div>
            <div
              className={
                currentCommand === "design" ? "command active" : "command"
              }
            >
              Design
            </div>
          </div>
          <div className="formulaire">
            <h3>Mes informations</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
