import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";

function ScoreItem({ rank, user, time, score }) {
  const playerName = useSelector((state) => state.Game.player);

  return (
    <div
      className={
        playerName === user
          ? "Scoreboard-Item-Title-You"
          : "Scoreboard-Item-Title"
      }
    >
      <div className="Scoreboard-Item-Rank">{rank + 1}</div>
      <div className="Scoreboard-Item-Player">{user}</div>
      <div className="Scoreboard-Item-Time">{time}</div>
      <div className="Scoreboard-Item-Score">{score}</div>
    </div>
  );
}

ScoreItem.propTypes = {
  rank: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default ScoreItem;
