import React, { useContext, useState } from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import PageContext from "../../config/PageContext";
import Select from "react-select";
import Formulaires from "../Formulaires/Formulaires";
import "./../../css/single.css";

function Single(props) {
  const data = useContext(PageContext);

  const [currentCommand, setCurrent] = useState("informations");
  return (
    <div className="single">
      <Navbar />
      <div className="container">
        <div className="title">
          <h4>Page de garde pour étudiant :</h4>
          <div className="line"></div>
        </div>
        <div className="content_view">
          <div className="left">
            <div className="commands">
              <div
                className={
                  currentCommand === "informations"
                    ? "command active"
                    : "command"
                }
                onClick={() => setCurrent("informations")}
              >
                Informations
              </div>
              <div
                className={
                  currentCommand === "design" ? "command active" : "command"
                }
                onClick={() => setCurrent("design")}
              >
                Design
              </div>
            </div>
            <Formulaires data={data} />
          </div>
          <div className="right">papy</div>
        </div>
      </div>
    </div>
  );
}

export default Single;
