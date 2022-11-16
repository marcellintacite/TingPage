import React from "react";
import { dataUniversite } from "../../config/data";

export default function Header({ dataText, design }) {
  const current = dataUniversite.filter(
    (u) => u.label === dataText.universite
  )[0];
  return (
    <div
      className="header_text"
      style={{
        textAlign: "center",
      }}
    >
      <h3 style={{ color: design.couleurText }}>
        REPUBLIQUE DEMOCRATIQUE DU CONGO
      </h3>
      <h3 style={{ color: design.couleurText }}>
        MINISTERE DE L'ENSEIGNEMENT PRIMAIRE SECONDAIRE ET TECHNIQUE
      </h3>
      {current && (
        <h3 style={{ color: design.couleurText }}>
          {current.title.toUpperCase()}
        </h3>
      )}
      {current && <h3 style={{ color: design.couleurText }}>{current.bp}</h3>}
      {current && <img src={current.logo} alt="logo université" width={80} />}
      {dataText && (
        <h3
          style={{
            color: design.couleurText,
            width: "80%",
            margin: "auto",
            paddingTop: 5,
          }}
        >
          {dataText.faculte.toUpperCase()}
        </h3>
      )}
      {dataText && (
        <h3 style={{ color: design.couleurText }}>
          {dataText.departement.toUpperCase()}
        </h3>
      )}
      {dataText && (
        <h3 style={{ color: design.couleurText }}>
          {dataText.cours.toUpperCase()}
        </h3>
      )}
    </div>
  );
}
