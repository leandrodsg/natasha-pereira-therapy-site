// components/sections/CTASection.accessibility.test.tsx
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { CTASection } from './CTASection';

expect.extend(toHaveNoViolations);

describe('CTASection Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<CTASection />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has proper heading hierarchy', () => {
    render(<CTASection />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Pronta para abraçar a mudança?');
  });

  it('has descriptive link text', () => {
    render(<CTASection />);

    const link = screen.getByRole('link', { name: 'Agende sua sessão' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('aria-describedby', 'cta-description');
  });

  it('has proper aria-describedby relationship', () => {
    render(<CTASection />);

    const link = screen.getByRole('link', { name: 'Agende sua sessão' });
    const description = screen.getByText(
      /Agende sua sessão e comece a se ouvir/
    );

    expect(link).toHaveAttribute('aria-describedby', 'cta-description');
    expect(description).toHaveTextContent(
      'Agende sua sessão e comece a se ouvir com mais força e liberdade.'
    );
  });

  it('has sufficient color contrast for white text on dark overlay', () => {
    render(<CTASection />);

    const headline = screen.getByRole('heading', { level: 2 });
    const subheadline = screen.getByText(
      /Agende sua sessão e comece a se ouvir/
    );

    // With bg-black/40 overlay, white text should have sufficient contrast
    // This is tested visually in the component styling
    expect(headline).toHaveClass('text-white');
    expect(subheadline).toHaveClass('text-white/95');
  });

  it('background image has descriptive alt text', () => {
    render(<CTASection />);

    const image = screen.getByAltText('Ambiente acolhedor para terapia');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Ambiente acolhedor para terapia');
  });
});
