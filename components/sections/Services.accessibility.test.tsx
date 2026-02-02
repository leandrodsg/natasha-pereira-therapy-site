import { render, screen } from '@testing-library/react';
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
      name: /atendimentos pensados para/i,
    });
    expect(section).toHaveAttribute('aria-labelledby', 'services-title');
  });

  it('cards are properly structured as articles', () => {
    render(<Services />);
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(4);
  });

  it('decorative images have proper alt text', () => {
    render(<Services />);
    const primeiraBox = screen.getByAltText(/blocos de madeira com emoções/i);
    const segundaBox = screen.getByAltText(/pessoa contemplando natureza/i);

    expect(primeiraBox).toBeInTheDocument();
    expect(segundaBox).toBeInTheDocument();
  });

  it('CTA button is keyboard accessible', () => {
    render(<Services />);
    const ctaButton = screen.getByRole('link', {
      name: /descubra como posso te ajudar/i,
    });
    expect(ctaButton).toBeInTheDocument();
  });
});
