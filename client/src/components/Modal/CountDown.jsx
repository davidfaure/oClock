/* eslint-disable no-plusplus */
import PropTypes from "prop-types";
import React, { useEffect, useState, useRef } from "react";

function CountDown({ countDownOver }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const [countDownNumber, setCountDownNumber] = useState(5);

  const countDownRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
      if (countDownRef.current) {
        let countdown = 5;
        setInterval(() => {
          if (countdown > 0) {
            countdown = --countdown <= 0 ? 5 : countdown;
            setCountDownNumber(countdown);
          }
        }, 1000);
      }
    }, 1000);
  }, []);

  return !countDownOver ? (
    <>
      <div id="countdown">
        <div id="countdown-number" ref={countDownRef}>
          {countDownNumber}
        </div>
        <svg id={startAnimation ? "svg" : "svg-NoAnim"}>
          <circle r="36" cx="40" cy="40" />
        </svg>
      </div>
      <div id={startAnimation ? "countdownTitle" : "countdownTitleNoAnim"}>
        <h4>Ready ?</h4>
      </div>
    </>
  ) : (
    <div id="countdownGo">
      <h4>Go</h4>
    </div>
  );
}

CountDown.propTypes = {
  countDownOver: PropTypes.bool.isRequired,
};

export default CountDown;
