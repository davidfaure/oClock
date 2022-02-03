import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaSort } from "react-icons/fa";
import gsap from "gsap";
import useAxios from "../../../utils/useAxios";
import "./ScoreBoard.scss";
import ScoreItem from "./ScoreItem";

import * as images from "../../../assets/images";
import { scoreHeader } from "../../../utils/appData";

function Scoreboard() {
  const { res, error, loading } = useAxios({
    method: "GET",
    url: "/score/sort?type=time&asc=true",
    headers: {
      accept: "*/*",
    },
  });

  const [scoreData, setScoreData] = useState(null);
  const [asc, setAsc] = useState(false);
  const tl = useRef();
  const scoreBoardRef = useRef();

  useEffect(() => {
    if (res) {
      setScoreData(res);
    }
  }, [res]);

  useEffect(() => {
    tl.current = gsap.to(scoreBoardRef.current, {
      autoAlpha: 1,
      duration: 0.4,
    });
  }, []);

  const sortScore = (type) => {
    setAsc(!asc);
    const url = `${process.env.REACT_APP_ENDPOINT_API}/score/sort?type=${type}&asc=${asc}`;
    axios.get(url).then((response) => setScoreData(response.data));
  };

  return (
    <div className="Scoreboard-Wrapper" ref={scoreBoardRef}>
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
                      key={header.id}
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
                <img src={images.arrowDown} alt="arrow" draggable="false" />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Scoreboard;
