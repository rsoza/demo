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
 



  const handleStop = () => {
  
    setStop(true);
    setIsPlaying(false);
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
