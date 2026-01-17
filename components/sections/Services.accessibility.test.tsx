import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import Services from './Services';

expect.extend(toHaveNoViolations);

describe('Services - Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Services />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('section has proper heading hierarchy', () => {
    render(<Services />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveAttribute('id', 'services-title');
  });

  it('section has proper aria-labelledby', () => {
    render(<Services />);
    const section = screen.getByRole('region', {
      name: /como posso te ajudar/i,
    });
    expect(section).toHaveAttribute('aria-labelledby', 'services-title');
  });

  it('cards are properly structured as articles', () => {
    render(<Services />);
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(3);
  });

  it('service links are keyboard accessible', async () => {
    const user = userEvent.setup();
    render(<Services />);

    const links = screen.getAllByRole('link');
    for (const link of links) {
      await user.tab();
      expect(link).toHaveFocus();
    }
  });
});
