import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { CTASection } from './CTASection';

expect.extend(toHaveNoViolations);

describe('CTASection', () => {
  it('renders the CTA section with correct Portuguese text', () => {
    render(<CTASection />);

    expect(
      screen.getByText(
        'Você não precisa continuar se anulando para dar conta de tudo.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Agende sua sessão e comece a se ouvir com mais força e liberdade.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: 'Agende sua sessão' })
    ).toBeInTheDocument();
  });

  it('renders the headline as h2', () => {
    render(<CTASection />);

    const headline = screen.getByRole('heading', { level: 2 });
    expect(headline).toHaveTextContent(
      'Você não precisa continuar se anulando para dar conta de tudo.'
    );
  });

  it('renders with responsive text sizes', () => {
    render(<CTASection />);

    const headline = screen.getByRole('heading', { level: 2 });
    expect(headline).toHaveClass('text-2xl', 'md:text-3xl', 'lg:text-4xl');

    const subheadline = screen.getByText(
      'Agende sua sessão e comece a se ouvir com mais força e liberdade.'
    );
    expect(subheadline).toHaveClass('text-base', 'md:text-lg');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<CTASection />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
