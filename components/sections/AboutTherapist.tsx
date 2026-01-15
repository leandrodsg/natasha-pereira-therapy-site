import Image from 'next/image';

export function AboutTherapist() {
  return (
    <section
      className="about-therapist py-16 md:py-24 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="about-image order-2 md:order-1">
            <Image
              src="/images/_DSC9840.jpg"
              alt="Natasha Pereira - Psicóloga"
              width={692}
              height={1038}
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="about-content order-1 md:order-2">
            <h2
              id="about-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Olá, sou Natasha Pereira.
            </h2>
            <h3 className="text-lg md:text-xl text-gray-700 mb-6 italic">
              Sou uma psicóloga que não tem dúvidas: crio espaços seguros para
              que mulheres possam se libertar e ocupar, enfim, o lugar que
              merecem.
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Formada em 2019, minha trajetória profissional foi moldada pela
                compreensão de uma dinâmica que, vivida na pele, percebo ser
                comum a tantas mulheres: a busca constante por provar nosso
                valor, a necessidade de aceitação e o medo de não ser útil o
                suficiente.
              </p>
              <p>
                Sempre fui movida por causas e acolhimento. Meus anos de
                voluntariado e trabalho com equoterapia me ensinaram a escutar
                para além das palavras. Mas foi na clínica que encontrei meu
                lugar de realização: o espaço onde transformo essa sensibilidade
                em um cuidado técnico e humano.
              </p>
              <p>
                Lutar por causas diz sobre mim e sobre meu trabalho. Acredito
                que a transformação estrutural da nossa sociedade acontece no
                coletivo, mas é no campo individual que encontramos espaço e
                sustentação para ela. No consultório, construímos uma relação de
                confiança, clareza e não julgamento.
              </p>
              <p>
                Trabalhar com mulheres faz sentido porque a liberdade é o que me
                guia. Aqui, não há o como deveria ser, mas espaço para se
                enxergar, sentir o mundo do próprio jeito e desejar o que
                quiser. Te acompanho na escolha que faz sentido para você.
              </p>
              <p>
                Sou uma psicóloga que não tem dúvidas: crio espaços seguros para
                que mulheres possam se libertar e ocupar, enfim, o lugar que
                merecem.
              </p>
            </div>
            <a
              href="#about"
              className="inline-block mt-6 text-primary hover:text-primary-dark font-medium underline decoration-2 underline-offset-4 transition-colors"
            >
              Saiba mais sobre mim
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
