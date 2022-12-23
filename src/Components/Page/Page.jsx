import React from "react";
import Header from "./Header";
import "./../../css/page.css";

export default function Page({ data }) {
  const { data: dataText, design } = data;
  console.log(dataText);
  return (
    <div
      className="page"
      style={{
        background: design.bg,
      }}
    >
      <div
        className="show_page"
        style={{
          borderColor: design.couleurBordure,
          borderWidth: parseInt(design.tailleBordure),
        }}
      >
        <div
          className="bordure_second"
          style={{ borderColor: design.couleurTitre }}
        >
          <Header dataText={dataText} design={design} />
          {dataText.sujet.length > 0 && (
            <div
              className="title"
              style={{
                color: design.couleurTitre,
              }}
            >
              <h2>{dataText.sujet}</h2>
            </div>
          )}

          <div className="author">
            {dataText && (
              <p>
                Fais par <span>{dataText.nom}</span>{" "}
              </p>
            )}
            {dataText.promotion && (
              <p>
                Promotion: <span>{dataText.promotion}</span>{" "}
              </p>
            )}
            {dataText && (
              <p>
                Dirigé par <span>{dataText.titulaire}</span>{" "}
              </p>
            )}
          </div>
          {dataText.anne && (
            <div className="foot">
              <div className="circle">
                <h3>ANNEE ACADEMIQUE : {dataText.anne}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
