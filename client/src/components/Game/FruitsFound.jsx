import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import * as images from "../../assets/images";
import addToRef, { fadeIn } from "../../utils/animation";
import "./Game.scss";

function FruitsFound() {
  const fruitsData = useSelector((state) => state.Game.fruitsFound);
  const tl = useRef();
  const imageRef = useRef(null);
  imageRef.current = [];

  useEffect(() => {
    tl.current = fadeIn(imageRef.current);
  }, [fruitsData]);

  return (
    <div className="FruitsFound-Container">
      <div className="FruitsFound-Title">
        <img src={images.raspberry} alt="raspberry" />
        <h2>Found</h2>
      </div>
      <div className="FruitsFound-Wrapper">
        {fruitsData.map(
          (fruit) =>
            fruit.isFound && (
              <img
                src={fruit.image}
                alt={fruit.type}
                key={fruit.id}
                ref={(el) => addToRef(el, imageRef)}
                draggable="false"
              />
            )
        )}
      </div>
    </div>
  );
}

export default FruitsFound;
