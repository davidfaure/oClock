import React from "react";
import { useSelector } from "react-redux";

import Memory from "./Memory/Memory";
import Timer from "./Timer/Timer";
import Modal from "../Modal/Modal";
import GameInfo from "./GameInfo";
import FruitsFound from "./FruitsFound";

import "./Game.scss";

function Game() {
  const modal = useSelector((state) => state.Game.Modal.isOpen);
  const typeOfModal = useSelector((state) => state.Game.Modal.type);

  return (
    <>
      {modal && <Modal type={typeOfModal} />}
      <div className="Game-Container">
        <h1> Memory Game </h1>
        <div className="GameBoard-Wrapper">
          <FruitsFound />
          <Memory />
          <GameInfo />
        </div>
        <Timer />
      </div>
    </>
  );
}

export default Game;
