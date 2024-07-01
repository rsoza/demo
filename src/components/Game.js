import React from "react";
import FixerTurn from "./FixerTurn";
import BreakerTurn from "./BreakerTurn";

function Game({
  playing,
  stopGame,
  edit_code,
  cKeywords,
  setMoveCount,
  moveCount,
  setCodeLines,
  len,
  codeLines,
  lenEdit,
  fixerStart,
  iterateThroughCode,
}) {
  return (
    <div>
      {(playing && !stopGame) || (!fixerStart && stopGame) ? (
        <>
          <BreakerTurn
            code={edit_code}
            triggerWords={cKeywords}
            setMoveCount={setMoveCount}
            moveCount={moveCount}
            setCodeLines={setCodeLines}
            len={len}
            codeLines={codeLines}
            lenEdit={lenEdit}
            stopGame={stopGame}
          />
        </>
      ) : // ) : stopGame && !fixerStart ? (
      //   <p>{iterateThroughCode(codeLines.join(" "), len, lenEdit)}</p>
      !playing ? (
        iterateThroughCode(edit_code, len, lenEdit)
      ) : (
        <FixerTurn />
      )}
    </div>
  );
}

export default Game;
