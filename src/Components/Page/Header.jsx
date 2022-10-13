import React from "react";
import { dataUniversite } from "../../config/data";

export default function Header({ dataText, design }) {
  const current = dataUniversite.filter(
    (u) => u.label === dataText.universite
  )[0];
  console.log(dataText, design);
  return (
    <div className="header_text">
      <h3>REPUBLIQUE DEMOCRATIQUE DU CONGO</h3>
      <h3>ENSEIGNEMENT SUPERIEUR ET UNIVERSITAIRE</h3>
      {current && <h3>{current.title.toUpperCase()}</h3>}
      {current && <h3>{current.bp}</h3>}
      {current && <img src={current.logo} alt="logo université" />}
      {dataText && <h3>{dataText.faculte.toUpperCase()}</h3>}
      {dataText && <h3>{dataText.departement.toUpperCase()}</h3>}
      {dataText && <h3>{dataText.cours.toUpperCase()}</h3>}
    </div>
  );
}
