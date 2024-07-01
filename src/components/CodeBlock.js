import BreakerVsFixer from "./BreakerVsFixer";
import { motion } from "framer-motion";
import {
  upper_static,
  edit_code,
  lower_static,
  cKeywords,
} from "../util/syntax";
import { useState } from "react";

function CodeBlock({
  playing,
  stopGame,
  setCodeLines,
  moveCount,
  setMoveCount,
  fixerStart,
  codeLines,
}) {
  const [showUnitTest, setShowUnitTest] = useState(false);
  const len = upper_static.split(/\r?\n|\r|\n/g).length;
  const lenEdit = edit_code.split(/\r?\n|\r|\n/g).length + len;
  const lenLow =
    lower_static.substring(0, 100).split(/\r?\n|\r|\n/g).length + lenEdit;

  const iterateThroughCode = (text, lineNumOffset, previousLineNum) => {
    return (
      <>
        {text.split(/\r?\n|\r|\n/g).map((line, key) => (
          <div key={key}>
            {key + lineNumOffset}
            {"  "}
            {line}
            {key !== previousLineNum && <br></br>}
          </div>
        ))}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      style={{ filter: !fixerStart && stopGame ? "blur(4px)" : "none" }}
    >
      <br></br>
      <pre>
        <code>
          {iterateThroughCode(upper_static, 0, len)}
          {
            <BreakerVsFixer
              playing={playing}
              stopGame={stopGame}
              edit_code={edit_code}
              cKeywords={cKeywords}
              setMoveCount={setMoveCount}
              moveCount={moveCount}
              setCodeLines={setCodeLines}
              len={len}
              codeLines={codeLines}
              lenEdit={lenEdit}
              fixerStart={fixerStart}
              iterateThroughCode={iterateThroughCode}
            />
          }
          {
            <motion.div
              animate={{
                maxHeight: showUnitTest ? "100vh" : "10rem",
                maxWidth: "200vh",
                opacity: 1,
              }}
              transition={{ duration: 1.5 }}
              onClick={() => setShowUnitTest(!showUnitTest)}
              style={{ overflow: "hidden" }}
            >
              {iterateThroughCode(lower_static, lenEdit, lenLow)}
            </motion.div>
          }
        </code>
      </pre>
    </motion.div>
  );
}

export default CodeBlock;
