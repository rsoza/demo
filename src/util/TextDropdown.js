import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { SelectColor } from "./syntax";
import "../index.css";
import { syntax } from "./syntax";

const TextDropdown = ({
  code,
  triggerWords,
  setMoveCount,
  moveCount,
  resetSelected,
}) => {
  let copy_code = code.split(" ");
  const [selectedOption, setSelectedOption] = useState("");

  const handleWordClick = (word, event, index) => {
    if (copy_code[index] !== event.target.value) {
      if (moveCount > 0) {
        setMoveCount(moveCount - 1);
        copy_code[index] = event.target.value;
      }
    }
    setSelectedOption(event.target.value);
    // console.log("here", copy_code[index], event.target.value, index)
    // console.log(copy_code);
  };

  return (
    <Box position="relative">
      {code.split(" ").map((word, index) => (
        <span
          key={index}
          onClick={(event) => handleWordClick(word, event, index)}
          style={{
            cursor:
              triggerWords.includes(word) && moveCount > 0
                ? "pointer"
                : "default",
            color: triggerWords.includes(word) ? SelectColor(word) : "black",
          }}
        >
          {triggerWords.includes(word) && moveCount > 0 ? (
            <select id="mySelect">
              <option>{word}</option>
              {syntax.operators.elements.includes(word) &&
                syntax.operators.elements.map((op) => (
                  <option key={op} value={op}>
                    {op}
                  </option>
                ))}
              {syntax.keywords.elements.includes(word) &&
                syntax.keywords.elements.map((kw) => (
                  <option key={kw} value={kw}>
                    {kw}
                  </option>
                ))}
            </select>
          ) : (
            word
          )}{" "}
        </span>
      ))}
    </Box>
  );
};

export default TextDropdown;
