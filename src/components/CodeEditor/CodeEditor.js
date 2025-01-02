import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, setCode }) => {
  return (
    <Editor
      height="300px"
      defaultLanguage="python" // Set Python as the default language
      value={code}
      onChange={(value) => setCode(value || '')}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        lineNumbers: 'on',
      }}
    />
  );
};

export default CodeEditor;
