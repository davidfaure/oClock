/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState, useRef } from "react";
import gameGrid from "../../../utils/memoryGrid";
import shuffleCard from "../../../utils/shuffleCard";
import Card from "./Cards";

import "./Memory.scss";

function Memory() {
  // eslint-disable-next-line no-unused-vars
  const [cards, setCards] = useState(shuffleCard(gameGrid.concat(gameGrid)));
  const [cardsOpen, setCardsOpen] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [moves, setMoves] = useState(0);
  const timeout = useRef(null);

  console.log(cardsOpen, moves);

  const handleCardClicked = (index) => {
    // Have a maximum of 2 items in array at once.
    if (cardsOpen.length === 1) {
      setCardsOpen((prev) => [...prev, index]);
      // increase the moves once we opened a pair
      setMoves(moves + 1);
    } else {
      // If two cards are already open, we cancel timeout set for flipping cards back
      clearTimeout(timeout.current);
      setCardsOpen([index]);
    }
  };

  const checkIsFlipped = (index) => {
    // if index of the card is in the cardsOpen array switch to true
    return cardsOpen.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  return (
    <div className="memory-container">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            card={card}
            index={index}
            onClick={handleCardClicked}
            isInactive={checkIsInactive(card)}
            isFlipped={checkIsFlipped(index)}
          />
        );
      })}
    </div>
  );
}

export default Memory;
