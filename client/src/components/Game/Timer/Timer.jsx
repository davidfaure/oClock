import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useDispatch, useSelector } from "react-redux";
import { gameOver, openModal, gameStart } from "../../../redux/action";
import RenderTime from "./RenderTime";
import "./Timer.scss";

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

  return (
    <div className="timer-wrapper">
      {play && (
        <CountdownCircleTimer
          isPlaying
          duration={180}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[180, 108, 54, 0]}
          onComplete={() => {
            youLoose();
            return { shouldRepeat: true };
          }}
          trailColor="#9fa2b4"
        >
          {RenderTime}
        </CountdownCircleTimer>
      )}
    </div>
  );
}

export default Timer;
