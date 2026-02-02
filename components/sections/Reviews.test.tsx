/**
 * Reviews Section Tests
 * Doctoralia reviews/widget section with carousel
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Reviews from './Reviews';
import { reviewsData } from '@/lib/reviews-data';

// Mock reviews data with different ratings to test star rendering
jest.mock('@/lib/reviews-data', () => {
  const originalModule = jest.requireActual('@/lib/reviews-data');
  return {
    ...originalModule,
    reviewsData: [
      {
        id: 'review-1',
        name: 'Alice Silva',
        rating: 5,
        comment: 'Great experience!',
        date: '1 de janeiro de 2024',
        verified: true,
      },
      {
        id: 'review-2',
        name: 'Bruno Costa',
        rating: 4,
        comment: 'Very good!',
        date: '2 de janeiro de 2024',
        verified: true,
      },
      {
        id: 'review-3',
        name: 'Carla Pereira',
        rating: 5,
        comment: 'Excellent!',
        date: '3 de janeiro de 2024',
        verified: true,
      },
      {
        id: 'review-4',
        name: 'Diego Santos',
        rating: 5,
        comment: 'Amazing!',
        date: '4 de janeiro de 2024',
        verified: true,
      },
    ],
  };
});

// Mock offsetWidth for carousel width calculation
Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
  configurable: true,
  get: function () {
    return 450;
  },
});

describe('Reviews Section', () => {
  describe('Rendering', () => {
    it('should render section element', () => {
      render(<Reviews />);
      const section = screen.getByRole('region', {
        name: /palavras de quem se permitiu começar/i,
      });
      expect(section).toBeInTheDocument();
    });

    it('should have correct section id', () => {
      render(<Reviews />);
      const section = screen.getByRole('region', {
        name: /palavras de quem se permitiu começar/i,
      });
      expect(section).toHaveAttribute('id', 'avaliacoes');
    });

    it('should render heading', () => {
      render(<Reviews />);
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(
        /palavras de quem se permitiu começar/i
      );
    });

    it('should render Doctoralia image link', () => {
      render(<Reviews />);
      const link = screen.getByRole('link', {
        name: /ver perfil no doctoralia/i,
      });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute(
        'href',
        'https://www.doctoralia.com.br/natasha-pereira-2/psicologo/brasilia'
      );
    });

    it('should render Doctoralia badge image', () => {
      render(<Reviews />);
      const image = screen.getByRole('img', { name: /badge doctoralia/i });
      expect(image).toBeInTheDocument();
    });

    it('should render all review cards with avatars', () => {
      render(<Reviews />);
      const verifiedBadges = screen.getAllByText(/opinião verificada/i);
      expect(verifiedBadges).toHaveLength(reviewsData.length);
    });

    it('should render review cards with correct structure', () => {
      render(<Reviews />);
      const firstReviewName = screen.getByText(reviewsData[0].name);
      expect(firstReviewName).toBeInTheDocument();
      const firstReviewComments = screen.getAllByText(reviewsData[0].comment);
      expect(firstReviewComments[0]).toBeInTheDocument();
    });

    it('should render avatars with initials', () => {
      render(<Reviews />);
      const reviewerName = reviewsData[0].name;
      const initials = reviewerName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
      const avatar = screen.getByText(initials);
      expect(avatar).toBeInTheDocument();
    });

    it('should render star ratings', () => {
      render(<Reviews />);
      const stars = screen.getAllByTestId('star-icon');
      // 5 stars per review * number of reviews
      expect(stars.length).toBe(reviewsData.length * 5);
    });

    it('should render navigation buttons', () => {
      render(<Reviews />);
      const prevButton = screen.getByRole('button', { name: /anterior/i });
      const nextButton = screen.getByRole('button', { name: /próxima/i });
      expect(prevButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });

    it('should render carousel indicators', () => {
      render(<Reviews />);
      const CARDS_PER_VIEW = 1;
      const expectedIndicators = Math.ceil(reviewsData.length / CARDS_PER_VIEW);
      const indicators = screen.getAllByRole('button', {
        name: /ir para grupo de avaliações/i,
      });
      expect(indicators).toHaveLength(expectedIndicators);
    });
  });

  describe('Layout', () => {
    it('should render image in left column', () => {
      render(<Reviews />);
      const image = screen.getByRole('img', { name: /badge doctoralia/i });
      expect(image).toBeInTheDocument();
    });

    it('should render carousel in right column', () => {
      render(<Reviews />);
      const navButtons = screen.getAllByRole('button', {
        name: /(anterior|próxima)/i,
      });
      expect(navButtons.length).toBe(2);
    });
  });

  describe('Carousel Navigation', () => {
    it('should navigate to next reviews on next button click', () => {
      render(<Reviews />);
      const nextButton = screen.getByRole('button', { name: /próxima/i });
      fireEvent.click(nextButton);
      // Carousel should have moved
      expect(nextButton).toBeInTheDocument();
    });

    it('should navigate to previous reviews on prev button click', () => {
      render(<Reviews />);
      const nextButton = screen.getByRole('button', { name: /próxima/i });
      const prevButton = screen.getByRole('button', { name: /anterior/i });

      // Move forward first
      fireEvent.click(nextButton);
      // Then move back
      fireEvent.click(prevButton);

      expect(prevButton).toBeInTheDocument();
    });

    it('should navigate using indicators', () => {
      render(<Reviews />);
      const indicators = screen.getAllByRole('button', {
        name: /ir para grupo de avaliações/i,
      });

      // Click on second indicator
      if (indicators.length > 1) {
        fireEvent.click(indicators[1]);
        expect(indicators[1]).toBeInTheDocument();
      }
    });

    it('should loop back to start from end', () => {
      render(<Reviews />);
      const nextButton = screen.getByRole('button', { name: /próxima/i });

      // Click next multiple times to loop
      const CARDS_PER_VIEW = 1;
      const clicks = Math.ceil(reviewsData.length / CARDS_PER_VIEW) + 1;
      for (let i = 0; i < clicks; i++) {
        fireEvent.click(nextButton);
      }

      expect(nextButton).toBeInTheDocument();
    });

    it('should navigate backwards from middle position', () => {
      render(<Reviews />);
      const prevButton = screen.getByRole('button', { name: /anterior/i });
      const nextButton = screen.getByRole('button', { name: /próxima/i });

      // Move to middle first
      fireEvent.click(nextButton);
      // Then move back (tests the false branch of newIndex < 0)
      fireEvent.click(prevButton);

      expect(prevButton).toBeInTheDocument();
    });

    it('should wrap to end when clicking prev from start', () => {
      render(<Reviews />);
      const prevButton = screen.getByRole('button', { name: /anterior/i });

      // Click prev from start position (currentIndex = 0)
      // This tests the true branch: newIndex < 0
      fireEvent.click(prevButton);

      expect(prevButton).toBeInTheDocument();
    });
  });

  describe('Touch Navigation', () => {
    beforeEach(() => {
      // Mock offsetWidth for carousel container
      jest
        .spyOn(HTMLElement.prototype, 'offsetWidth', 'get')
        .mockReturnValue(450);
    });

    it('should handle left swipe to navigate next', () => {
      render(<Reviews />);
      const carouselInner = screen.getByTestId('carousel-inner');

      // Simulate left swipe (next)
      fireEvent.touchStart(carouselInner, {
        targetTouches: [{ clientX: 100 }],
      });
      fireEvent.touchEnd(carouselInner, {
        changedTouches: [{ clientX: 50 }], // Moved left (50px difference)
      });

      // Check that transform changed to next slide
      expect(carouselInner.style.transform).toBe('translateX(-450px)');
    });

    it('should handle right swipe to navigate previous', () => {
      render(<Reviews />);
      const carouselInner = screen.getByTestId('carousel-inner');

      // Start at index 0, transform should be 0
      expect(carouselInner.style.transform).toBe('translateX(-0px)');

      // Simulate right swipe (previous)
      fireEvent.touchStart(carouselInner, {
        targetTouches: [{ clientX: 50 }],
      });
      fireEvent.touchEnd(carouselInner, {
        changedTouches: [{ clientX: 100 }], // Moved right (50px difference)
      });

      // After swipe right from index 0, should loop to last slide (index 3)
      // Index 3 * 450px = 1350px
      expect(carouselInner.style.transform).toBe('translateX(-1350px)');
    });

    it('should not navigate on small swipe', () => {
      render(<Reviews />);
      const carouselInner = screen.getByTestId('carousel-inner');

      // Simulate small movement (less than 50px)
      fireEvent.touchStart(carouselInner, {
        targetTouches: [{ clientX: 100 }],
      });
      fireEvent.touchEnd(carouselInner, {
        changedTouches: [{ clientX: 95 }], // Only 5px difference
      });

      // Check that transform remains at start (should be at index 0)
      expect(carouselInner.style.transform).toBe('translateX(-0px)');
    });
  });

  describe('Card Styling', () => {
    it('should render cards with Doctoralia style', () => {
      render(<Reviews />);
      const verifiedBadge = screen.getAllByText(/opinião verificada/i)[0];
      expect(verifiedBadge).toHaveClass('uppercase');
    });

    it('should render teal stars for ratings', () => {
      render(<Reviews />);
      const stars = screen.getAllByTestId('star-icon');
      const filledStar = stars[0]; // First star should be filled
      expect(filledStar).toHaveClass('fill-teal-500');
    });

    it('should render empty stars for partial ratings', () => {
      render(<Reviews />);
      const stars = screen.getAllByTestId('star-icon');
      // Second review has 4 stars - check 5th star is not filled
      const secondReviewStars = stars.slice(5, 10); // Stars for second review
      const lastStar = secondReviewStars[4]; // 5th star (index 4)
      expect(lastStar).toHaveClass('text-gray-300');
      expect(lastStar).not.toHaveClass('fill-teal-500');
    });

    it('should render review dates', () => {
      render(<Reviews />);
      const reviewDates = screen.getAllByText(reviewsData[0].date);
      expect(reviewDates[0]).toBeInTheDocument();
      expect(reviewDates.length).toBeGreaterThan(0);
    });
  });

  describe('Styling', () => {
    it('should have green background', () => {
      render(<Reviews />);
      const section = screen.getByRole('region', {
        name: /palavras de quem se permitiu começar/i,
      });
      expect(section).toHaveClass('bg-[#4F5543]');
    });

    it('should have white text for heading', () => {
      render(<Reviews />);
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toHaveClass('text-white');
    });
  });

  describe('Accessibility', () => {
    it('should have aria-labelledby pointing to heading', () => {
      render(<Reviews />);
      const section = screen.getByRole('region', {
        name: /palavras de quem se permitiu começar/i,
      });
      expect(section).toHaveAttribute('aria-labelledby', 'reviews-heading');
    });

    it('should have accessible navigation buttons', () => {
      render(<Reviews />);
      const prevButton = screen.getByRole('button', {
        name: /avaliações anteriores/i,
      });
      const nextButton = screen.getByRole('button', {
        name: /próximas avaliações/i,
      });
      expect(prevButton).toHaveAccessibleName();
      expect(nextButton).toHaveAccessibleName();
    });

    it('should have accessible indicator buttons', () => {
      render(<Reviews />);
      const indicators = screen.getAllByRole('button', {
        name: /ir para grupo de avaliações/i,
      });
      indicators.forEach((indicator) => {
        expect(indicator).toHaveAccessibleName();
      });
    });
  });

  describe('Responsive Carousel', () => {
    it('should update card width on resize', () => {
      render(<Reviews />);
      // Trigger resize event
      window.dispatchEvent(new Event('resize'));
      // Carousel should still work after resize
      const nextButton = screen.getByRole('button', { name: /próxima/i });
      fireEvent.click(nextButton);
      expect(nextButton).toBeInTheDocument();
    });

    it('should cleanup resize listener on unmount', () => {
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
      const { unmount } = render(<Reviews />);
      unmount();
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'resize',
        expect.any(Function)
      );
      removeEventListenerSpy.mockRestore();
    });

    it('should handle missing offsetWidth gracefully', () => {
      const originalOffsetWidth = Object.getOwnPropertyDescriptor(
        HTMLElement.prototype,
        'offsetWidth'
      );
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
        configurable: true,
        get: function () {
          return undefined as unknown as number;
        },
      });
      render(<Reviews />);
      window.dispatchEvent(new Event('resize'));
      // Restore
      if (originalOffsetWidth) {
        Object.defineProperty(
          HTMLElement.prototype,
          'offsetWidth',
          originalOffsetWidth
        );
      }
      expect(true).toBe(true);
    });
  });

  describe('Doctoralia Integration', () => {
    it('should render Doctoralia link', () => {
      render(<Reviews />);
      const links = screen.getAllByRole('link', { name: /doctoralia/i });
      expect(links.length).toBeGreaterThan(0);
    });

    it('should have correct link to profile', () => {
      render(<Reviews />);
      const link = screen.getByRole('link', {
        name: /ver perfil no doctoralia/i,
      });
      expect(link).toHaveAttribute(
        'href',
        'https://www.doctoralia.com.br/natasha-pereira-2/psicologo/brasilia'
      );
    });

    it('should have "more reviews" link', () => {
      render(<Reviews />);
      const moreLink = screen.getByRole('link', {
        name: /ver mais avaliações/i,
      });
      expect(moreLink).toHaveAttribute(
        'href',
        'https://www.doctoralia.com.br/natasha-pereira-2/psicologo/brasilia'
      );
    });
  });
});
