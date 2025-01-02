import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DebuggerControls from './DebuggerControls';

test('renders DebuggerControls component', () => {
  render(<DebuggerControls />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(3); // Run, Step Forward, Step Backward
});

test('handles button clicks', () => {
  const onRun = jest.fn();
  render(<DebuggerControls onRun={onRun} />);
  const runButton = screen.getByText('Run');
  userEvent.click(runButton);
  expect(onRun).toHaveBeenCalled();
});
