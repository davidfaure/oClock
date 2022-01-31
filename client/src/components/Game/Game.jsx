/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Memory from "./Memory/Memory";
import Timer from "./Timer/Timer";
import { gameStart } from "../../redux/action";
import Modal from "../Modal/Modal";

import "./Game.scss";
// import Scoreboard from "./Scoreboard/Scoreboard";

function Game() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.Game.Modal.isOpen);
  const typeOfModal = useSelector((state) => state.Game.Modal.type);

  return (
    <>
      {modal && <Modal type={typeOfModal} />}
      <div className="Game-Container">
        <h1> Memory Game </h1>
        <Memory />
        <Timer />
      </div>
    </>
  );
}

export default Game;
