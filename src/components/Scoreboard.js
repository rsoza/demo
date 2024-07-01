import React from "react";

export const BreakerScoreBoard = ({ stopGame }) => {
  return (
    <div className="title breaker">
      <center>
        Breaker
        <br></br>
        0
      </center>
    </div>
  );
};

export const FixerScoreboard = ({ stopGame, playing }) => {
  return (
    <div className="title fixer">
      <center>
        Fixer
        <br></br>0
      </center>
    </div>
  );
};
