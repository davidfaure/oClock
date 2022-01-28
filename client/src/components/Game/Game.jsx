import React from "react";
import Memory from "./Memory/Memory";
import Scoreboard from "./Scoreboard/Scoreboard";

function Game() {
  return (
    <div className="Game-Container">
      <h1> GAME </h1>
      <div>Rules</div>
      <Memory />
      <Scoreboard />
    </div>
  );
}

export default Game;
