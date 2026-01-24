import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FAQItem } from './FAQItem';

const mockItem = {
  id: 'test-item',
  question: 'Test question?',
  answer: 'Test answer content.',
};

describe('FAQItem', () => {
  it('renders the question text', () => {
    render(<FAQItem item={mockItem} />);
    expect(screen.getByText('Test question?')).toBeInTheDocument();
  });

  it('renders the answer text', () => {
    render(<FAQItem item={mockItem} />);
    expect(screen.getByText('Test answer content.')).toBeInTheDocument();
  });

  it('uses details/summary elements for accessibility', () => {
    render(<FAQItem item={mockItem} />);
    const details = screen.getByRole('group');
    expect(details.tagName).toBe('DETAILS');
  });

  it('renders question inside summary element', () => {
    render(<FAQItem item={mockItem} />);
    const summary = document.querySelector('summary');
    expect(summary).toBeInTheDocument();
    expect(summary).toHaveTextContent('Test question?');
  });

  it('starts in collapsed state by default', () => {
    render(<FAQItem item={mockItem} />);
    const details = document.querySelector('details');
    expect(details).not.toHaveAttribute('open');
  });

  it('expands when summary is clicked', async () => {
    const user = userEvent.setup();
    render(<FAQItem item={mockItem} />);

    const summary = screen.getByText('Test question?');
    await user.click(summary);

    const details = document.querySelector('details');
    expect(details).toHaveAttribute('open');
  });

  it('collapses when summary is clicked again', async () => {
    const user = userEvent.setup();
    render(<FAQItem item={mockItem} />);

    const summary = screen.getByText('Test question?');
    await user.click(summary);
    await user.click(summary);

    const details = document.querySelector('details');
    expect(details).not.toHaveAttribute('open');
  });

  it('can be navigated with keyboard', async () => {
    const user = userEvent.setup();
    render(<FAQItem item={mockItem} />);

    const summary = screen.getByText('Test question?');
    await user.click(summary);

    const details = document.querySelector('details');
    expect(details).toHaveAttribute('open');
  });

  it('applies light background color to card', () => {
    render(<FAQItem item={mockItem} />);
    const details = document.querySelector('details');
    expect(details).toHaveClass('bg-[#F6E8D9]');
  });

  it('applies delicate border to card', () => {
    render(<FAQItem item={mockItem} />);
    const details = document.querySelector('details');
    expect(details).toHaveClass('border-[#662B2D]/10');
  });

  it('applies marsala text color to question', () => {
    render(<FAQItem item={mockItem} />);
    const questionText = screen.getByText('Test question?');
    expect(questionText).toHaveClass('text-[#662B2D]');
  });

  it('applies muted text color to answer', () => {
    render(<FAQItem item={mockItem} />);
    const answerContainer = screen
      .getByText('Test answer content.')
      .closest('div');
    expect(answerContainer).toHaveClass('text-muted-foreground');
  });

  it('applies rounded corners', () => {
    render(<FAQItem item={mockItem} />);
    const details = document.querySelector('details');
    expect(details).toHaveClass('rounded-2xl');
  });

  it('applies hover elevation effect', () => {
    render(<FAQItem item={mockItem} />);
    const details = document.querySelector('details');
    expect(details).toHaveClass('hover:-translate-y-1', 'hover:shadow-xl');
  });

  it('renders expand/collapse icon', () => {
    render(<FAQItem item={mockItem} />);
    const icon = document.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('has unique id attribute based on item id', () => {
    render(<FAQItem item={mockItem} />);
    const details = document.querySelector('details');
    expect(details).toHaveAttribute('id', 'faq-test-item');
  });
});
