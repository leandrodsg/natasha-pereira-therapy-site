/**
 * InstagramFeed Section Tests
 * Instagram posts preview section
 */

import { render, screen } from '@testing-library/react';
import InstagramFeed from './InstagramFeed';

// Mock environment
jest.mock('@/lib/env', () => ({
  env: {
    NEXT_PUBLIC_INSTAGRAM_HANDLE: 'sounatashapsi',
  },
}));

// Mock Next.js Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: {
    fill?: boolean;
    priority?: boolean;
    quality?: number;
    alt?: string;
    [key: string]: unknown;
  }) => {
    // Remove Next.js specific props that aren't valid HTML attributes
    const { fill, priority, quality, ...imgProps } = props;
    void fill;
    void priority;
    void quality;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...imgProps} alt={props.alt} />;
  },
}));

describe('InstagramFeed Section', () => {
  describe('Rendering', () => {
    it('should render section element', () => {
      render(<InstagramFeed />);
      const section = screen.getByRole('region', {
        name: /sounatashapsi/i,
      });
      expect(section).toBeInTheDocument();
    });

    it('should have correct section id', () => {
      render(<InstagramFeed />);
      const section = screen.getByRole('region', {
        name: /sounatashapsi/i,
      });
      expect(section).toHaveAttribute('id', 'instagram');
    });

    it('should render heading with handle', () => {
      render(<InstagramFeed />);
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/sounatashapsi/i);
    });

    it('should render profile picture', () => {
      render(<InstagramFeed />);
      const img = screen.getByAltText(/foto de perfil/i);
      expect(img).toBeInTheDocument();
    });

    it('should render Me siga button', () => {
      render(<InstagramFeed />);
      const link = screen.getByRole('link', { name: /me siga no/i });
      expect(link).toHaveTextContent(/me siga no/i);
    });

    it('should render 4 posts', () => {
      render(<InstagramFeed />);
      const posts = screen.getAllByTestId(/instagram-post/);
      expect(posts).toHaveLength(4);
    });

    it('should render follow button link', () => {
      render(<InstagramFeed />);
      const link = screen.getByRole('link', { name: /me siga no/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute(
        'href',
        'https://instagram.com/sounatashapsi'
      );
    });

    it('should open Instagram link in new tab', () => {
      render(<InstagramFeed />);
      const link = screen.getByRole('link', { name: /me siga no/i });
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Styling', () => {
    it('should have light background', () => {
      render(<InstagramFeed />);
      const section = screen.getByRole('region', {
        name: /sounatashapsi/i,
      });
      expect(section).toHaveClass('bg-[#f4eee5]');
    });
  });

  describe('Accessibility', () => {
    it('should have aria-labelledby pointing to heading', () => {
      render(<InstagramFeed />);
      const section = screen.getByRole('region', {
        name: /sounatashapsi/i,
      });
      expect(section).toHaveAttribute('aria-labelledby', 'instagram-heading');
    });

    it('should have accessible post links', () => {
      render(<InstagramFeed />);
      const postLinks = screen.getAllByRole('link', { name: /ver post/i });
      expect(postLinks).toHaveLength(4);
    });
  });
});
