import React from 'react';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { env } from '@/lib/env';

const Footer: React.FC = () => {
  const whatsappLink = getWhatsAppLink(env.NEXT_PUBLIC_WHATSAPP_NUMBER);
  const instagramLink = `https://instagram.com/${env.NEXT_PUBLIC_INSTAGRAM_HANDLE}`;

  return (
    <footer
      id="rodape"
      role="contentinfo"
      className="bg-gray-900 text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Logo and Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Natasha Pereira</h2>
          <p className="text-gray-300">
            Psicóloga especializada em terapia para mulheres.
          </p>
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-pink-400 hover:text-pink-300 transition-colors"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>

        {/* Right Column: Contact and Navigation */}
        <div className="space-y-6">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
                aria-label="WhatsApp: +55 61 98144-8553"
              >
                WhatsApp: +55 61 98144-8553
              </a>
              <a
                href={`mailto:${env.NEXT_PUBLIC_EMAIL}`}
                className="block hover:text-white transition-colors"
                aria-label={`Email: ${env.NEXT_PUBLIC_EMAIL}`}
              >
                Email: {env.NEXT_PUBLIC_EMAIL}
              </a>
              <p>
                Endereço: SEPS 705/905 Bloco A - Centro Empresarial Santa Cruz -
                Sala 427, Asa Sul, Brasília 70390-055
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Navegação</h3>
            <nav>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="#inicio"
                    className="hover:text-white transition-colors"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#quem-sou"
                    className="hover:text-white transition-colors"
                  >
                    Quem sou
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="hover:text-white transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 col-span-full text-center">
        <p className="text-gray-400">© 2025 Natasha Pereira | CRP 01/22302</p>
      </div>
    </footer>
  );
};

export default Footer;
