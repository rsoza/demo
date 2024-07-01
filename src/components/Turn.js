import React from "react";
import { SelectColor, lower_static, upper_static } from "../util/syntax";
import "../index.css";
import { syntax } from "../util/syntax";

const Trun = ({
  code,
  triggerWords,
  setMoveCount,
  moveCount,
  setCodeLines,
  codeLines,
  len,
  lenEdit,
  stopGame,
  breakersTurn,
  setCompileCode
}) => {
  const handleWordClick = (event, indexOfSelectedWord, lineNumber) => {
    let selectedLine = codeLines[lineNumber].split(" ");
    if (selectedLine[indexOfSelectedWord] !== event.target.value && event.target.value != null&& moveCount > 0) {
      selectedLine[indexOfSelectedWord] = event.target.value;
      codeLines[lineNumber] = selectedLine.join(" ");
      setCodeLines(codeLines);
      setMoveCount(moveCount - 1);
      setCompileCode(upper_static+("\n")+codeLines.join("\n")+("\n")+lower_static);
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
      {(moveCount === 0 || (stopGame && breakersTurn)) ? (
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
                        handleWordClick(event, index, key)
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

export default Trun;
