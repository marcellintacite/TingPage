import React from "react";
import logo from "../../assets/logo.png";
import logos from "../../config/data";
function Heading({ data, design }) {
  return (
    <div className="entete">
      <h3
        style={{
          color: design.texteColor,
        }}
      >
        REPUBLIQUE DEMOCRATIQUE DU CONGO
      </h3>
      <h3>ENSEIGNEMENT SUPERIEUR ET UNIVERSITAIRE</h3>
      <h3>{data.universite}</h3>
      {data.universite === "UNIVERSITE CATHOLIQUE DE BUKAVU" && (
        <h3>BP 258 BUKAVU</h3>
      )}
      <img src={logos[data.logo]} alt="Logo ucb" />
      <h3
        style={{
          width: "70%",
          margin: "auto",
          fontSize: 24,
        }}
      >
        {data.faculte}
      </h3>
      <h4>{data.departement}</h4>
      <h4>{data.travail}</h4>

      <div
        className="title"
        style={{
          border: `${design.second}px solid ${design.secondcolor}`,
        }}
      >
        <h4
          style={{
            color: design.texteColor,
          }}
        >
          {data.sujet}
        </h4>
      </div>
    </div>
  );
}

export default Heading;
