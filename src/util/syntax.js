export const syntax = {
  keywords: {
    color: "blue",
    elements: [
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
    "int",
    "long",
    "register",
    "restrict",
    "return",
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
  for (const cat in syntax) {
    if (syntax[cat].regex) {
      if (syntax[cat].regex === text) {
        return syntax[cat].color;
      }
    }
  }
  for (const cat in syntax) {
    if (syntax[cat].elements) {
      if (syntax[cat].elements.includes(text)) {
        return syntax[cat].color;
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