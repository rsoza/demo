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
    color:  "#61aeee",
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

export const upper_static = `    #include <stdio.h>
    #include <stdbool.h>
    
    // Function to perform binary search on a sorted array
    bool binarySearch(int arr[], int n, int x) {`;

export const edit_code = `
          int left = 0 , right = n - 1 ; 
          while (left <= right) { 
              int mid = left + (right - left) / 2 ; 
      
              if (arr[mid] == x) 
                  return true; 
      
              if (arr[mid] < x) 
                  left = mid + 1 ; 

              else 
                  right = mid - 1 ;`;

export const lower_static = `
              }
                // If we reach here, the element was not present
        return false;
          }

        // Function to test the binary search algorithm
        bool testBinarySearch() {
            int arr[] = {2, 3, 4, 10, 40};
            int n = sizeof(arr) / sizeof(arr[0]);
            int x = 10;  // Element to search for

            // Validate if binary search finds the element correctly
            if (binarySearch(arr, n, x) != true) {
                return false;
            }

            x = 5;  // Element to search for which is not in the array

            // Validate if binary search correctly identifies the absence of the element
            if (binarySearch(arr, n, x) != false) {
                return false;
            }

            return true;
        }

        // Main function to run the test
        int main() {
            if (testBinarySearch()) {
              printf("Binary search algorithm works correctly. Fixer wins!");
            } else {
              printf("Binary search algorithm does not work correctly. Breaker wins!");
            }
        }
      };`;

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
