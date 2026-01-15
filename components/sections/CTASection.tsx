import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section
      id="contato"
      className="cta-final py-16 md:py-24 bg-gradient-to-br from-accent-light to-accent-dark"
    >
      <div className="cta-content text-center max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
          Você não precisa continuar se anulando para dar conta de tudo.
        </h2>
        <p
          id="cta-description"
          className="text-base md:text-lg text-black mb-8 max-w-2xl mx-auto"
        >
          Agende sua sessão e comece a se ouvir com mais força e liberdade.
        </p>
        <Button
          size="lg"
          className="cta-button-primary"
          aria-describedby="cta-description"
        >
          Agende sua sessão
        </Button>
      </div>
    </section>
  );
}
