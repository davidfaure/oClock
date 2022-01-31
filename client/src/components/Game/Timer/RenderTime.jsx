import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTime } from "../../../redux/action";
import "./Timer.scss";

function RenderTime({ remainingTime }) {
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

RenderTime.propTypes = {
  remainingTime: PropTypes.number.isRequired,
};

export default RenderTime;
