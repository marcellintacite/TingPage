import React, { useState } from "react";
import { toast } from "react-toastify";
import "./../../../css/formulaire.css";
export default function Formulaires({
  data: formData,
  handleSave,
  onPdf,
  setData,
}) {
  const [inputFields, setInputFields] = useState([
    { name: "input1", valeur: "" },
  ]);

  const handleChange = (e) => {
    const ndata = { ...formData, [e.target.name]: e.target.value };
    setData(ndata);
  };
  const handleAdd = () => {
    const nom = `input${inputFields.length + 1}`;
    console.log(nom);
    if (Object.values(inputFields).length < 10) {
      const ndata = [...inputFields, { name: nom, value: "" }];
      setInputFields(ndata);
    } else {
      toast.warning("Vous ne pouvez pas ajouter plus de 10");
    }
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
