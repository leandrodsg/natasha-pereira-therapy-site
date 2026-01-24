import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { FAQSection } from './FAQSection';

expect.extend(toHaveNoViolations);

describe('FAQSection Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<FAQSection />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has proper heading hierarchy', () => {
    render(<FAQSection />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Perguntas Frequentes');
  });

  it('section has aria-labelledby for heading', () => {
    render(<FAQSection />);
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('aria-labelledby', 'faq-heading');
  });

  it('uses semantic details/summary for expand/collapse', () => {
    render(<FAQSection />);
    const detailsElements = document.querySelectorAll('details');
    expect(detailsElements.length).toBe(5);

    detailsElements.forEach((details) => {
      const summary = details.querySelector('summary');
      expect(summary).toBeInTheDocument();
    });
  });

  it('FAQ items are keyboard accessible', () => {
    render(<FAQSection />);
    const summaries = document.querySelectorAll('summary');

    summaries.forEach((summary) => {
      expect(summary.tabIndex).not.toBe(-1);
    });
  });

  it('CTA link has descriptive text', () => {
    render(<FAQSection />);
    const link = screen.getByRole('link', {
      name: 'Ainda tem dúvidas? Fale comigo',
    });
    expect(link).toBeInTheDocument();
  });

  it('CTA link has secure external link attributes', () => {
    render(<FAQSection />);
    const link = screen.getByRole('link', {
      name: 'Ainda tem dúvidas? Fale comigo',
    });
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has sufficient color contrast for text on light background', () => {
    render(<FAQSection />);
    // Marsala (#662B2D) on light beige (#F6E8D9) has excellent contrast
    // This meets WCAG AA requirements (4.5:1 for normal text)
    const questions = document.querySelectorAll('summary span');
    questions.forEach((question) => {
      expect(question).toHaveClass('text-[#662B2D]');
    });
  });

  it('subtitle provides context after heading', () => {
    render(<FAQSection />);
    const subtitle = screen.getByText(/Respostas para as dúvidas mais comuns/);
    const heading = screen.getByRole('heading', { level: 2 });

    // Subtitle should come after heading in DOM order
    expect(
      subtitle.compareDocumentPosition(heading) &
        Node.DOCUMENT_POSITION_PRECEDING
    ).toBeTruthy();
  });

  it('FAQ list has appropriate structure', () => {
    render(<FAQSection />);
    const faqList = document.querySelector('[data-testid="faq-list"]');
    expect(faqList).toBeInTheDocument();

    // Each FAQ item should be a details element
    const items = faqList?.querySelectorAll('details');
    expect(items?.length).toBe(5);
  });

  it('each FAQ item has unique id for linking', () => {
    render(<FAQSection />);
    const detailsElements = document.querySelectorAll('details');
    const ids = Array.from(detailsElements).map((el) => el.id);
    const uniqueIds = new Set(ids);

    expect(uniqueIds.size).toBe(detailsElements.length);
    ids.forEach((id) => {
      expect(id).toMatch(/^faq-/);
    });
  });
});
