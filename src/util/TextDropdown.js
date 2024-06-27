import React, { useState  } from "react";
import { Box } from "@chakra-ui/react";
import { SelectColor } from "./syntax";
import "../index.css";

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
                <option>hello</option>
                <option>hello</option>
            </select>
          ) : (word)}{" "}
        </span>
      ))}
    
    </Box>
  );
};

export default TextDropdown;
