/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import gsap from "gsap";
import { useSelector } from "react-redux";
import { starScore } from "../../utils/appData";
import addToRef, { starAnimation } from "../../utils/animation";
import postScore from "../../utils/api";

function WinContent() {
  const playerName = useSelector((state) => state.Game.player);
  const playerScore = useSelector((state) => state.Game.score);
  const playerTime = useSelector((state) => state.Game.time);
  const tl = useRef();
  const imageRef = useRef(null);
  imageRef.current = [];

  useEffect(() => {
    tl.current = gsap
      .timeline({ defaults: { ease: "power3" } })
      .add(starAnimation(imageRef.current, 0.5));
    confetti({
      particleCount: 70,
      spread: 70,
    });
    postScore(playerName, playerTime, playerScore);
  }, []);

  return (
    <div className="Modal-Star-Container">
      {starScore.map((star) => (
        <img
          key={star.id}
          src={star.image}
          alt="star"
          ref={(el) => addToRef(el, imageRef)}
          draggable="false"
        />
      ))}
    </div>
  );
}

export default WinContent;
