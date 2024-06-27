export const syntaxColors = {
    keywords: {
      color: "blue",
      elements: ["int", "return", "if", "else", "while", "for", "bool", "true", "false"],
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
      elements: ["+", "-", "*", "/", "=", "==", "!=", "<", ">", "<=", ">=", "&&", "||"],
    },
    brackets: {
      color: "orange",
      elements: ["{", "}", "(", ")", "[", "]"],
    },
  };
  
  for (const cat in syntaxColors){
      if (syntaxColors[cat].regex){
        console.log("cat", cat);
        console.log("syntax", syntaxColors[cat].regex);
}
  }
  console.log(syntaxColors.brackets.elements);
  