import React from "react";

/* 
Sequence of game LOGIC::

playing -> false -> PLAY -> true -> STOP motion.button appears
stopGame -> false -> STOP -> true -> FIX CODE button appears
fixerStart -> false -> FIX CODE -> true -> TIMER appears


*/

function CustomButtons({
  playing,
  stopGame,
  handleStop,
  moveCount,
  setIsPlaying,
  setMoveCount,
}) {
  return (
    <div>
      {playing && !stopGame ? (
        <div id="stack">
          <button onClick={() => handleStop()}>Lock In</button>
          {/* {moveCount < 3 && (
            <button onClick={() => window.location.reload()}>Start Over</button>
          )}
          <div>{moveCount} MOVES LEFT</div> */}
        </div>
      ) : stopGame && !playing ? (
        <button
          onClick={() => {
            setIsPlaying(true);
            setMoveCount(2);
          }}
        >
          FIXER'S TURN
        </button>
      ) : !playing && !stopGame ? (
        <button
          onClick={() => {
            setTimeout(() => {
              setIsPlaying(true);
            }, "200");
          }}
        >
          PLAY
        </button>
      ) : (
        <div className="button dis">TIMER</div>
      )}
    </div>
  );
}

export default CustomButtons;
