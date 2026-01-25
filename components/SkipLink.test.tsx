import { render, screen } from '@testing-library/react';
import { SkipLink } from './SkipLink';

describe('SkipLink', () => {
  it('renders skip link with correct text and href', () => {
    render(<SkipLink />);

    const link = screen.getByRole('link', {
      name: /pular para o conteúdo principal da página/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#main-content');
  });

  it('has correct accessibility attributes', () => {
    render(<SkipLink />);

    const link = screen.getByRole('link', {
      name: /pular para o conteúdo principal da página/i,
    });
    expect(link).toHaveClass('sr-only');
    expect(link).toHaveClass('focus:not-sr-only');
  });
});
