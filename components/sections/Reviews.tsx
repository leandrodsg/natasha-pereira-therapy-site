'use client';

import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { reviewsData, reviewsSectionContent } from '../../lib/reviews-data';

const SECTION_STYLES = {
  section: 'py-16 bg-[#4F5543] overflow-hidden',
  container: 'max-w-7xl mx-auto px-6 md:px-12',
  header: 'text-center mb-12',
  heading:
    'font-display text-3xl md:text-5xl text-white font-light max-w-4xl mx-auto leading-tight',
  grid: 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start justify-center max-w-[950px] mx-auto',
  imageColumn: 'flex justify-center',
  imageWrapper:
    'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-[450px] lg:h-[240px]',
  carouselColumn: 'relative w-full',
  carouselWrapper: 'relative w-full max-w-[450px] mx-auto',
  carouselContainer: 'relative overflow-hidden rounded-xl',
  carouselInner:
    'flex transition-transform duration-500 ease-in-out touch-pan-x',
  reviewCard:
    'flex-shrink-0 w-full bg-white rounded-xl p-4 md:p-5 shadow-md border border-gray-100 h-[280px] md:h-[240px] flex flex-col box-border',
  reviewHeader: 'flex items-start gap-4 mb-4',
  avatar:
    'w-12 h-12 rounded-full bg-teal-700 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0',
  reviewerInfo: 'flex-1 min-w-0',
  reviewerTop: 'flex items-start justify-between gap-2 mb-2',
  reviewerLeft: 'flex-1 min-w-0',
  reviewerName: 'font-semibold text-gray-900 text-base',
  verifiedBadge:
    'text-[10px] uppercase bg-gray-100 text-gray-600 px-2 py-1 rounded mt-1 inline-block font-medium tracking-wide',
  rating: 'flex items-center gap-0.5 flex-shrink-0',
  reviewComment:
    'text-gray-700 leading-relaxed text-[15px] max-h-[120px] overflow-hidden',
  reviewFooter: 'mt-4 pt-4 border-t border-gray-100',
  reviewDate: 'text-xs text-gray-500',
  navButton:
    'hidden md:flex absolute top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110 z-10',
  prevButton: 'left-2 md:-left-14',
  nextButton: 'right-2 md:-right-14',
  moreLink: 'text-center mt-4 max-w-3xl mx-auto',
  moreLinkText:
    'text-white/80 hover:text-white hover:underline text-base leading-relaxed transition-colors',
  indicators: 'flex justify-center gap-2 mt-6',
  indicator:
    'w-12 h-12 rounded-full transition-all cursor-pointer hover:scale-110 flex items-center justify-center',
  indicatorDot: 'w-2.5 h-2.5 rounded-full',
} as const;

function ReviewCard({ review }: { review: (typeof reviewsData)[0] }) {
  const initials = review.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={SECTION_STYLES.reviewCard}>
      <div className={SECTION_STYLES.reviewHeader}>
        <div className={SECTION_STYLES.avatar}>{initials}</div>
        <div className={SECTION_STYLES.reviewerInfo}>
          <div className={SECTION_STYLES.reviewerTop}>
            <div className={SECTION_STYLES.reviewerLeft}>
              <p className={SECTION_STYLES.reviewerName}>{review.name}</p>
              {review.verified && (
                <span className={SECTION_STYLES.verifiedBadge}>
                  Opinião verificada
                </span>
              )}
            </div>
            <div className={SECTION_STYLES.rating}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  data-testid="star-icon"
                  className={`w-4 h-4 ${
                    i < review.rating
                      ? 'fill-teal-500 text-teal-500'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className={SECTION_STYLES.reviewComment}>{review.comment}</p>
      <div className={SECTION_STYLES.reviewFooter}>
        <p className={SECTION_STYLES.reviewDate}>{review.date}</p>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const CARDS_PER_VIEW = 1;
  const totalSlides = reviewsData.length;

  useEffect(() => {
    const updateCardWidth = () => {
      const width = containerRef.current?.offsetWidth ?? 0;
      setCardWidth(width);
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + CARDS_PER_VIEW) % totalSlides);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - CARDS_PER_VIEW;
      return newIndex < 0 ? totalSlides - CARDS_PER_VIEW : newIndex;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const distance = touchStartX - endX;
    const isLeftSwipe = distance >= 50;
    const isRightSwipe = distance <= -50;

    if (isLeftSwipe) {
      nextReview();
    }
    if (isRightSwipe) {
      prevReview();
    }
  };

  return (
    <section
      id="avaliacoes"
      className={SECTION_STYLES.section}
      aria-labelledby="reviews-heading"
    >
      <div className={SECTION_STYLES.container}>
        {/* Header */}
        <div className={SECTION_STYLES.header}>
          <h2 id="reviews-heading" className={SECTION_STYLES.heading}>
            {reviewsSectionContent.heading}
          </h2>
        </div>

        {/* Grid: Image + Carousel */}
        <div className={SECTION_STYLES.grid}>
          {/* Image Column */}
          <div className={SECTION_STYLES.imageColumn}>
            <a
              href="https://www.doctoralia.com.br/natasha-pereira-2/psicologo/brasilia"
              target="_blank"
              rel="noopener noreferrer"
              className={SECTION_STYLES.imageWrapper}
              aria-label="Ver perfil no Doctoralia"
            >
              <Image
                src="/images/doctoralia.png"
                alt="Badge Doctoralia - Natasha Pereira"
                width={450}
                height={240}
                className="w-full h-full object-cover"
                priority
              />
            </a>
          </div>

          {/* Carousel Column */}
          <div className={SECTION_STYLES.carouselColumn}>
            <div className={SECTION_STYLES.carouselWrapper}>
              <div
                ref={containerRef}
                className={SECTION_STYLES.carouselContainer}
              >
                <div
                  className={SECTION_STYLES.carouselInner}
                  style={{
                    transform: `translateX(-${currentIndex * cardWidth}px)`,
                  }}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  data-testid="carousel-inner"
                >
                  {reviewsData.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                type="button"
                onClick={prevReview}
                className={`${SECTION_STYLES.navButton} ${SECTION_STYLES.prevButton}`}
                aria-label="Avaliações anteriores"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                type="button"
                onClick={nextReview}
                className={`${SECTION_STYLES.navButton} ${SECTION_STYLES.nextButton}`}
                aria-label="Próximas avaliações"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Indicators */}
            <div className={SECTION_STYLES.indicators}>
              {[...Array(Math.ceil(totalSlides / CARDS_PER_VIEW))].map(
                (_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setCurrentIndex(index * CARDS_PER_VIEW)}
                    className={SECTION_STYLES.indicator}
                    aria-label={`Ir para grupo de avaliações ${index + 1}`}
                  >
                    <div
                      className={`${SECTION_STYLES.indicatorDot} ${
                        Math.floor(currentIndex / CARDS_PER_VIEW) === index
                          ? 'bg-white'
                          : 'bg-white/30'
                      }`}
                    />
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Link centralizado fora do grid */}
        <div className="text-center mt-8 w-full">
          <a
            href="https://www.doctoralia.com.br/natasha-pereira-2/psicologo/brasilia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white hover:underline text-base leading-relaxed transition-colors"
          >
            Ver mais avaliações no Doctoralia
          </a>
        </div>
      </div>
    </section>
  );
}
