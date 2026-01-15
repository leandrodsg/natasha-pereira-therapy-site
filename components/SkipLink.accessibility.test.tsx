import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { SkipLink } from './SkipLink';

expect.extend(toHaveNoViolations);

describe('SkipLink Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<SkipLink />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
