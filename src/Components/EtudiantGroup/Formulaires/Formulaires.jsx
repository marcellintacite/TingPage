import React, { useState } from "react";
import Select from "react-select";
import "./../../../css/formulaire.css";
export default function Formulaires({
  data: formData,
  handleSave,
  onPdf,
  setData,
}) {
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

  const [inputFields, setInputFields] = useState([
    { name: "input1", valeur: "" },
  ]);

  const handleAdd = () => {
    const nom = `input${inputFields.length + 1}`;
    console.log(nom);
    const ndata = [...inputFields, { name: nom, value: "" }];
    setInputFields(ndata);
  };
  const handleDelete = (item) => {
    const ndata = inputFields.filter((i) => i.name !== item.name);
    const names = formData.noms;
    const nom = item.name;
    delete names[nom];
    const nformData = { ...formData, names };
    setData(nformData);
    // delete ob.nom;
    setInputFields(ndata);
    console.log(formData);
  };
  const handleChangeNames = (e) => {
    let n = formData.noms;
    const nomsN = { ...n, [e.target.name]: e.target.value };
    setData({ ...formData, noms: nomsN });
  };
  console.log(formData);

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
          <label htmlFor="universite">Choisir une institution</label>
          <Select
            options={options}
            placeholder="Choisir votre université"
            className="select"
            name="universite"
            onChange={(e) => handleChangeUni(e)}
          />
        </div>
        <div className="form_group">
          <label htmlFor="faculte">Saisir votre faculté : </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={formData.faculte}
            name="faculte"
            required
            id=""
            placeholder="Ex : faculté de sciences"
          />
        </div>
        <div className="form_group">
          <label htmlFor="departement">Saisir votre département : </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={formData.departement}
            name="departement"
            id=""
            placeholder="Ex : département d'informatique"
          />
        </div>
        <div className="form_group">
          <label htmlFor="cours">Type de travail /cours : </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            required
            name="cours"
            value={formData.cours}
            id=""
            placeholder="Ex : TP/TD de physique"
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
            placeholder="Ex : Les lentilles"
          />
        </div>
        <div className="groupe">
          <div className="head">
            <h4>Membre du groupe</h4>
            <div className="icone" onClick={handleAdd}>
              <span className="fa fa-add"></span>
            </div>
          </div>
          {inputFields.map((i) => (
            <div className="form_group" key={i.name}>
              <div className="head_input">
                <label htmlFor="nom">
                  Membre {inputFields.indexOf(i) + 1} :{" "}
                </label>
                {inputFields.indexOf(i) !== 0 && (
                  <span
                    className="fa fa-trash"
                    onClick={() => handleDelete(i)}
                  ></span>
                )}
              </div>
              <input
                onChange={(e) => handleChangeNames(e)}
                type="text"
                name={i.name}
                id=""
                required
                placeholder="Ex : Aksanti Bahiga tacite"
              />
            </div>
          ))}
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
          <label htmlFor="promotion">Promotion : </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="promotion"
            id=""
            placeholder="Bac 2 info"
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
