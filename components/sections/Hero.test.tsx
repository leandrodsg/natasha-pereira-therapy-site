import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Hero } from './Hero';

expect.extend(toHaveNoViolations);

describe('Hero', () => {
  it('renders the hero section with correct Portuguese text', () => {
    render(<Hero />);

    expect(
      screen.getByText('Terapia online para mulheres em Brasília')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Um espaço onde você finalmente pode', { exact: false })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Para mulheres que carregam histórias, decisões, pressões, dúvidas e desejam se ouvir com mais força e liberdade.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: 'Vamos conversar?' })
    ).toBeInTheDocument();
  });

  it('renders the headline as h1 with italic emphasis', () => {
    render(<Hero />);

    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveTextContent(
      'Um espaço onde você finalmente pode existir sem medo.'
    );
    expect(headline).toHaveClass(
      'font-display',
      'text-5xl',
      'md:text-7xl',
      'font-light'
    );
  });

  it('renders subtitle with uppercase and tracking', () => {
    render(<Hero />);

    const subtitle = screen.getByText(
      'Terapia online para mulheres em Brasília'
    );
    expect(subtitle).toHaveClass(
      'text-xs',
      'font-bold',
      'tracking-[0.2em]',
      'uppercase',
      'text-muted-foreground'
    );
  });

  it('renders with split layout classes', () => {
    render(<Hero />);

    const section = screen.getByRole('region', {
      name: 'Um espaço onde você finalmente pode existir sem medo.',
    });
    expect(section).toHaveClass(
      'flex',
      'flex-col',
      'md:flex-row',
      'items-center',
      'gap-12'
    );
  });

  it('renders text content in left column', () => {
    render(<Hero />);

    const textDiv = screen
      .getByText('Terapia online para mulheres em Brasília')
      .closest('div');
    expect(textDiv).toHaveClass('w-full', 'md:w-1/2', 'space-y-8');
  });

  it('renders image in right column with asymmetric rounded corners', () => {
    render(<Hero />);

    const image = screen.getByAltText(
      'Natasha Pereira, psicóloga especializada em terapia para mulheres'
    );
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('primeira.png')
    );

    const imageContainer = image.closest('div');
    expect(imageContainer).toHaveClass(
      'aspect-[4/5]',
      'rounded-tl-[100px]',
      'rounded-br-[100px]',
      'shadow-2xl'
    );
  });

  it('renders CTA button with hover effects', () => {
    render(<Hero />);

    const button = screen.getByRole('link', { name: 'Vamos conversar?' });
    expect(button).toHaveClass(
      'bg-primary',
      'text-white',
      'text-xs',
      'font-bold',
      'uppercase',
      'px-8',
      'py-4',
      'rounded',
      'shadow-lg',
      'transform',
      'hover:-translate-y-1',
      'duration-200'
    );
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Hero />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
