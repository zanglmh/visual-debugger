const DebuggerControls = ({ onRun, onStepForward, onStepBackward }) => {
  return (
    <div>
      <button onClick={onRun}>Run</button>
      <button onClick={onStepForward}>Step Forward</button>
      <button onClick={onStepBackward}>Step Backward</button>
    </div>
  );
};

export default DebuggerControls;
