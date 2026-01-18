'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    { label: 'Como Funciona', href: '#como-funciona' },
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
        className="ml-4 md:ml-6 hover:opacity-80 transition-opacity flex items-center gap-0.5 md:gap-1"
      >
        <Image
          src="/images/logo_flor.svg"
          alt="Flor decorativa"
          width={40}
          height={40}
          className="h-14 md:h-16 w-auto"
          priority
        />
        <Image
          src="/images/logo.svg"
          alt="Natasha Pereira - Psicóloga"
          width={280}
          height={60}
          className="h-12 md:h-14 w-auto"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav
        className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2"
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
      </nav>

      {/* Desktop Button */}
      <Button
        asChild
        className="hidden md:flex items-center justify-center bg-secondary text-white text-xs font-bold uppercase px-6 py-3 rounded"
      >
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          Agende sua sessão
        </a>
      </Button>

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
              className="bg-secondary text-white text-xs font-bold uppercase px-6 py-3 rounded"
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
