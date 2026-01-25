import { CREDENTIALS } from '@/lib/credentials-data';

const CARD_STYLES =
  'bg-[#C58C77]/35 backdrop-blur-sm rounded-2xl p-6 border border-[#C58C77]/20 hover:bg-[#C58C77]/50 focus-within:bg-[#C58C77]/50 focus-within:outline focus-within:outline-2 focus-within:outline-[#f4eee5] transition-all duration-300';

export function Credentials() {
  return (
    <section
      className="w-full bg-[#662B2D]"
      aria-label="Credenciais e experiência"
      aria-labelledby="credentials-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h2 id="credentials-heading" className="sr-only">
          Credenciais e Experiência Profissional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {CREDENTIALS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className={CARD_STYLES}
                tabIndex={0}
                role="article"
                aria-labelledby={`credential-${item.id}-title`}
              >
                <div className="mb-4" aria-hidden="true">
                  <Icon className="w-8 h-8 text-[#f4eee5]" strokeWidth={1.5} />
                </div>
                <h3
                  id={`credential-${item.id}-title`}
                  className="font-display text-lg md:text-xl text-[#f4eee5] font-medium mb-3"
                >
                  {item.title}
                </h3>
                <p className="text-[#f4eee5]/90 text-sm leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
