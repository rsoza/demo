import { first, second, third } from "./util/syntax";
import React, { useState } from "react";
import "./index.css";
import CodeEditor from "./components/CodeEditor";
import Compiler from "./components/Compiler";
import CustomButtons from "./util/Buttons";
import { motion } from "framer-motion";

function App() {
  const [playing, setIsPlaying] = useState(false);
  const [stopGame, setStop] = useState(false);
  const [moveCount, setMoveCount] = useState(3);
  const [code, setCode] = useState(second);
  const [compileCode, setCompiledCode] = useState(first+second+third);
  const [timer, setTimer] = useState("00:00:00");


  // function movePlease() {
  //   let x = document.getElementById("snackbar");
  //   x.className = "show";
  //   setTimeout(function () {
  //     x.className = x.className.replace("show", "");
  //   }, 3000);
  // }

  const getTimeRemaining = (e) => {
    const total =
        Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor(
        (total / 1000 / 60) % 60
    );
    const hours = Math.floor(
        (total / 1000 / 60 / 60) % 24
    );
    return {
        total,
        hours,
        minutes,
        seconds,
    };
};


const startTimer = (e) => {
  let { total, hours, minutes, seconds } =
      getTimeRemaining(e);
  if (total >= 0) {
      setTimer(
          (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9
              ? minutes
              : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
  }
};

  const handleStop = () => {
   
    // if (moveCount !== 3) {
    setStop(true);
    setIsPlaying(false);
    startTimer();
    // } else {
    //   movePlease();
    // }
  };

  return (
    <div className="App">
      <CustomButtons
        playing={playing}
        stopGame={stopGame}
        handleStop={handleStop}
        moveCount={moveCount}
        setIsPlaying={setIsPlaying}
        setMoveCount={setMoveCount}
        text={timer}
        setCompiledCode={setCompiledCode}
        code={first+code+third}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        style={{ filter: !playing ? "blur(2px)" : "none"}}
      ><br></br>
        <CodeEditor
          code={code}
          setCode={setCode}
        />
        <Compiler code={compileCode} />
      </motion.div>
    </div>
  );
}

export default App;
