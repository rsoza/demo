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
  text,
  setCompiledCode,
  code
}) {
  return (
    <div id="stack">
      {playing && !stopGame ? (
        <div>
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
          Fixer's Turn
        </button>
      ) : !playing && !stopGame ? (
        <button
          onClick={() => {
            setTimeout(() => {
              setIsPlaying(true);
            }, "200");
          }}
        >
          Play
        </button>
      ) : (
        <>
        <p id="time">{text}</p>
         </>
      )}
  
       <button
         onClick={() => {
           setCompiledCode(code);
          }}
          >
         Compile
       </button>
         </div>
  );
}

export default CustomButtons;
