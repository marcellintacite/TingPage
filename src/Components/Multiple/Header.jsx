import React from "react";
import { dataUniversite } from "../../config/data";

export default function Header({ dataText, design }) {
  return (
    <div
      className="header_text"
      style={{
        textAlign: "center",
        marginTop: 20,
      }}
    >
      <h3
        style={{
          color: design.couleurText,
          padding: 5,
          margin: 0,
        }}
      >
        REPUBLIQUE DEMOCRATIQUE DU CONGO
      </h3>
      <h3
        style={{
          color: design.couleurText,
          padding: 0,
          margin: 0,
        }}
      >
        ENSEIGNEMENT PRIMAIRE, SECONDAIRE ET TECHNIQUE
      </h3>
      {dataText && (
        <h3
          style={{
            color: design.couleurText,
            padding: 0,
            margin: 0,
          }}
        >
          {dataText.ecole.toUpperCase()}
        </h3>
      )}

      {dataText && (
        <h3 style={{ color: design.couleurText, margin: 0 }}>
          {dataText.boitePostal.toUpperCase()}
        </h3>
      )}

      {dataText && (
        <h3 style={{ color: design.couleurText }}>
          {dataText.section.toUpperCase()}
        </h3>
      )}

      {dataText && (
        <h3 style={{ color: design.couleurText, padding: 0, margin: 0 }}>
          {dataText.cours.toUpperCase()}
        </h3>
      )}
    </div>
  );
}
