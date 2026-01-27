'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { env } from '@/lib/env';

const LOGO_SIZES = {
  flower: { width: 40, height: 40 },
  text: { width: 280, height: 60 },
} as const;

const SCROLL_THRESHOLD = 100;

const NAV_LINKS = [
  { label: 'Sobre', href: '#quem-sou' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Opiniões', href: '#avaliacoes' },
  { label: 'Dúvidas', href: '#faq' },
] as const;

const HEADER_STYLES = {
  base: 'w-full py-3 px-6 md:px-12 flex justify-between items-center fixed top-0 z-50 bg-[#f4eee5]/95 backdrop-blur-sm border-b border-transparent transition-transform duration-300',
  link: 'text-xs font-semibold uppercase tracking-widest text-[#662B2D] hover:text-[#662B2D]/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#662B2D] rounded whitespace-nowrap',
  button:
    'bg-[#662B2D] text-white text-xs font-bold uppercase px-6 py-3 rounded hover:bg-[#662B2D]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#662B2D]',
} as const;

function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldBeVisible =
        currentScrollY < lastScrollY.current ||
        currentScrollY < SCROLL_THRESHOLD;

      setIsVisible(shouldBeVisible);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isVisible;
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isVisible = useScrollVisibility();
  const menuRef = useRef<HTMLDivElement>(null);

  const whatsappLink = getWhatsAppLink(env.NEXT_PUBLIC_WHATSAPP_NUMBER);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      ref={menuRef}
      className={`${HEADER_STYLES.base} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      role="banner"
    >
      <Link
        href="#"
        onClick={scrollToTop}
        className="ml-4 md:ml-6 hover:opacity-80 transition-opacity flex items-center gap-0.5 md:gap-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#662B2D] rounded"
        aria-label="Voltar ao topo da página"
      >
        <Image
          src="/images/logo_flor.svg"
          alt="Ícone decorativo de flor"
          width={LOGO_SIZES.flower.width}
          height={LOGO_SIZES.flower.height}
          className="h-10 md:h-12 w-auto"
          priority
        />
        <Image
          src="/images/logo.svg"
          alt="Natasha Pereira - Psicóloga"
          width={LOGO_SIZES.text.width}
          height={LOGO_SIZES.text.height}
          className="h-9 md:h-11 w-auto"
          priority
        />
      </Link>

      <nav
        className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2"
        role="navigation"
        aria-label="Navegação principal"
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className={HEADER_STYLES.link}>
            {link.label}
          </a>
        ))}
      </nav>

      <Button
        asChild
        className={`hidden md:flex items-center justify-center ${HEADER_STYLES.button}`}
      >
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          Agende sua sessão
        </a>
      </Button>

      <button
        className="md:hidden text-[#662B2D] p-2 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#662B2D]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-[#f4eee5] border-b border-[#662B2D]/10 md:hidden shadow-lg"
        >
          <nav
            className="flex flex-col gap-4 p-6"
            role="navigation"
            aria-label="Menu mobile"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={HEADER_STYLES.link}
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className={HEADER_STYLES.button}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                Vamos conversar?
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
