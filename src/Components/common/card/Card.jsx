import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  console.log(data);
  return (
    <div className="lien">
      <Link to={`/${data.lien}`}>
        <div className="card_container">
          <img src={data.img} alt="" />
          <span>{data.titre}</span>
        </div>
      </Link>
    </div>
  );
}

export default Card;
