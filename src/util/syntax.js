export const syntax = {
  datatypes: {
    color: "#d19a66",
    elements: [
      "auto",
      "char",
      "const",
      "double",
      "float",
      "int",
      "long",
      "short",
      "signed",
      "static",
      "unsigned",
      "volatile",
    ],
  },
  keywords: {
    color: "#61aeee",
    elements: [
      "break",
      "case",
      "continue",
      "default",
      "do",
      "else",
      "enum",
      "extern",
      "for",
      "goto",
      "if",
      "inline",
      "register",
      "restrict",
      "return",
      "sizeof",
      "switch",
      "typedef",
      "union",
      "void",
      "while",
    ],
  },
  numbers: {
    color: "#d19a66",
    elements: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  },
  operators: {
    color: "#ee2400",
    elements: [
      "+",
      "-",
      "*",
      "/",
      "==",
      "!=",
      "<",
      ">",
      "<=",
      ">=",
      "&&",
      "||",
    ],
  },
};

export const originalCode =
  '#include <stdio.h>\n#include <stdbool.h>\n\n// Function to perform binary search on a sorted array \nbool binarySearch(int arr[], int n, int x) {\n ---\n      int left = 0 , right = n - 1 ; \n      while (left <= right) { \n          int mid = left + (right - left) / 2 ; \n  \n          if (arr[mid] == x) \n              return true; \n  \n          if (arr[mid] < x) \n              left = mid + 1 ; \n\n          else \n              right = mid - 1 ;\n          }\n            ---\n// If we reach here, the element was not present\n  return false;\n      }\n\n    // Function to test the binary search algorithm\n    bool testBinarySearch() {\n        int arr[] = {2, 3, 4, 10, 40};\n        int n = sizeof(arr) / sizeof(arr[0]);\n        int x = 10;  // Element to search for\n\n        // Validate if binary search finds the element correctly\n        if (binarySearch(arr, n, x) != true) {\n            return false;\n        }\n\n        x = 5;  // Element to search for which is not in the array\n\n        // Validate if binary search correctly identifies the absence of the element\n        if (binarySearch(arr, n, x) != false) {\n            return false;\n        }\n\n        return true;\n    }\n\n    // Main function to run the test\n    int main() {\n        if (testBinarySearch()) {\n          printf("Binary search algorithm works correctly. Fixer wins!");\n        } else {\n          printf("Binary search algorithm does not work correctly. Breaker wins!");\n        }\n    };';
export const len = originalCode.split("---")[0].split(/\r?\n|\r|\n/g).length;
export const lenEdit = originalCode.split("---")[1].split(/\r?\n|\r|\n/g).length + len;
export const lenLow = originalCode.split("---")[2].split(/\r?\n|\r|\n/g).length + lenEdit;
export const SelectColor = (text) => {
  for (const cat in syntax) {
    if (syntax[cat].elements) {
      if (syntax[cat].elements.includes(text)) {
        return syntax[cat].color;
      }
    }
  }
  return "white";
};

export const cKeywords = [
  "+",
  "-",
  "*",
  "/",
  "==",
  "!=",
  "<",
  ">",
  "<=",
  ">=",
  "&&",
  "||",
  "break",
  "case",
  "continue",
  "default",
  "do",
  "else",
  "enum",
  "extern",
  "for",
  "goto",
  "if",
  "inline",
  "register",
  "restrict",
  "return",
  "sizeof",
  "switch",
  "typedef",
  "union",
  "void",
  "while",
  "auto",
  "char",
  "const",
  "double",
  "float",
  "int",
  "long",
  "short",
  "signed",
  "static",
  "unsigned",
  "volatile",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
