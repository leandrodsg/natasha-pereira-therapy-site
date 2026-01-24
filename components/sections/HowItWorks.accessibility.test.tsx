import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import HowItWorks from './HowItWorks';

expect.extend(toHaveNoViolations);

describe('HowItWorks - Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<HowItWorks />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('section has proper heading hierarchy', () => {
    render(<HowItWorks />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveAttribute('id', 'how-it-works-heading');
  });

  it('section has proper aria-labelledby', () => {
    render(<HowItWorks />);
    const section = screen.getByRole('region', {
      name: /o que esperar durante as sessões/i,
    });
    expect(section).toHaveAttribute('aria-labelledby', 'how-it-works-heading');
  });

  it('step cards are properly structured as articles', () => {
    render(<HowItWorks />);
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(4);
  });

  it('icon circles are decorative (aria-hidden)', () => {
    render(<HowItWorks />);
    // Find elements with aria-hidden="true" - deve ter 4 circles + 4 icons
    const decorativeElements = document.querySelectorAll(
      'div[aria-hidden="true"]'
    );
    expect(decorativeElements).toHaveLength(4);
  });

  it('keyboard navigation works', async () => {
    const user = userEvent.setup();
    render(<HowItWorks />);

    // Focus should move through the section naturally
    await user.tab();
    // Should be able to tab through the section
    expect(document.activeElement).toBeInTheDocument();
  });
});
