import React from "react";
import Turn from "./Turn";

function BreakerVsFixer({
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
  iterateThroughCode,
}) {
  return (
    <div>
      {(playing && !stopGame) ? (
        <>
          <Turn
            code={edit_code}
            triggerWords={cKeywords}
            setMoveCount={setMoveCount}
            moveCount={moveCount}
            setCodeLines={setCodeLines}
            len={len}
            codeLines={codeLines}
            lenEdit={lenEdit}
            stopGame={stopGame}
            breakersTurn={true}
          />
        </>
      ) : 
      !playing ? (
        iterateThroughCode(edit_code, len, lenEdit)
      ) : (
        <>
        <Turn
            code={edit_code}
            triggerWords={cKeywords}
            setMoveCount={setMoveCount}
            moveCount={moveCount}
            setCodeLines={setCodeLines}
            len={len}
            codeLines={codeLines}
            lenEdit={lenEdit}
            stopGame={stopGame}
            breakersTurn={false}
            />
            </>
      )
    }
    </div>
  );
}

export default BreakerVsFixer;
