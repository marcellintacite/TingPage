import React from "react";
import "./../../css/design.css";
import Select from "react-select";
export default function Design() {
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
  return (
    <div className="design">
      <h4>Mis en forme</h4>
      <form action="">
        <div className="group">
          <div className="form_control">
            <label htmlFor="bg">Background :</label>
            <input type="color" name="bg" />
          </div>
          <div className="form_control">
            <label htmlFor="textColor">Couleur texte:</label>
            <input type="color" name="textColor" />
          </div>
        </div>
        <div className="group">
          <div className="form_control">
            <label htmlFor="bg">Bordure :</label>
            <input type="color" name="bg" />
          </div>
          <div className="form_control">
            <label htmlFor="textColor">Titre:</label>
            <input type="color" name="textColor" />
          </div>
        </div>
        <div className="group">
          <div className="form_control">
            <label htmlFor="bg">Taille bordure :</label>
            <input type="number" name="tailleB" min={0} max={20} />
          </div>
          <div className="form_control">
            <label htmlFor="textColor">Position nom:</label>
            <Select options={s} />
          </div>
        </div>
      </form>
    </div>
  );
}
