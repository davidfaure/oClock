import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import addToRef, { fadeIn, starAnimation } from "../../utils/animation";
import postScore from "../../utils/api";
import { emptyScore } from "../../utils/appData";

function LooseContent() {
  const playerName = useSelector((state) => state.Game.player);
  const playerScore = useSelector((state) => state.Game.score);
  const playerTime = useSelector((state) => state.Game.time);
  const tl = useRef();
  const imageRef = useRef(null);
  const textRef = useRef(null);
  imageRef.current = [];

  useEffect(() => {
    tl.current = gsap
      .timeline({ defaults: { ease: "power3" } })
      .add(starAnimation(imageRef.current, 0.5))
      .add(fadeIn(textRef.current));
    postScore(playerName, playerTime, playerScore);
  }, []);

  return (
    <>
      <div className="Modal-Star-Container">
        {emptyScore.map((star) => (
          <img
            key={star.id}
            src={star.image}
            alt="star"
            ref={(el) => addToRef(el, imageRef)}
            draggable="false"
          />
        ))}
      </div>
      <p className="Modal-Star-Container-Text" ref={textRef}>
        Time&apos;s up, try again to beat the best score
      </p>
    </>
  );
}

export default LooseContent;
