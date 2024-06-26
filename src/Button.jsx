import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export const Right = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#3a3a3a",
          position: "relative",
          color: "white",
          border: "none",
          left: "17.7px",
          top: "17px",
          transform: "scale(2.38)",
          height: "24px",
          borderRadius: "50%",
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};
export const Left = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#3a3a3a",
          position: "relative",
          color: "white",
          border: "none",
          left: "17.7px",
          top: "17px",
          transform: "scale(2.38)",
          height: "24px",
          borderRadius: "50%",
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
};
