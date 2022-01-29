/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  gameRestart,
  gameWin,
  openModal,
  setScore,
  updateScore,
} from "../../../redux/action";
import gameGrid from "../../../utils/memoryGrid";
import shuffleCard from "../../../utils/shuffleCard";
import useAxios from "../../../utils/useAxios";
import Card from "./Cards";

import "./Memory.scss";

function Memory() {
  // eslint-disable-next-line no-unused-vars
  const [cards, setCards] = useState(shuffleCard(gameGrid.concat(gameGrid)));
  const [cardsOpen, setCardsOpen] = useState([]);
  const [foundCards, setFoundCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const timeout = useRef(null);

  const restartTheGame = useSelector((state) => state.Game.gameRestart);
  const playerName = useSelector((state) => state.Game.player);
  const playerScore = useSelector((state) => state.Game.score);
  const playerTime = useSelector((state) => state.Game.time);
  const dispatch = useDispatch();

  console.log(cardsOpen, foundCards, shouldDisableAllCards, cards);

  useEffect(() => {
    setTimeout(() => {
      dispatch(gameWin());
      // const data = {
      //   user: playerName,
      //   time: playerTime,
      //   score: playerScore,
      // };
      // axios
      //   .post("http://localhost:8080/api/score", data)
      //   .then((res) => console.log(res));
      setTimeout(() => {
        dispatch(openModal("win"));
      }, 2000);
    }, 5000);
  }, []);

  const checkVictory = () => {
    if (Object.keys(foundCards).length === gameGrid.length) {
      alert("YOU WIN");
      dispatch(gameWin());
    }
  };

  const handleCardClicked = (index) => {
    // Have a maximum of 2 items in array at once.
    if (cardsOpen.length === 1) {
      setCardsOpen((prev) => [...prev, index]);
      // increase the moves once we opened a pair
      dispatch(updateScore());
      // disable found cards
      setShouldDisableAllCards(true);
    } else {
      // If two cards are already open, we cancel timeout set for flipping cards back
      clearTimeout(timeout.current);
      setCardsOpen([index]);
    }
  };

  const compare = () => {
    const [first, second] = cardsOpen;
    setShouldDisableAllCards(false);

    // check if card are equal and addIt to
    if (cards[first].type === cards[second].type) {
      setFoundCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setCardsOpen([]);
      return;
    }
    // flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setCardsOpen([]);
    }, 500);
  };

  const checkIsFlipped = (index) => {
    // if index of the card is in the cardsOpen array switch to true
    return cardsOpen.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(foundCards[card.type]);
  };

  useEffect(() => {
    let timeOut = null;
    if (cardsOpen.length === 2) {
      timeOut = setTimeout(compare, 300);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [cardsOpen]);

  useEffect(() => {
    checkVictory();
  }, [foundCards]);

  useEffect(() => {
    if (restartTheGame) {
      setFoundCards({});
      setCardsOpen([]);
      dispatch(setScore(0));
      setShouldDisableAllCards(false);
      // set a shuffled deck of cards
      setCards(shuffleCard(gameGrid.concat(gameGrid)));
      dispatch(gameRestart());
    }
  }, [restartTheGame]);

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
