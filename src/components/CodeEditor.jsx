import React, { useState } from "react";
import { Controlled as CodeMirror } from "@uiw/react-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";

const CodeEditor = ({ initialCode = "", onSave }) => {
  const [code, setCode] = useState(initialCode);

  const handleSave = () => {
    if (onSave) {
      onSave(code);
    }
  };

  return (
    <div className="code-editor">
      <CodeMirror
        value={code}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
      <button onClick={handleSave} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Save
      </button>
    </div>
  );
};

export default CodeEditor;