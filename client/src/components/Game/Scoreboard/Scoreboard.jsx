import React from "react";
import useAxios from "../../../utils/useAxios";
import "./ScoreBoard.scss";
import ScoreItem from "./ScoreItem";
import * as images from "../../../assets/images";

function Scoreboard() {
  const { res, error, loading } = useAxios({
    method: "GET",
    url: "/score",
    headers: {
      accept: "*/*",
    },
  });

  return (
    <div className="Scoreboard-Wrapper">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {error && error.message}
          {res && (
            <>
              <div className="Scoreboard-Container">
                <div className="Scoreboard-Title">
                  <div className="Scoreboard-Rank">Rank</div>
                  <div className="Scoreboard-Player">Player</div>
                  <div className="Scoreboard-Time">Time</div>
                  <div className="Scoreboard-Score">Score</div>
                </div>
                {res.map((score, index) => (
                  <ScoreItem
                    rank={index}
                    user={score.user}
                    time={score.time}
                    score={score.score}
                    key={score.id}
                  />
                ))}
              </div>
              <div className="Scrollbar-Container">
                <p>Scroll Down</p>
                <img src={images.arrowDown} alt="arrow" />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Scoreboard;
