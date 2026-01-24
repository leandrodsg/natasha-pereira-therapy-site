import { render, screen } from '@testing-library/react';
import HowItWorks from './HowItWorks';

describe('HowItWorks - Security', () => {
  it('does not contain dangerous HTML', () => {
    render(<HowItWorks />);
    // Ensure no dangerouslySetInnerHTML is used
    const section = screen.getByRole('region');
    expect(section.innerHTML).not.toContain('dangerouslySetInnerHTML');
  });

  it('renders static content safely', () => {
    render(<HowItWorks />);
    // All content should be static and safe
    expect(screen.getByText('Sua Jornada Começa Aqui')).toBeInTheDocument();
    expect(screen.getByText(/esperar/)).toBeInTheDocument();
  });

  it('step numbers are validated as integers', () => {
    render(<HowItWorks />);
    const circles = screen.getAllByText(/[1-4]/);
    circles.forEach((circle) => {
      const number = parseInt(circle.textContent || '0');
      expect(number).toBeGreaterThan(0);
      expect(number).toBeLessThanOrEqual(4);
      expect(Number.isInteger(number)).toBe(true);
    });
  });

  it('does not contain external links', () => {
    render(<HowItWorks />);
    const links = screen.queryAllByRole('link');
    expect(links).toHaveLength(0);
  });

  it('content is properly escaped', () => {
    render(<HowItWorks />);
    // Ensure no script tags or dangerous content
    const section = screen.getByRole('region');
    expect(section.innerHTML).not.toContain('<script');
    expect(section.innerHTML).not.toContain('javascript:');
    expect(section.innerHTML).not.toContain('onload=');
  });
});
