import React, { useState } from "react";
import logos from "../config/data";
import LogoCard from "./common/LogoCard";
import { options } from "../config/data";
import Select from "react-select";
function Formulaire({ data, setData, design, setDesign }) {
  const handleChange = (e) => {
    const ndata = { ...data, [e.target.name]: e.target.value };
    setData(ndata);
  };
  const designChange = (e) => {
    const ndata = { ...design, [e.target.name]: e.target.value };
    setDesign(ndata);
  };

  const selection = (e) => {
    const ndata = { ...data, universite: e.value };
    console.log(e);
    setData(ndata);
  };

  const handleLogo = (img) => {
    const index = logos.indexOf(img);
    let ndata = { ...data };
    if (index === 0) {
      ndata = {
        ...data,
        universite: "UNIVERSITE CATHOLIQUE DE BUKAVU",
        logo: index,
      };
    }
    if (index === 1) {
      ndata = {
        ...data,
        universite: "INSTITUT SUPERIEUR DE TECHNIQUE MEDICALE ",
        logo: index,
      };
    }

    setData(ndata);
  };

  return (
    <div className="form_container">
      <h2>Mes informations</h2>
      <form action="">
        <div className="form_group">
          <Select
            options={options}
            placeholder="Choisir votre institution"
            onChange={(e) => selection(e)}
          />
        </div>
        <div className="form_group">
          <label htmlFor="faculte">Votre faculté :</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={data.faculte}
            name="faculte"
            max={50}
            id=""
            placeholder="Ex: Faculté de sciences"
          />
        </div>
        <div className="form_group">
          <label htmlFor="departement">Votre departement :</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={data.departement}
            name="departement"
            max={50}
            id=""
            placeholder="Ex: Departement informatique"
          />
        </div>

        <div className="form_group">
          <label htmlFor="objet">Titre du travail || cours :</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="travail"
            max={50}
            value={data.travail}
            id=""
            placeholder="Ex: Travail pratique Python"
          />
        </div>
        <div className="form_group">
          <label htmlFor="sujet">Question ou sujet :</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={data.sujet}
            name="sujet"
            max={400}
            id=""
            placeholder="Ex: Les langages de programmations populaire"
          />
        </div>
        <div className="form_group">
          <label htmlFor="nom">Votre nom complet :</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="nom"
            value={data.nom}
            max={100}
            id=""
            placeholder="Ex: Nshobole Riziki"
          />
        </div>
        <div className="form_group">
          <label htmlFor="enseignant">Nom de l'enseignant :</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="enseignant"
            max={100}
            value={data.enseignant}
            id=""
            placeholder="Ex: Prof. Lugusha "
          />
        </div>
        <div className="form_group">
          <label htmlFor="anne">Année Académique :</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="anne"
            value={data.anne}
            max={50}
            id=""
            placeholder="Ex: 2021 - 2022"
          />
        </div>
      </form>

      <h2>Mis en forme</h2>
      <form action="">
        <div className="block_input">
          <div className="form_group">
            <label htmlFor="bg">Background:</label>
            <input
              onChange={(e) => designChange(e)}
              type="color"
              value={design.background}
              name="background"
              max={6}
              id=""
            />
          </div>
          <div className="form_group">
            <label htmlFor="texteColor">Text color:</label>
            <input
              onChange={(e) => designChange(e)}
              type="color"
              value={design.texteColor}
              name="texteColor"
              max={6}
              id=""
            />
          </div>
        </div>
        <div className="block_input">
          <div className="form_group">
            <label htmlFor="faculte">Couleur:</label>
            <input
              onChange={(e) => designChange(e)}
              type="color"
              value={design.borderColor}
              name="borderColor"
              max={50}
              id=""
            />
          </div>
          <div className="form_group">
            <label htmlFor="departement">Taille bordure :</label>
            <input
              onChange={(e) => designChange(e)}
              type="number"
              value={design.bordersize}
              name="bordersize"
              max={20}
              id=""
            />
          </div>
          <div className="form_group">
            <label htmlFor="faculte">Couleur:</label>
            <input
              onChange={(e) => designChange(e)}
              type="color"
              value={design.secondcolor}
              name="secondcolor"
              max={5}
              id=""
            />
          </div>
          <div className="form_group">
            <label htmlFor="departement">Bordure 2 :</label>
            <input
              onChange={(e) => designChange(e)}
              type="number"
              value={design.second}
              name="second"
              max={20}
              id=""
            />
          </div>
        </div>
        <div className="img_input">
          <h3>Choisir un logo :</h3>
          <div className="img_group">
            {logos.map((logo) => (
              <LogoCard logo={logo} onClickImg={handleLogo} />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Formulaire;
