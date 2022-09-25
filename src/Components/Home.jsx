import React, { useState } from "react";
import logos from "../config/data";
import Navbar from "./common/Navbar";
import Formulaire from "./Formulaire";
import PageView from "./PageView";
export default function Home() {
  const [data, setData] = useState({
    nom: "",
    faculte: "",
    universite: "",
    departement: "",
    travail: "",
    sujet: "",
    anne: "",
    groupe: false,
    enseignant: "",
    logo: 0,
  });
  const [design, setDesign] = useState({
    borderColor: "#0e7c7b",
    bordersize: 2,
    second: 1,
    secondcolor: "#17bebb",
    background: "#ffff",
    texteColor: "#333",
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <Formulaire
          data={data}
          setData={setData}
          design={design}
          setDesign={setDesign}
        />
        <PageView data={data} design={design} />
      </div>
    </div>
  );
}
