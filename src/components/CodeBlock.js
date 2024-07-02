import Turn from "./Turn";
import { motion } from "framer-motion";
import { cKeywords } from "../util/syntax";
import { useState } from "react";
import ContextMenu from "../util/ContextMenu";

function CodeBlock({
  playing,
  setCodeLines,
  moveCount,
  setMoveCount,
  codeLines,
  code,
}) {
  const [showUnitTest, setShowUnitTest] = useState(false);
  const menuItems = ["edit code", "done"];
  const [itemClicked, setItemClicked] = useState("");

  function onMenuClicked(menuItemClicked) {
    setItemClicked(menuItemClicked);
  }


  const iterateThroughCode = (text) => {
    const segments = text.split(/---/g);

    return (
      <div className="codeContainer">
        {segments.map((segment, index) => (
          <div key={index} className="codeLine">
            <span>
              {playing && index === 1 ? (
                <>
                  <ContextMenu
                    menuItems={menuItems}
                    clickedMenu={onMenuClicked}
                  />
                  {itemClicked === "edit code" ? (
                    <>
                      <span
                        style={{ color: "white" }}
                        contentEditable={index === 1}
                        suppressContentEditableWarning={true}
                        className="editableLine"
                      >
                        {segment.trim()}
                      </span>
                    </>
                  ) : (
                    <Turn
                      code={segment}
                      triggerWords={cKeywords}
                      setMoveCount={setMoveCount}
                      moveCount={moveCount}
                      setCodeLines={setCodeLines}
                      codeLines={codeLines}
                    />
                  )}
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
      <div
        onClick={() => setShowUnitTest(!showUnitTest)}
        style={{ cursor: "pointer" }}
      >
        <code>Show Full Code</code>
      </div>
    </>
  );
}

export default CodeBlock;
