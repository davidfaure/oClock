import React from "react";
import PropTypes from "prop-types";
import "./Timer.scss";

function RenderTime({ remainingTime }) {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  console.log(remainingTime, "TIME");

  return (
    <div className="render-time-wrapper">
      <div className="render-time-value">
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
