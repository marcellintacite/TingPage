import React from "react";
import Select from "react-select";
import "./../../css/formulaire.css";
export default function Formulaires() {
  const options = [
    {
      value: "UCB",
      label: "Université Catholique de Bukavu (UCB)",
    },
    {
      value: "UEA",
      label: "Université Evangélique de Bukavu (UEA)",
    },
    {
      value: "UOB",
      label: "Université Officielle de Bukavu (UOB)",
    },
    {
      value: "ISP",
      label: "Institut Supérieur Pédagogique (ISP)",
    },
    {
      value: "ISC",
      label: "Institut Supérieur de Commerce(ISC)",
    },
    {
      value: "ISDR",
      label: "Institut Supérieur de devéloppement rural",
    },
  ];
  return (
    <div className="formulaire">
      <h3>Mes informations</h3>
      <form action="">
        <div className="form_group">
          <label htmlFor="universite">Choisir une institution</label>
          <Select
            options={options}
            placeholder="Choisir votre université"
            className="select"
            name="universite"
          />
        </div>
        <div className="form_group">
          <label htmlFor="faculte">Saisir votre faculté : </label>
          <input
            type="text"
            name="faculte"
            id=""
            placeholder="Ex : faculté de sciences"
          />
        </div>
        <div className="form_group">
          <label htmlFor="departement">Saisir votre département : </label>
          <input
            type="text"
            name="departement"
            id=""
            placeholder="Ex : département d'informatique"
          />
        </div>
        <div className="form_group">
          <label htmlFor="cours">Type de travail /cours : </label>
          <input
            type="text"
            name="cours"
            id=""
            placeholder="Ex : TP/TD de physique"
          />
        </div>
        <div className="form_group">
          <label htmlFor="sujet">Saisir le sujet du travail /question : </label>
          <input
            type="text"
            name="sujet"
            id=""
            placeholder="Ex : Les lentilles"
          />
        </div>
        <div className="form_group">
          <label htmlFor="nom">Saisir votre nom complet : </label>
          <input
            type="text"
            name="nom"
            id=""
            placeholder="Ex : Aksanti Bahiga tacite"
          />
        </div>
        <div className="form_group">
          <label htmlFor="titulaire">Saisir nom du titulaire du cours : </label>
          <input
            type="text"
            name="titulaire"
            id=""
            placeholder="Ex : Ass. Kanyaku Kilola"
          />
        </div>
        <div className="form_group">
          <label htmlFor="anne">Année académique : </label>
          <input type="text" name="anne" id="" placeholder="Ex : 2022-2023" />
        </div>

        <button className="btn">Télécharger ma page</button>
      </form>
    </div>
  );
}
