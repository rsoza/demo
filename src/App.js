import { BreakerScoreBoard, FixerScoreboard } from "./util/Scoreboard";
import CodeBlock from "./components/CodeBlock";
import Compiler from "./components/Compiler";
import CustomButtons from "./util/Buttons";
import {originalCode} from "./util/syntax";
import React, { useState } from "react";
import "./index.css";



function App() {
  const [playing, setIsPlaying] = useState(false);
  const [stopGame, setStop] = useState(false);
  const [codeLines, setCodeLines] = useState(originalCode.split("---")[1].split(/\r?\n|\r|\n/g));
  const [moveCount, setMoveCount] = useState(3);
  const [code, setCode] = useState(originalCode);

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
      setIsPlaying(false);
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
          setIsPlaying={setIsPlaying}
          setMoveCount={setMoveCount}
        />
      </center>
      <CodeBlock
        playing={playing}
        stopGame={stopGame}
        setCodeLines={setCodeLines}
        moveCount={moveCount}
        setMoveCount={setMoveCount}
        codeLines={codeLines}
        code={originalCode}
      />
      <Compiler code={code.replaceAll("---", "\n")} />
      <div id="snackbar">Please make a move before locking in</div>
    </div>
  );
}

export default App;
