/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

import "./Home.scss";
import Game from "../Game/Game";

function Home() {
  const [enterGame, setEnterGame] = useState(false);
  const [inGame, setIngame] = useState(false);

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
      .to(welcomeTextRef.current, {
        y: -50,
        autoAlpha: 1,
        duration: 1,
        delay: 0.5,
      })
      .to(memoryTextRef.current, { y: -50, autoAlpha: 1, duration: 1 })
      .to(buttonRef.current, { y: -50, autoAlpha: 1, duration: 1 });
  }, []);

  useEffect(() => {
    if (enterGame) {
      tl.current
        .to(flipRef.current, {
          height: window.innerHeight,
          duration: 0.8,
        })
        .to(containerRef.current, { autoAlpha: 0 })
        .to(flipRef.current, {
          autoAlpha: 0,
          duration: 0.8,
        })
        .eventCallback(
          "onComplete",
          setTimeout(() => {
            setIngame(true);
          }, 1600)
        );
    }
  }, [enterGame]);

  return inGame ? (
    <Game />
  ) : (
    <>
      {" "}
      <div className="load-container" ref={containerRef}>
        <h1 className="welcome-text" ref={welcomeTextRef}>
          Bienvenue dans
        </h1>
        <h1 className="memory-text" ref={memoryTextRef}>
          Memory Game
        </h1>
        <button
          type="button"
          className="enter-button"
          ref={buttonRef}
          onClick={() => setEnterGame(true)}
        >
          Enter
        </button>
      </div>
      <div className="flip2" ref={flipRef} />{" "}
    </>
  );
}

export default Home;
