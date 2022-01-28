import PropTypes from "prop-types";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import RenderTime from "./RenderTime";

function renderTime({ remainingTime }) {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="render-time-wrapper">
      <div>Remaining</div>
      <div className="render-time-value">
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
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying
        duration={180}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[180, 108, 54, 0]}
        // onComplete={() => [true, 1000]}
        trailColor="#9fa2b4"
        // size={circleDimension}
        // strokeWidth={circle}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default Timer;
