import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ card }) {


  if (!card || !card.img || !card.desc || !card.title) {
    return <div>Error: Card data is missing or incomplete</div>;
  }
  return (
    <Link to="/gigs">
      <div className="catCard">
        <img src={card.img} />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}

export default CatCard;
