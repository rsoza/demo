import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { SelectColor } from "./syntax";
import "../index.css";
import { syntax } from "./syntax";

const TextDropdown = ({ code, triggerWords }) => {
  const [dropdownState, setDropdownState] = useState({
    isVisible: false,
    word: "",
  });

  const handleWordClick = (word, event) => {
    if (triggerWords.includes(word)) {
      setDropdownState({ isVisible: true, word });
    }
  };

  return (
    <Box position="relative">
      {code.split(" ").map((word, index, array) => (
        <span
          key={index}
          onClick={(event) => handleWordClick(word, event)}
          style={{
            cursor: triggerWords.includes(word) ? "pointer" : "default",
            color: triggerWords.includes(word) ? SelectColor(word) : "black",
          }}
        >
          {triggerWords.includes(word) ? (
            <select id="mySelect">
              <option>{word}</option>
              {syntax.operators.elements.includes(word) &&              
              syntax.operators.elements.map((op) => (
                <option>{op}</option>
              ))}
              {syntax.keywords.elements.includes(word) &&              
              syntax.keywords.elements.map((op) => (
                <option>{op}</option>
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
