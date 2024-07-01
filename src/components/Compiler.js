import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Compiler() {
  const [res, setResponse] = useState({});

  const sendRequest = async () => {
    try {
      const requestData = {
        source:
          '#include <stdio.h>\n#include <stdbool.h>\n\nbool binarySearch(int arr[], int n, int x) {\n    int left = 0, right = n - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n\n        if (arr[mid] == x)\n            return true;\n\n        if (arr[mid] < x)\n            left = mid + 1;\n        else\n            right = mid - 1;\n    }\n\n    return false;\n}\n\nbool testBinarySearch() {\n    int arr[] = {2, 3, 4, 10, 40};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int x = 10;\n\n    if (binarySearch(arr, n, x) != true) {\n        return false;\n    }\n\n    x = 5;\n\n    if (binarySearch(arr, n, x) != false) {\n        return false;\n    }\n\n    return true;\n}\n\nint main() {\n    if (testBinarySearch()) {\n        printf("Binary search algorithm works correctly. Fixer wins!\\n");\n    } else {\n        printf("Binary search algorithm does not work correctly. Breaker wins!\\n");\n    }\n    return 0;\n}',
        compiler: "gcc141",
        options: {
          filters: {
            execute: true,
          },
        },
      };

      const response = await axios.post(
        "https://godbolt.org/api/compiler/cg141/compile",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //   setResponse(data);
      console.log("Response from API:", response.data.execResult.stdout);
      setResponse(response.data.execResult.stdout[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
    >
        <h1>Compiler Output</h1>
      <pre>
        <code>{res.text}</code>
      </pre>
    </motion.div>
  );
}

export default Compiler;
