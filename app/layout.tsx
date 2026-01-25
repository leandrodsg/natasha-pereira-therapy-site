import type { Metadata } from 'next';
import { Sorts_Mill_Goudy, Lora, Inter, Allura } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { SkipLink } from '@/components/SkipLink';

const sortsMillGoudy = Sorts_Mill_Goudy({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400'],
});

const lora = Lora({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const allura = Allura({
  variable: '--font-logo',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Natasha Pereira - Psicóloga',
  description:
    'Site pessoal da psicóloga Natasha Pereira. Atendimento terapêutico profissional e acolhedor.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${sortsMillGoudy.variable} ${lora.variable} ${inter.variable} ${allura.variable} antialiased bg-background`}
      >
        <SkipLink />
        <Header />
        {children}
      </body>
    </html>
  );
}
