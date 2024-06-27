import React, { useState, useRef } from "react";
import { Box, useOutsideClick, Select } from "@chakra-ui/react";
import { SelectColor } from "./syntax";

const TextDropdown = ({ code, triggerWords }) => {
  const [dropdownState, setDropdownState] = useState({
    isVisible: false,
    word: "",
  });
  const ref = useRef();

  //Close drop down
  useOutsideClick({
    ref: ref,
    handler: () => setDropdownState({ ...dropdownState, isVisible: false }),
  });

  const handleWordChange = (word) => {
    
  };

  const handleWordClick = (word, index, array) => {
      if (triggerWords.includes(word)) {
        console.log("index", index, array[index])
      setDropdownState({ isVisible: true, word });

    }
  };

  return (
    <Box position="relative">
      {code.split(" ").map((word, index, array) => (
          <span
          key={index}
          onClick={() => handleWordClick(word, index, array)}
          style={{
              cursor: triggerWords.includes(word) ? "pointer" : "default",
              color: triggerWords.includes(word) ? SelectColor(word) : "black",
            }}
            >
          {word}{" "}
        </span>
      ))}
      {dropdownState.isVisible && (
        <Select
          bg="white"
          color="black"
          placeholder={dropdownState.word}
          ref={ref}
        >
          <option onClick={() => handleWordChange("option1")} style={{ color: "black" }} value="option1">
            Option 1
          </option>
          <option onClick={() => handleWordChange("option2")} style={{ color: "black" }} value="option2">
            Option 2
          </option>
          <option onClick={() => handleWordChange("option3")} style={{ color: "black" }} value="option3">
            Option 3
          </option>
        </Select>
      )}
    </Box>
  );
};

export default TextDropdown;
