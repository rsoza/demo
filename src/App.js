import { originalCode } from "./util/syntax";
import React, { useState } from "react";
import "./index.css";
import CodeEditor from "./components/CodeEditor";
import Compiler from "./components/Compiler";
import CustomButtons from './util/Buttons';
import { motion } from "framer-motion";

function App() {
  const [playing, setIsPlaying] = useState(false);
  const [stopGame, setStop] = useState(false);
  const [moveCount, setMoveCount] = useState(3);
  const [code, setCode] = useState(originalCode);
  const [compileCode, setCompiledCode] = useState(originalCode);

  // function movePlease() {
  //   let x = document.getElementById("snackbar");
  //   x.className = "show";
  //   setTimeout(function () {
  //     x.className = x.className.replace("show", "");
  //   }, 3000);
  // }

  const handleStop = () => {
    // if (moveCount !== 3) {
      setStop(true);
      setIsPlaying(false);
    // } else {
    //   movePlease();
    // }
  };


  return (
    <>
         <CustomButtons
           playing={playing}
           stopGame={stopGame}
           handleStop={handleStop}
           moveCount={moveCount}
           setIsPlaying={setIsPlaying}
           setMoveCount={setMoveCount}
       
         />
      <motion.div
         initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      style={{filter: !playing ? "blur(4px)" : "none",}}>
        <CodeEditor
          code={code}
          setCode={setCode}
          setCompiledCode={setCompiledCode}
        />
        <Compiler code={compileCode} />
        <div id="snackbar">Please make a move before locking in</div>
      </motion.div>
    </>
  );
}

export default App;
