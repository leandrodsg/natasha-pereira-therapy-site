import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Hero } from './Hero';

expect.extend(toHaveNoViolations);

describe('Hero Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Hero />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
