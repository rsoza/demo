const syntaxColors = {
  keywords: {
    color: "blue",
    elements: [
    "else",
      "int",
      "return",
      "if",
      "while",
      "for",
      "bool",
      "true",
      "false",
    ],
  },
  identifiers: {
    color: "black",
    elements: [],
  },
  strings: {
    color: "green",
    regex: /\".*?\"|'.*?'/g,
  },
  comments: {
    color: "gray",
    regex: /\/\/.*|\/\*[\s\S]*?\*\//g,
  },
  constants: {
    color: "purple",
    regex: /\b\d+(\.\d+)?\b/g,
  },
  preprocessor: {
    color: "darkblue",
    regex: /#\s*\w+/g,
  },
  operators: {
    color: "red",
    elements: [
      "+",
      "-",
      "*",
      "/",
      "=",
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
  brackets: {
    color: "orange",
    elements: ["{", "}", "(", ")", "[", "]"],
  },
};

export const upper_static = `
    #include <stdbool.h>
    
    // Function to perform binary search on a sorted array
    bool binarySearch(int arr[], int n, int x) {`;
export const edit_code = `
        int left = 0 , right = n - 1; 
        while (left <= right) { 
            int mid = left + (right - left) / 2; 
    
            // Check If x is present at mid 
            if (arr[mid] == x) 
                return true; 
    
            // If x is greater, ignore the left half 
            if (arr[mid] < x) 
                left = mid + 1; 
            // If x is smaller, ignore the right half 
            else 
                right = mid - 1;`; 
export const lower_static = `
        }
    
        // If we reach here, the element was not present
        return false;
    }`;

export const SelectColor = (text) => {
  for (const cat in syntaxColors) {
    if (syntaxColors[cat].regex) {
      if (syntaxColors[cat].regex === text) {
        return syntaxColors[cat].color;
      }
    }
  }
  for (const cat in syntaxColors) {
    if (syntaxColors[cat].elements) {
      if (syntaxColors[cat].elements.includes(text)) {
        return syntaxColors[cat].color;
      }
    }
    return "red";
  }
};


export const cKeywords = [
    "auto",
    "break",
    "case",
    "char",
    "const",
    "continue",
    "default",
    "do",
    "double",
    "else",
    "enum",
    "extern",
    "float",
    "for",
    "goto",
    "if",
    "inline",
    "<=",
    "==",
    "<",
    ">",
    "-",
    "+",
    "/",
    "int",
    "long",
    "register",
    "restrict",
    "short",
    "signed",
    "sizeof",
    "static",
    "struct",
    "switch",
    "typedef",
    "union",
    "unsigned",
    "void",
    "volatile",
    "while"
]