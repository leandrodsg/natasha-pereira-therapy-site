import { render, screen } from '@testing-library/react';
import { LayoutWrapper } from './layout-wrapper';

describe('LayoutWrapper', () => {
  it('renders children correctly', () => {
    render(
      <LayoutWrapper>
        <div>Test Content</div>
      </LayoutWrapper>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(
      <LayoutWrapper>
        <div>Content</div>
      </LayoutWrapper>
    );
    const wrapper = screen.getByText('Content').parentElement;
    expect(wrapper).toHaveClass('min-h-screen bg-background');
  });

  it('applies custom className', () => {
    render(
      <LayoutWrapper className="custom-class">
        <div>Content</div>
      </LayoutWrapper>
    );
    const wrapper = screen.getByText('Content').parentElement;
    expect(wrapper).toHaveClass('custom-class');
  });
});
