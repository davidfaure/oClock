import PropTypes from "prop-types";
import React from "react";
import "./Cards.scss";
import { backCard } from "../../../assets/images";

function Card({ onClick, card, index, isInactive, isFlipped, isDisabled }) {
  const handleClick = () => {
    return !isFlipped && !isDisabled && onClick(index);
  };

  // add className based on cards' state to anime the flip.
  const flipped = isFlipped ? "is-flipped" : "";
  const inactive = isInactive ? "is-inactive" : "";

  return (
    <div
      className={["card", flipped, inactive].join(" ")}
      onClick={handleClick}
      onKeyDown={() => {}}
      role="presentation"
    >
      <div className="card-face card-font-face">
        <img src={backCard} alt="backCard" draggable="false" />
      </div>
      <div className="card-face card-back-face" draggable="false">
        <img src={card.image} alt={card.type} />
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  isInactive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
