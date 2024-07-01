import CodeBlock from "./components/CodeBlock";
import React, { useState } from "react";
import { BreakerScoreBoard, FixerScoreboard } from "./components/Scoreboard";
import CustomButtons from "./util/Buttons";
import "./index.css";
import { edit_code } from "./util/syntax";

function App() {
  const [playing, setIsPlaying] = useState();
  const [stopGame, setStop] = useState();
  const [codeLines, setCodeLines] = useState(edit_code.split(/\r?\n|\r|\n/g));
  // const [resetSelected, setResetSelected] = useState(false);
  const [moveCount, setMoveCount] = useState(3);
  const [fixerStart, setFixerTime] = useState();

  function movePlease() {
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

  const handleStop = () => {
    if (moveCount !== 3) {
      setStop(true);
    } else {
      movePlease();
    }
  };

  return (
    <div>
      <div className="scoreboard">
        {((playing && !stopGame) || moveCount === 3) && (
          <BreakerScoreBoard stopGame={stopGame} />
        )}
        {(!playing || stopGame) && (
          <FixerScoreboard playing={playing} stopGame={stopGame} />
        )}
      </div>
      <center>
        <CustomButtons
          playing={playing}
          stopGame={stopGame}
          handleStop={handleStop}
          moveCount={moveCount}
          fixerStart={fixerStart}
          setFixerTime={setFixerTime}
          setIsPlaying={setIsPlaying}
        />
      </center>
      <CodeBlock
        playing={playing}
        stopGame={stopGame}
        setCodeLines={setCodeLines}
        moveCount={moveCount}
        setMoveCount={setMoveCount}
        fixerStart={fixerStart}
        codeLines={codeLines}
      />
      <div id="snackbar">Please make a move before locking in</div>
    </div>
  );
}

export default App;
