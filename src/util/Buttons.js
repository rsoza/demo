import React, { useState } from "react";

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
  setIsPlaying,
  setMoveCount,
  text,
  setCompiledCode,
  code,
}) {
  const [timer, setTimer] = useState("");

  function startTimer(duration) {
    var timer = duration,
      minutes,
      seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setTimer( minutes + ":" + seconds);

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

 function onTime() {
    var fiveMinutes = 60 * 1;
    startTimer(fiveMinutes);
  };

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
            onTime();
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
          {timer}
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
