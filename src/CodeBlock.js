import { motion } from "framer-motion";
import { Box, Center, Code, Stack } from "@chakra-ui/react";
import { syntaxColors } from "./util/syntax";

function CodeBlock() {
  const upper_static = `
    #include <stdbool.h>
    
    // Function to perform binary search on a sorted array
    bool binarySearch(int arr[], int n, int x) {
        int left = 0, right = n - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
    
            // Check if x is present at mid
            if (arr[mid] == x)
                return true;
    
            // If x is greater, ignore the left half
            if (arr[mid] < x)
                left = mid + 1;
            // If x is smaller, ignore the right half
            else
                right = mid - 1;
        }
    
        // If we reach here, the element was not present
        return false;
    }`;

  const generateCodeLines = () => {
    const codeLines = [];
    console.log(upper_static.length);

    for (let i = 0; i < 5; i++) {
      codeLines.push(`// Example line of code ${i + 1}`);
    }
    return codeLines.join("\n");
  };

  const codeWithLoop = `${upper_static}\n\n${generateCodeLines()}`;

  return (
    <Box p={10}>
      <Center>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          <Stack>
            <Code bg="transparent" whiteSpace="pre" fontSize={18} color="white">
              {codeWithLoop}
            </Code>
          </Stack>
        </motion.div>
      </Center>
    </Box>
  );
}

export default CodeBlock;
