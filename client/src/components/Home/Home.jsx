import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap";
import { gameIntro, openModal } from "../../redux/action";

import "./Home.scss";
import Game from "../Game/Game";
import {
  coverAnimation,
  hideAnimation,
  homeAnimation,
} from "../../utils/animation";

function Home() {
  const introGame = useSelector((state) => state.Game.gameIntro);
  const dispatch = useDispatch();
  const [enterGame, setEnterGame] = useState(false);

  const containerRef = useRef();
  const welcomeTextRef = useRef();
  const memoryTextRef = useRef();
  const flipRef = useRef();
  const buttonRef = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline({
        default: {
          ease: "power2",
        },
      })
      .add(homeAnimation(welcomeTextRef.current, -50, 1, 1, 0.5))
      .add(homeAnimation(memoryTextRef.current, -50, 1, 1, 0))
      .add(homeAnimation(buttonRef.current, -50, 1, 1, 0));
  }, []);

  useEffect(() => {
    if (enterGame) {
      tl.current
        .add(coverAnimation(flipRef.current, window.innerHeight, 0.8))
        .add(hideAnimation(containerRef.current))
        .to(flipRef.current, {
          autoAlpha: 0,
          duration: 2,
        })
        .eventCallback(
          "onComplete",
          setTimeout(() => {
            dispatch(openModal("intro"));
            dispatch(gameIntro());
          }, 1600)
        );
    }
  }, [enterGame]);

  return !introGame ? (
    <Game />
  ) : (
    <>
      {" "}
      <div className="load-container" ref={containerRef}>
        <h1 className="welcome-text" ref={welcomeTextRef}>
          Welcome to
        </h1>
        <h1 className="memory-text" ref={memoryTextRef}>
          Memory Game
        </h1>
        <button
          type="button"
          className="enter-button primary"
          ref={buttonRef}
          onClick={() => setEnterGame(true)}
        >
          Enter
        </button>
      </div>
      <div className="flip2" ref={flipRef} />
    </>
  );
}

export default Home;
