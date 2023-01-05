import React from "react";
import Select from "react-select";
import "./../../../css/formulaire.css";
export default function Formulaires({
  data: formData,
  handleSave,
  onPdf,
  setData,
}) {
  console.log(formData);
  const handlesub = (e) => {
    e.preventDefault();
    onPdf();
  };

  const handleChangeUni = (e) => {
    const ndata = { ...formData, universite: e.value };
    setData(ndata);
  };
  const handleChange = (e) => {
    const ndata = { ...formData, [e.target.name]: e.target.value };
    setData(ndata);
  };
  return (
    <div className="formulaire">
      <h3>Mes informations</h3>
      <form action="">
        <div className="form_group">
          <label htmlFor="ecole">Saisir votre école : </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={formData.ecole}
            name="ecole"
            required
            id=""
            placeholder="Ex : Ecole d'application"
          />
        </div>
        <div className="form_group">
          <label htmlFor="boitePostal">Boite postal : </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={formData.boitePostal}
            name="boitePostal"
            id=""
            placeholder="Ex : département d'informatique"
          />
        </div>
        <div className="form_group">
          <label htmlFor="cours">Cours : </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            required
            name="cours"
            value={formData.cours}
            id=""
            placeholder="Ex : Géographie"
          />
        </div>
        <div className="form_group">
          <label htmlFor="section">Section : </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            required
            name="section"
            value={formData.section}
            id=""
            placeholder="Ex : Commeciale et gestion"
          />
        </div>
        <div className="form_group">
          <label htmlFor="sujet">Saisir le sujet du travail /question : </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="sujet"
            value={formData.sujet}
            id=""
            required
            placeholder="Ex : Les bantous"
          />
        </div>
        <div className="form_group">
          <label htmlFor="nom">Saisir votre nom complet : </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="nom"
            id=""
            required
            placeholder="Ex : Aksanti Bahiga tacite"
          />
        </div>
        <div className="form_group">
          <label htmlFor="titulaire">Nom titulaire du cours : </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="titulaire"
            id=""
            placeholder="Ex : Ass. Kanyaku Kilola"
          />
        </div>
        <div className="form_group">
          <label htmlFor="promotion">Classe : </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="promotion"
            id=""
            placeholder="4ième CG"
          />
        </div>
        <div className="form_group">
          <label htmlFor="anne">Année académique : </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            required
            name="anne"
            id=""
            placeholder="Ex : 2022-2023"
          />
        </div>
      </form>
    </div>
  );
}
