'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { env } from '@/lib/env';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const whatsappLink = getWhatsAppLink(env.NEXT_PUBLIC_WHATSAPP_NUMBER);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Quem sou', href: '#quem-sou' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '#contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full py-6 px-6 md:px-12 flex justify-between items-center fixed top-0 z-50
                  bg-background/95 backdrop-blur-sm border-b border-transparent
                  transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      role="banner"
    >
      <Link
        href="/"
        className="font-display text-3xl tracking-widest uppercase font-semibold text-foreground hover:opacity-80 transition-opacity"
      >
        Natasha
      </Link>

      {/* Desktop Navigation */}
      <nav
        className="hidden md:flex items-center gap-8"
        role="navigation"
        aria-label="Navegação principal"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs font-semibold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
        <Button
          asChild
          className="bg-primary text-white text-xs font-bold uppercase px-6 py-3 rounded"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Vamos conversar?
          </a>
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
          <nav
            className="flex flex-col gap-4 p-6"
            role="navigation"
            aria-label="Menu mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-primary text-white text-xs font-bold uppercase px-6 py-3 rounded"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
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
