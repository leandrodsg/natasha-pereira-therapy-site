import { render, screen } from '@testing-library/react';
import Services from './Services';

describe('Services - Responsive', () => {
  it('applies responsive grid classes for bento box layout', () => {
    render(<Services />);
    const grid = screen.getByTestId('services-grid');
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-3');
  });
});
