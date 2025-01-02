const Editor = ({ value, onChange }) => (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      role="textbox"
    />
  );
  export default Editor;
  