const VariableVisualizer = ({ variables }) => {
    const { output } = variables;
  
    return (
      <div role="region" aria-label="Variables">
        <h2>Output</h2>
        {output ? (
          <pre>{output}</pre>
        ) : (
          <p>No output to display.</p>
        )}
      </div>
    );
  };
  
  export default VariableVisualizer;
  