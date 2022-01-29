import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useDispatch, useSelector } from "react-redux";
import {
  gameOver,
  openModal,
  gameStart,
  calculateTime,
} from "../../../redux/action";
import "./Timer.scss";

function renderTime({ remainingTime }) {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const winGame = useSelector((state) => state.Game.gameWinner);
  const dispatch = useDispatch();

  useEffect(() => {
    if (winGame) {
      dispatch(calculateTime(remainingTime));
    }
  }, [winGame]);

  return (
    <div className="render-time-wrapper">
      <div>Remaining</div>
      <div
        className={
          remainingTime < 30 ? "render-time-value-end" : "render-time-value"
        }
      >
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="text-timer">minutes</div>
    </div>
  );
}

renderTime.propTypes = {
  remainingTime: PropTypes.number.isRequired,
};

function Timer() {
  const startGame = useSelector((state) => state.Game.gameStarted);
  const endGame = useSelector((state) => state.Game.gameOver);
  const winGame = useSelector((state) => state.Game.gameWinner);
  const [play, setPlay] = useState(false);
  const dispatch = useDispatch();

  const youLoose = () => {
    dispatch(gameOver());
    dispatch(gameStart());
    dispatch(openModal("loose"));
  };

  useEffect(() => {
    if (startGame && !endGame && !winGame) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  }, [startGame, endGame, winGame]);

  console.log("play", play);

  return (
    <div className="timer-wrapper">
      {play && (
        <CountdownCircleTimer
          isPlaying
          duration={1800}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[180, 108, 54, 0]}
          onComplete={() => {
            youLoose();
            return { shouldRepeat: true };
          }}
          trailColor="#9fa2b4"
          // size={circleDimension}
          // strokeWidth={circle}
        >
          {renderTime}
        </CountdownCircleTimer>
      )}
    </div>
  );
}

export default Timer;
