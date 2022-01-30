import React from "react";
import { emptyScore } from "../../utils/memoryGrid";

function LooseContent() {
  return (
    <>
      <div className="Modal-Star-Container">
        {emptyScore.map((star) => (
          <img key={star.id} src={star.image} alt="star" />
        ))}
      </div>
      <p> Time&apos;s up, try again to beat the best score</p>
    </>
  );
}

export default LooseContent;
