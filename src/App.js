import React, { useState, useEffect } from 'react';
import CodeEditor from './components/CodeEditor/CodeEditor';
import DebuggerControls from './components/DebuggerControls/DebuggerControls';
import VariableVisualizer from './components/VariableVisualizer/VariableVisualizer';

const App = () => {
  const [code, setCode] = useState('');
  const [variables, setVariables] = useState({});
  const [pyodide, setPyodide] = useState(null);

  useEffect(() => {
    const loadPyodide = async () => {
      const pyodideInstance = await window.loadPyodide();
      setPyodide(pyodideInstance);
    };
    loadPyodide();
  }, []);

  const handleRun = async () => {
    if (!pyodide) {
      alert('Pyodide is not loaded yet. Please wait...');
      return;
    }
    try {
      // Redirect stdout to capture print output
      pyodide.runPython(`
        import sys
        from io import StringIO
        sys.stdout = StringIO()  # Redirect stdout to a string buffer
      `);
  
      // Execute the user code
      const result = pyodide.runPython(code);
  
      // Retrieve the captured stdout
      const output = pyodide.runPython(`sys.stdout.getvalue()`);
  
      // Display the result of the last statement if available, otherwise show stdout
      setVariables({
        output: result !== undefined && result !== null ? result : output.trim(),
      });
    } catch (error) {
      console.error('Error executing Python code:', error);
      setVariables({ output: `Error: ${error.message}` });
    }
  }; 

  return (
    <div style={{ padding: '20px' }}>
      <h1>Visual Debugger</h1>
      <CodeEditor code={code} setCode={setCode} />
      <DebuggerControls onRun={handleRun} />
      <VariableVisualizer variables={variables} />
    </div>
  );
};

export default App;
