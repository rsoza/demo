import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

const CodeEditor = ({ code, setCode }) => {
  const [suggestions, setSuggestions] = useState([
    "int",
    "if",
    "else",
    "for",
    "while",
    "return",
  ]);

  const handleChange = (value) => {
    setCode(value);
    console.log(code);
  };

  const readOnlyRanges = 
    { startRow: 10, startCol: 0, endRow: 10, endCol: 0 }
  ;

  let range = new Range(1, 4, 1, 10);

  return (
    <div>
      <AceEditor
        mode="c_cpp"
        theme="twilight"
        onChange={handleChange}
        value={code}
        editorProps={{ $blockScrolling: true }}
        name="c_code"
        width="800px"
        height="600px"
        fontSize="16px"
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          readOnly: false,
          wrapEnabled:true,
          highlightActiveLine: true,
          enableAutoIndent: true,
          hScrollBarAlwaysVisible: false,
          vScrollBarAlwaysVisible: false,
          spellcheck:true,
        }}
        handleMarkers={range
    }
      />
    </div>
  );
};

export default CodeEditor;
