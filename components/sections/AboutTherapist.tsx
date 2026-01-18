import Image from 'next/image';

export function AboutTherapist() {
  return (
    <section
      id="quem-sou"
      className="py-24 px-6 md:px-12 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="about-content order-1 md:order-1">
            <span className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
              Olá, sou Natasha.
            </span>
            <h2
              id="about-heading"
              className="font-display text-4xl md:text-5xl text-foreground font-light mb-8"
            >
              Acredito que você tem o poder de criar um{' '}
              <span className="italic">refúgio seguro</span> dentro de si mesma.
            </h2>
            <div className="space-y-6 text-muted-foreground">
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
          </div>
          <div className="about-image order-2 md:order-2">
            <Image
              src="/images/sou_natasha.png"
              alt="Natasha Pereira, psicóloga especializada em terapia para mulheres"
              width={500}
              height={750}
              className="w-full h-auto rounded-tr-[100px] rounded-bl-[100px] shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
