import React from "react";
import im1 from "../../assets/Image6.png";
export default function LogoCard({ logo, onClickImg }) {
  return (
    <div className="logo_img" onClick={() => onClickImg(logo)}>
      <img src={logo} alt="Logo de l'université" />
    </div>
  );
}
