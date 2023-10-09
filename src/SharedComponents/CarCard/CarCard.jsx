import React from "react";
import "./CarCard.scss";
import arrowImg from "../../assets/arrow.svg";
import { NavLink } from "react-router-dom";

function CarCard({ id, name, price, image, type }) {
  return (
    <div className="car-card-container" id="car-description-card">
      <NavLink
        to={`/car-details/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img
          id="lbl-car-image"
          src={image}
          style={{ width: "100%", height: "85%" }}
        />

        <div className="car-card-description-container">
          <div className="car-card-name" id="lbl-car-name">
            {name}
          </div>
          <div className="price-description-section">
            <div id="lbl-price">{`${price} onwards`}</div>
            <div className="arrow-btn" id="btn-details">
              <img src={arrowImg} />
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default CarCard;
