import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { CTASection } from './CTASection';

expect.extend(toHaveNoViolations);

describe('CTASection', () => {
  it('renders the CTA section with correct Portuguese text', () => {
    render(<CTASection />);

    expect(screen.getByText(/Pronta para/)).toBeInTheDocument();
    expect(screen.getByText(/abraçar/)).toBeInTheDocument();
    expect(screen.getByText(/a mudança\?/)).toBeInTheDocument();

    expect(
      screen.getByText(/Você não precisa continuar se anulando/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Agende sua sessão e comece a se ouvir/)
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: 'Agende sua sessão' })
    ).toBeInTheDocument();
  });

  it('renders the headline as h2 with full text', () => {
    render(<CTASection />);

    const headline = screen.getByRole('heading', { level: 2 });
    expect(headline).toHaveTextContent('Pronta para abraçar a mudança?');
  });

  it('renders with responsive text sizes', () => {
    render(<CTASection />);

    const headline = screen.getByRole('heading', { level: 2 });
    expect(headline).toHaveClass('text-2xl', 'md:text-3xl', 'lg:text-4xl');

    const subheadline = screen.getByText(
      /Agende sua sessão e comece a se ouvir/
    );
    expect(subheadline).toHaveClass('text-base', 'md:text-lg');
  });

  it('renders background image with overlay', () => {
    render(<CTASection />);

    const section = screen.getByRole('region');
    expect(section).toHaveClass(
      'relative',
      'min-h-[500px]',
      'md:min-h-[600px]'
    );

    // Check for background image container
    const bgImage = screen.getByAltText('Ambiente acolhedor para terapia');
    expect(bgImage).toBeInTheDocument();

    // Check for overlay
    const overlay = section.querySelector('[aria-hidden="true"]');
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass('absolute', 'inset-0', 'bg-gradient-to-b');
  });

  it('renders text with white color and drop shadow', () => {
    render(<CTASection />);

    const headline = screen.getByRole('heading', { level: 2 });
    expect(headline).toHaveClass('text-white', 'drop-shadow-lg');

    const subheadline = screen.getByText(
      /Agende sua sessão e comece a se ouvir/
    );
    expect(subheadline).toHaveClass('text-white/95', 'drop-shadow-md');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<CTASection />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
