import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSort } from "react-icons/fa";
import useAxios from "../../../utils/useAxios";
import "./ScoreBoard.scss";
import ScoreItem from "./ScoreItem";

import * as images from "../../../assets/images";
import { scoreHeader } from "../../../utils/appData";

function Scoreboard() {
  const { res, error, loading } = useAxios({
    method: "GET",
    url: "/score",
    headers: {
      accept: "*/*",
    },
  });

  const [scoreData, setScoreData] = useState(null);
  const [asc, setAsc] = useState(false);

  useEffect(() => {
    if (res) {
      setScoreData(res);
    }
  }, [res]);

  const sortScore = (type) => {
    setAsc(!asc);
    const url = `${process.env.REACT_APP_ENDPOINT_API}/score/sort?type=${type}&asc=${asc}`;
    axios.get(url).then((response) => setScoreData(response.data));
  };

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
                  {scoreHeader.map((header) => (
                    <div
                      className={`Scoreboard-${header.label}`}
                      onClick={
                        header.isSorted
                          ? () => sortScore(header.sort)
                          : undefined
                      }
                      role="presentation"
                    >
                      <p>{header.label}</p>
                      {header.isSorted && <FaSort />}
                    </div>
                  ))}
                </div>
                {scoreData.map((score, index) => (
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
