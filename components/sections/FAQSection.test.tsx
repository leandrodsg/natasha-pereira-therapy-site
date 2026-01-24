import { render, screen } from '@testing-library/react';
import { FAQSection } from './FAQSection';

describe('FAQSection', () => {
  it('renders the main heading', () => {
    render(<FAQSection />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Perguntas Frequentes');
  });

  it('renders the subtitle', () => {
    render(<FAQSection />);
    expect(
      screen.getByText(/Respostas para as dúvidas mais comuns/)
    ).toBeInTheDocument();
  });

  it('renders heading with serif font', () => {
    render(<FAQSection />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('font-display');
  });

  it('renders all 5 FAQ items', () => {
    render(<FAQSection />);
    const faqGroups = screen.getAllByRole('group');
    expect(faqGroups).toHaveLength(5);
  });

  it('renders all expected questions', () => {
    render(<FAQSection />);
    expect(
      screen.getByText('Como funciona o primeiro atendimento?')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Quanto tempo dura cada sessão?')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Você atende apenas mulheres?')
    ).toBeInTheDocument();
    expect(screen.getByText('O que é Gestalt-terapia?')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Preciso estar passando por algo "muito grave" para buscar terapia?'
      )
    ).toBeInTheDocument();
  });

  it('renders all answers', () => {
    render(<FAQSection />);
    expect(
      screen.getByText(/No primeiro encontro, conversamos/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/duração aproximada de 50 minutos/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/foco do meu trabalho é o atendimento de mulheres/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Gestalt-terapia é uma abordagem/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Não\. A terapia é um espaço/)).toBeInTheDocument();
  });

  it('has correct semantic structure with section element', () => {
    render(<FAQSection />);
    const section = screen.getByRole('region', {
      name: /perguntas frequentes/i,
    });
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe('SECTION');
  });

  it('has section id for navigation', () => {
    render(<FAQSection />);
    const section = screen.getByRole('region', {
      name: /perguntas frequentes/i,
    });
    expect(section).toHaveAttribute('id', 'faq');
  });

  it('applies cream background color', () => {
    render(<FAQSection />);
    const section = screen.getByRole('region', {
      name: /perguntas frequentes/i,
    });
    expect(section).toHaveClass('bg-[#f4eee5]');
  });

  it('applies min-height screen like Services', () => {
    render(<FAQSection />);
    const section = screen.getByRole('region', {
      name: /perguntas frequentes/i,
    });
    expect(section).toHaveClass('min-h-screen', 'flex', 'items-center');
  });

  it('renders CTA button', () => {
    render(<FAQSection />);
    const ctaLink = screen.getByRole('link', {
      name: 'Ainda tem dúvidas? Fale comigo',
    });
    expect(ctaLink).toBeInTheDocument();
  });

  it('CTA button links to WhatsApp', () => {
    render(<FAQSection />);
    const ctaLink = screen.getByRole('link', {
      name: 'Ainda tem dúvidas? Fale comigo',
    });
    expect(ctaLink).toHaveAttribute('href', expect.stringContaining('wa.me'));
  });

  it('CTA button opens in new tab', () => {
    render(<FAQSection />);
    const ctaLink = screen.getByRole('link', {
      name: 'Ainda tem dúvidas? Fale comigo',
    });
    expect(ctaLink).toHaveAttribute('target', '_blank');
    expect(ctaLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders FAQ items in single column layout', () => {
    render(<FAQSection />);
    const container = document.querySelector('[data-testid="faq-list"]');
    expect(container).toHaveClass('flex', 'flex-col');
  });

  it('renders JSON-LD schema script', () => {
    render(<FAQSection />);
    const script = document.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();
  });

  it('JSON-LD contains FAQPage schema', () => {
    render(<FAQSection />);
    const script = document.querySelector('script[type="application/ld+json"]');
    expect(script?.textContent).toContain('"@type":"FAQPage"');
    expect(script?.textContent).toContain('schema.org');
  });

  it('uses full width container like Services', () => {
    render(<FAQSection />);
    const container = document.querySelector('[data-testid="faq-container"]');
    expect(container).toHaveClass('max-w-7xl', 'mx-auto');
  });

  it('heading uses marsala color', () => {
    render(<FAQSection />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('text-[#662B2D]');
  });
});
