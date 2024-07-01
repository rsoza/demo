import { BreakerScoreBoard, FixerScoreboard } from "./util/Scoreboard";
import CodeBlock from "./components/CodeBlock";
import Compiler from "./components/Compiler";
import CustomButtons from "./util/Buttons";
import { edit_code} from "./util/syntax";
import React, { useState } from "react";
import "./index.css";

function App() {
  const [playing, setIsPlaying] = useState();
  const [stopGame, setStop] = useState();
  const [codeLines, setCodeLines] = useState(edit_code.split(/\r?\n|\r|\n/g));
  const [moveCount, setMoveCount] = useState(3);
  const [fixerStart, setFixerTime] = useState();
  const [compile_code, setCompileCode] = useState(
    '#include <stdio.h>\n#include <stdbool.h>\n\n// Function to perform binary search on a sorted array\nbool binarySearch(int arr[], int n, int x) {\n      int left = 0 , right = n - 1 ; \n      while (left <= right) { \n          int mid = left + (right - left) / 2 ; \n  \n          if (arr[mid] == x) \n              return true; \n  \n          if (arr[mid] < x) \n              left = mid + 1 ; \n\n          else \n              right = mid - 1 ;\n          }\n            // If we reach here, the element was not present\n  return false;\n      }\n\n    // Function to test the binary search algorithm\n    bool testBinarySearch() {\n        int arr[] = {2, 3, 4, 10, 40};\n        int n = sizeof(arr) / sizeof(arr[0]);\n        int x = 10;  // Element to search for\n\n        // Validate if binary search finds the element correctly\n        if (binarySearch(arr, n, x) != true) {\n            return false;\n        }\n\n        x = 5;  // Element to search for which is not in the array\n\n        // Validate if binary search correctly identifies the absence of the element\n        if (binarySearch(arr, n, x) != false) {\n            return false;\n        }\n\n        return true;\n    }\n\n    // Main function to run the test\n    int main() {\n        if (testBinarySearch()) {\n          printf("Binary search algorithm works correctly. Fixer wins!");\n        } else {\n          printf("Binary search algorithm does not work correctly. Breaker wins!");\n        }\n    }'
  );

  function movePlease() {
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

  const handleStop = () => {
    if (moveCount !== 3) {
      setStop(true);
    } else {
      movePlease();
    }
  };

  return (
    <div>
      <div className="scoreboard">
        {((playing && !stopGame) || moveCount === 3) && (
          <BreakerScoreBoard stopGame={stopGame} />
        )}
        {(!playing || stopGame) && (
          <FixerScoreboard playing={playing} stopGame={stopGame} />
        )}
      </div>
      <center>
        <CustomButtons
          playing={playing}
          stopGame={stopGame}
          handleStop={handleStop}
          moveCount={moveCount}
          fixerStart={fixerStart}
          setFixerTime={setFixerTime}
          setIsPlaying={setIsPlaying}
          setMoveCount={setMoveCount}
        />
      </center>
      <CodeBlock
        playing={playing}
        stopGame={stopGame}
        setCodeLines={setCodeLines}
        moveCount={moveCount}
        setMoveCount={setMoveCount}
        fixerStart={fixerStart}
        codeLines={codeLines}
        setCompileCode={setCompileCode}
      />
      <Compiler code={compile_code} />
      <div id="snackbar">Please make a move before locking in</div>
    </div>
  );
}

export default App;
