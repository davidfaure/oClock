/* eslint-disable consistent-return */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import {
  closeModal,
  gameOver,
  gameRestart,
  gameStart,
  gameWin,
  setName,
} from "../../redux/action";
import { getTitle, getButtonTitle } from "../../utils/buttonHelp";

import "./Modal.scss";
import Scoreboard from "../Game/Scoreboard/Scoreboard";
import WinContent from "./WinContent";
import LooseContent from "./LooseContent";

function Modal({ type }) {
  const dispatch = useDispatch();
  const [showScore, setShowScore] = useState(false);
  const [inputData, setInputData] = useState({ name: "" });
  const [nameGiven, setNameGiven] = useState(false);

  const submitName = (e) => {
    e.preventDefault();
    dispatch(setName(inputData.name));
    setNameGiven(true);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const getContent = (step) => {
    switch (step) {
      case "intro":
        return (
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
        );
      case "win":
        return <WinContent />;
      case "loose":
        return <LooseContent />;
      default:
    }
  };

  const closeIt = (action) => {
    switch (action) {
      case "intro":
        dispatch(gameStart());
        dispatch(closeModal());
        break;
      case "win":
        dispatch(gameRestart());
        dispatch(gameWin());
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
        {getContent(type)}
        <button
          onClick={() => setShowScore(!showScore)}
          type="button"
          className={`Modal-button ${showScore ? "tertiary" : "secondary"}`}
        >
          {showScore ? "Hide Score" : "Show Score"}
        </button>
        {showScore && <Scoreboard />}
        <div className="Modal-Button-Container">
          {type === "win" && (
            <button
              onClick={() => window.location.reload()}
              type="button"
              className="Modal-button tertiary"
            >
              Exit
            </button>
          )}
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
