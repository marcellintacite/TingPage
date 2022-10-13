import React from "react";
import "./../../css/design.css";
import Select from "react-select";
export default function Design({ data }) {
  const { design, setDesign } = data;
  const s = [
    {
      label: "Gauche",
      value: "Gauche",
    },
    {
      label: "Droit",
      value: "Droit",
    },
    {
      label: "Centre",
      value: "Centre",
    },
  ];
  console.log(design);

  const handleChange = (e) => {
    const ndata = { ...design, [e.target.name]: e.target.value };
    setDesign(ndata);
  };
  const handleSelect = (e) => {
    const ndata = { ...design, position: e.value };
    setDesign(ndata);
  };

  return (
    <div className="design">
      <h3>Mis en forme</h3>
      <form action="">
        <div className="group">
          <div className="form_control">
            <label htmlFor="bg">Background :</label>
            <input
              type="color"
              name="bg"
              value={design.bg}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form_control">
            <label htmlFor="textColor">Couleur texte:</label>
            <input
              type="color"
              name="couleurText"
              value={design.couleurText}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="group">
          <div className="form_control">
            <label htmlFor="couleurBordure">Bordure :</label>
            <input
              type="color"
              name="couleurBordure"
              value={design.couleurBordure}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form_control">
            <label htmlFor="couleurTitre">Titre:</label>
            <input
              type="color"
              name="couleurTitre"
              value={design.couleurTitre}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="group">
          <div className="form_control">
            <label htmlFor="tailleBordure">Taille bordure :</label>
            <input
              type="number"
              className="bordure"
              name="tailleBordure"
              min={0}
              max={20}
              value={design.tailleBordure}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form_control">
            <label htmlFor="position">Position nom:</label>
            <Select
              options={s}
              name="position"
              onChange={(e) => handleSelect(e)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
