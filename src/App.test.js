import { render, screen } from '@testing-library/react';
import App from './App';

// Mock Monaco Editor
jest.mock('@monaco-editor/react', () => ({
  __esModule: true,
  default: ({ value, onChange }) => (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      role="textbox"
    />
  ),
}));

test('renders Visual Debugger heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/visual debugger/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders CodeEditor component', () => {
  render(<App />);
  const codeEditor = screen.getByRole('textbox');
  expect(codeEditor).toBeInTheDocument();
});

test('renders DebuggerControls component', () => {
  render(<App />);
  const runButton = screen.getByText(/run/i);
  expect(runButton).toBeInTheDocument();
});

test('renders VariableVisualizer component', () => {
  render(<App />);
  const variableVisualizer = screen.getByRole('region', { name: /variables/i });
  expect(variableVisualizer).toBeInTheDocument();
});
