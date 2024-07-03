import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { first, third } from "../util/syntax";

const CodeEditor = ({ code, setCode, setCompiledCode }) => {
  const handleChange = (liveText) => {
    setCode(liveText);
  };

  return (
    <div
      style={{
        display: "inline-block",
        justifyContent: "center",
        padding: "10px",
        maxHeight: "30lh",
        overflow: 'auto',
      }}
    >
      <pre>{first}</pre>
      <AceEditor
        mode="c_cpp"
        theme="github"
        onChange={handleChange}
        value={code}
        editorProps={{ $blockScrolling: true }}
        name="c_code"
        maxLines={15}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          highlightActiveLine: true,
          enableAutoIndent: true,
          hScrollBarAlwaysVisible: false,
          vScrollBarAlwaysVisible: false,
        }}
      />
      <pre>{third}</pre>
    </div>
  );
};

export default CodeEditor;
