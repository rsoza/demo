import {originalCode} from "./util/syntax";
import React, { useState } from "react";
import "./index.css";
import CodeEditor from "./components/CodeEditor";
import Compiler from './components/Compiler';



function App() {
  const [playing, setIsPlaying] = useState(false);
  const [stopGame, setStop] = useState(false);
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
    <>
      <div>
      <CodeEditor code={code} setCode={setCode}/>
<Compiler code={code} />
      </div>

    </>
  );
}

export default App;
