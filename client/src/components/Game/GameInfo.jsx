import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as images from "../../assets/images";
import useAxios from "../../utils/useAxios";

function GameInfo() {
  const gameScore = useSelector((state) => state.Game.score);
  const [bestScore, setBestScore] = useState(null);
  const { res } = useAxios({
    method: "GET",
    url: "/score/sort?type=time&asc=true",
    headers: {
      accept: "*/*",
    },
  });

  useEffect(() => {
    if (res) {
      setBestScore(res[0]);
    }
  }, [res]);

  return (
    <div className="GameInfo-Container">
      <div className="GameInfo-Up">
        <div className="GameInfo-Up-Title">
          <img src={images.strawberry} alt="strawberry" draggable="false" />
          <h2>Score</h2>
        </div>
        <div className="GameInfo-Up-Score">
          {bestScore ? (
            <h1
              className={
                gameScore <= bestScore.score ? "greenColor" : "redColor"
              }
            >
              {gameScore}
            </h1>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="GameInfo-Down">
        <div className="GameInfo-Down-Title">
          <h2>Leaderboard</h2>
          <hr />
        </div>
        <div className="GameInfo-Down-Best-Wrapper">
          <div className="GameInfo-Down-Time-Wrapper">
            <div className="GameInfo-Down-Time-Title">
              <img src={images.grape} alt="grape" draggable="false" />
              <span>Time</span>
            </div>
            <div className="GameInfo-Down-Time-Item">
              {bestScore && bestScore.time}
            </div>
          </div>
          <div className="GameInfo-Down-Time-Wrapper">
            <div className="GameInfo-Down-Time-Title">
              <img src={images.grape} alt="grape" draggable="false" />
              <span>Score</span>
            </div>
            <div className="GameInfo-Down-Time-Item">
              {bestScore && bestScore.score}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GameInfo;
