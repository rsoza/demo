import Turn from "./Turn";
import { motion } from "framer-motion";
import { cKeywords, code } from "../util/syntax";
import { useState } from "react";

function CodeBlock({
  playing,
  setCodeLines,
  moveCount,
  setMoveCount,
  codeLines,
}) {
  const [showUnitTest, setShowUnitTest] = useState(false);

  const iterateThroughCode = (text) => {
    const segments = text.split(/---/g);

    return (
      <div className="codeContainer">
        {segments.map((segment, index) => (
          <div key={index} className="codeLine">
            <span contentEditable={index === 1} className="editableLine">
              {playing && index === 1 ? (
                <>
                  <Turn
                    code={segment}
                    triggerWords={cKeywords}
                    setMoveCount={setMoveCount}
                    moveCount={moveCount}
                    setCodeLines={setCodeLines}
                    codeLines={codeLines}
                  />
                </>
              ) : (
                segment.trim()
              )}
            </span>
          </div>
        ))}
      </div>
    );
  };
  console.log("code", code.split("---"));

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, delay: 0.5 },
          maxHeight: showUnitTest ? "200vh" : "30rem",
          maxWidth: "200vh",
        }}
        style={{
          filter: !playing ? "blur(4px)" : "none",
          overflow: "hidden",
        }}
        transition={{ duration: 1.5 }}
      >
        <br></br>
        <pre>
          <code>{iterateThroughCode(code)}</code>
        </pre>
      </motion.div>
      <div onClick={() => setShowUnitTest(!showUnitTest)} style={{cursor:"pointer"}}><code>Show Full Code</code></div>
    </>
  );
}

export default CodeBlock;
