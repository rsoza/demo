import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

const CodeEditor = ({ code, setCode, setCompiledCode }) => {
  const [obj, setobj] = useState({
    startRow: 0,
    endRow: 0,
  });
  const [functionPlacement, setFunctionPlacement] = useState({
    startRow: 0,
    endRow: 0,
  });
  const handleChange = (liveText) => {
    setCode(liveText);
  };

  const handleSelection = (text) => {
    console.log("text",)
    let startRow = 0;
    let endRow = 0;
    for (let i = 0; i < text.doc.$lines.length; i++) {
      if (
        text.doc.$lines[i].includes(
          "bool binarySearch(int arr[], int n, int x) {"
        )
      ) {
        startRow = i +1;
      }
      if(text.doc.$lines[i].includes("// If we reach here, the element was not present")){
        endRow = i+1;

      }
    }

    setFunctionPlacement({
        startRow: startRow,
        endRow: endRow,
      })
    setobj({
      startRow: text.anchor.row,
      endRow: text.cursor.row,
    });
    console.log("obj              ", obj)
    console.log("functionPlacement", functionPlacement)
  };
  return (
    <div>
      <button
        onClick={() => {
          setCompiledCode(code);
        }}
      >
        Compile
      </button>
      <AceEditor
        mode="c_cpp"
        theme="twilight"
        onSelectionChange={handleSelection}
        onChange={handleChange}
        value={code}
        editorProps={{ $blockScrolling: true }}
        name="c_code"
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        //   readOnly: obj.startRow < functionPlacement.startRow || obj.endRow > functionPlacement.endRow ? true : false,
          highlightActiveLine: true,
          enableAutoIndent: true,
          hScrollBarAlwaysVisible: false,
          vScrollBarAlwaysVisible: false,
        }}
      />
    </div>
  );
};

export default CodeEditor;
