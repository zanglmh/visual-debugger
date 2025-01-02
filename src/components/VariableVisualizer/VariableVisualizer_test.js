import { render, screen } from '@testing-library/react';
import VariableVisualizer from './VariableVisualizer';

test('renders VariableVisualizer component', () => {
    render(<App />);
    const variableVisualizer = screen.getByRole('region', { name: /variables/i });
    expect(variableVisualizer).toBeInTheDocument();
  });
  