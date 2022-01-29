/* eslint-disable consistent-return */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  closeModal,
  gameOver,
  gameRestart,
  gameStart,
  setName,
} from "../../redux/action";
import { getTitle, getButtonTitle } from "../../utils/buttonHelp";

import "./Modal.scss";
import Scoreboard from "../Game/Scoreboard/Scoreboard";

function Modal({ type }) {
  const dispatch = useDispatch();
  const [showScore, setShowScore] = useState(type === "win");
  const [inputData, setInputData] = useState({ name: "" });
  const [nameGiven, setNameGiven] = useState(false);

  const submitName = (e) => {
    e.preventDefault();
    console.log("submit");
    dispatch(setName(inputData.name));
    setNameGiven(true);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const closeIt = (action) => {
    switch (action) {
      case "intro":
        dispatch(gameStart());
        dispatch(closeModal());
        break;
      case "loose":
        dispatch(gameRestart());
        dispatch(gameOver());
        dispatch(gameStart());
        dispatch(closeModal());
        break;
      default:
        dispatch(closeModal());
    }
  };

  return (
    <div className="Modal-Game">
      <div className="Modal-Blur" />
      <div className="Modal-Container">
        <h1>{getTitle(type)}</h1>
        {type === "intro" && (
          <form className="Modal-Intro-Name" onSubmit={submitName}>
            <input
              type="text"
              name="name"
              value={inputData.name}
              onChange={onChange}
              placeholder="Enter Your Name"
            />
            <button type="submit" className="Modal-button secondary">
              Submit
            </button>
          </form>
        )}
        <button
          onClick={() => setShowScore(!showScore)}
          type="button"
          className={`Modal-button ${showScore ? "tertiary" : "secondary"}`}
        >
          {showScore ? "Hide Score" : "Show Score"}
        </button>
        {showScore && <Scoreboard />}
        <div className="Modal-Button-Container">
          <button
            onClick={() => closeIt(type)}
            type="button"
            className="Modal-button primary"
            disabled={type === "intro" && !nameGiven}
          >
            {getButtonTitle(type)}
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Modal;
