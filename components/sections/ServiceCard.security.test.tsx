import { render, screen } from '@testing-library/react';
import ServiceCard from './ServiceCard';

const mockService = {
  title: 'Atendimento Individual',
  description: 'Um espaço seguro para falar de si.',
  linkText: 'SAIBA MAIS',
  linkHref: '#service',
};

describe('ServiceCard - Security', () => {
  it('renders link with safe href', () => {
    render(<ServiceCard {...mockService} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '#service');
  });

  it('does not render dangerous href attributes', () => {
    render(<ServiceCard {...mockService} />);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute(
      'href',
      expect.stringContaining('javascript:')
    );
    expect(link).not.toHaveAttribute('href', expect.stringContaining('data:'));
  });

  it('link text is sanitized', () => {
    render(<ServiceCard {...mockService} />);
    const link = screen.getByText('SAIBA MAIS');
    expect(link).toBeInTheDocument();
  });

  it('does not contain inline event handlers', () => {
    render(<ServiceCard {...mockService} />);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('onclick');
    expect(link).not.toHaveAttribute('onmouseover');
  });
});
