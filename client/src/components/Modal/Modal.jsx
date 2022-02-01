/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import gsap from "gsap";

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
import { fadeIn } from "../../utils/animation";
import CountDown from "./CountDown";

function Modal({ type }) {
  const dispatch = useDispatch();
  const [showScore, setShowScore] = useState(false);
  const [inputData, setInputData] = useState({ name: "" });
  const [nameGiven, setNameGiven] = useState(false);
  const [countDown, setCountDown] = useState(false);
  const [countDownOver, setCountDownOver] = useState(false);

  const tl = useRef();

  const titleRef = useRef();
  const scoreButtonRef = useRef();
  const closeButtonRef = useRef();
  const submitButtonRef = useRef();
  const exitButtonRef = useRef();

  const submitName = (e) => {
    e.preventDefault();
    dispatch(setName(inputData.name));
    setNameGiven(true);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .add(fadeIn(titleRef.current))
      .add(fadeIn(submitButtonRef.current))
      .add(fadeIn(scoreButtonRef.current))
      .add(fadeIn(exitButtonRef.current))
      .add(fadeIn(closeButtonRef.current));
  }, []);

  useEffect(() => {
    if (countDown) {
      setTimeout(() => {
        setCountDownOver(true);
        setTimeout(() => {
          dispatch(closeModal());
          dispatch(gameStart());
        }, 1000);
      }, 5500);
    }
  }, [countDown]);

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
            <button
              type="submit"
              className="Modal-button secondary"
              ref={submitButtonRef}
            >
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
        setCountDown(true);
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
        {countDown ? (
          <CountDown countDownOver={countDownOver} />
        ) : (
          <>
            <h1 ref={titleRef}>{getTitle(type)}</h1>
            {getContent(type)}
            <button
              onClick={() => setShowScore(!showScore)}
              type="button"
              className={`Modal-button ${showScore ? "tertiary" : "secondary"}`}
              ref={scoreButtonRef}
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
                  ref={exitButtonRef}
                >
                  Exit
                </button>
              )}
              <button
                onClick={() => closeIt(type)}
                type="button"
                className="Modal-button primary"
                disabled={type === "intro" && !nameGiven}
                ref={closeButtonRef}
              >
                {getButtonTitle(type)}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

Modal.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Modal;
