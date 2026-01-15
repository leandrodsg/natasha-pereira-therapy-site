import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { AboutTherapist } from './AboutTherapist';

expect.extend(toHaveNoViolations);

describe('AboutTherapist Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<AboutTherapist />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
