import React from "react";
import { SelectColor } from "../util/syntax";
import "../index.css";
import { syntax } from "../util/syntax";

const BreakerTurn = ({
  code,
  triggerWords,
  setMoveCount,
  moveCount,
  setCodeLines,
  codeLines,
  len,
  lenEdit,
  stopGame,
}) => {
  const handleWordClick = (word, event, indexOfSelectedWord, lineNumber) => {
    console.log("event", event);
    let selectedLine = codeLines[lineNumber].split(" ");
    if (selectedLine[indexOfSelectedWord] !== event.target.value && event.target.value != null&& moveCount > 0) {
      selectedLine[indexOfSelectedWord] = event.target.value;
      codeLines[lineNumber] = selectedLine.join(" ");
      setCodeLines(codeLines);
      setMoveCount(moveCount - 1);
    }
  };
  const checkTriggerWord = (word) => {
    let type = "";
    for (const cat in syntax) {
      if (syntax[cat]) {
        if (syntax[cat].elements.includes(word)) {
          type = cat;
        }
      }
    }

    return (
      <>
        {syntax[type].elements.includes(word) &&
          syntax[type].elements.map(
            (op, key) =>
              op !== word && (
                <option key={key} value={op}>
                  {op}
                </option>
              )
          )}
      </>
    );
  };

  return (
    <div>
      {moveCount === 0 || stopGame ? (
        <div>
          {codeLines.map((line, key) => (
            <div key={key}>
              {key + len}
              {"  "}
              {line}
              {key !== lenEdit && <br></br>}
            </div>
          ))}
        </div>
      ) : (
        <div>
          {code.split(/\r?\n|\r|\n/g).map((line, key) => (
            <div key={key}>
              {key + len}
              {"  "}
              {line.split(" ").map((word, index) => (
                <span
                  key={index + key}
                  style={{
                    color: "white",
                  }}
                >
                  {triggerWords.includes(word) && moveCount > 0 ? (
                    <select
                      key={index}
                      onClick={(event) =>
                        handleWordClick(word, event, index, key)
                      }
                      style={{
                        color: SelectColor(word),
                      }}
                    >
                      <option>{word}</option>
                      {checkTriggerWord(word)}
                    </select>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
              {key !== lenEdit && <br></br>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BreakerTurn;
