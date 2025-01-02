import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, setCode }) => {
  return (
    <Editor
      height="90vh"
      defaultLanguage="python"
      value={code}
      onChange={(value) => setCode(value)}
    />
  );
};

export default CodeEditor;
