import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  gameOver,
  openModal,
  gameStart,
  calculateTime,
} from "../../../redux/action";
import "./Timer.scss";

const maxTime = 180; // 3 minutes to win the game
const dividend = 4.7; // progress bar is 850px and maxTime 180 : 850/180 = 4.7 for animation

function Timer() {
  const startGame = useSelector((state) => state.Game.gameStarted);
  const endGame = useSelector((state) => state.Game.gameOver);
  const winGame = useSelector((state) => state.Game.gameWinner);
  const restartTheGame = useSelector((state) => state.Game.gameRestart);

  const dispatch = useDispatch();

  const [play, setPlay] = useState(false);
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(null);
  const progressWidth = counter * dividend;

  const youLoose = () => {
    setCounter(0);
    dispatch(gameOver());
    dispatch(gameStart());
    dispatch(openModal("loose"));
  };

  useEffect(() => {
    if (winGame) {
      setPlay(false);
      dispatch(calculateTime(counter));
    }
    if (restartTheGame) {
      setCounter(0);
    }
  }, [winGame, restartTheGame]);

  useEffect(() => {
    if (startGame && !endGame && !winGame) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  }, [startGame, endGame, winGame]);

  useEffect(() => {
    console.log(counter);
    let intervalId;
    switch (true) {
      case counter < 54:
        setColor("#66cb9f");
        break;
      case counter < 108:
        setColor("#3754db");
        break;
      case counter < 150:
        setColor("#F7B801");
        break;
      case counter < 180:
        setColor("#da2d64");
        break;
      default:
    }

    if (play) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);
        // transform seconds in readable format.
        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;
        setSecond(computedSecond);
        setMinute(computedMinute);
        setCounter(counter + 1);
      }, 1000);
    }

    if (counter === maxTime) {
      youLoose();
    }

    return () => clearInterval(intervalId);
  }, [play, counter]);

  const fillerStyles = {
    height: "100%",
    width: `${progressWidth}px`,
    backgroundColor: color,
    borderRadius: "35px",
    transition: "width 1s ease",
  };

  return (
    <div className="timer-wrapper">
      {play && (
        <>
          <h2
            className={
              counter < 150 ? "render-time-value" : "render-time-value-end"
            }
          >
            {minute}:{second}
          </h2>
          <div className="progress-div">
            <div style={fillerStyles} />
          </div>
          <p>Time elapsed</p>
        </>
      )}
    </div>
  );
}

export default Timer;
