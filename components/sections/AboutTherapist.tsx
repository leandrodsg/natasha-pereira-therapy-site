import Image from 'next/image';

export function AboutTherapist() {
  return (
    <section
      id="quem-sou"
      className="w-full"
      aria-labelledby="about-heading"
      style={{
        backgroundImage: 'url(/images/sou_natasha-back.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* IMPORTANTE: padding dentro do max-w-7xl para alinhar com Hero e SoundFamiliar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-16">
        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
          {/* Conteudo - ~55% (ESQUERDA) */}
          <div className="w-full md:w-[55%] order-2 md:order-1">
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
                A busca constante por provar nosso valor, a necessidade de
                aceitação e o medo de não ser útil o suficiente, são questões
                comuns a nós, mulheres, que observo há mais de 7 anos, quando
                passei a exercer a psicologia.
              </p>
              <p>
                Como psicóloga, entendo que teoria e estudos acerca do contexto
                social caminham juntos. Minha especialização em Gestalt Terapia
                (2019) norteia meu olhar para o aqui e agora, compreendendo como
                nossas relações acontecem no contato com o outro e com o mundo.
              </p>
              <p>
                Como entusiasta da autonomia, procurei outra abordagem que
                pudesse enriquecer o tratamento dos meus pacientes. O EMDR
                (2020), uma linha que trabalha com traumas e comportamentos não
                saudáveis. Pois entendo que para sermos livres, precisamos
                desbloquear aquilo que nos prende.
              </p>
              <p>
                A minha vivência e sensibilidade, somada aos estudos,
                contribuíram para o desenvolvimento da leitura de uma
                comunicação não verbal, me permitindo alcançar aquilo que muitas
                vezes não conseguimos traduzir em palavras.
              </p>
              <p>
                Sempre tive um cuidado com mulheres, por entender que a
                estrutura da nossa sociedade nem sempre proporciona segurança
                para externalizarmos nossas vozes e sentimentos reais, o que me
                levou a uma Formação em Psicologia, voltada para a Saúde Mental
                da Mulher (2024), que me possibilita compreender como e porquê
                da dor de cada mulher.
              </p>
              <p>
                O conjunto das dimensões sociais e dos meus estudos moveram o
                meu ideal: abrir o meu próprio consultório, para criar um espaço
                seguro e livre de qualquer julgamento, para que cada mulher
                possa se enxergar, sentir o mundo do próprio jeito, desejar o
                que quiser, e, claro, ser livre.
              </p>
            </div>
          </div>

          {/* Imagem - ~45% (DIREITA) */}
          <div className="w-full md:w-[45%] order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-md md:mt-6 md:ml-8">
              <Image
                src="/images/aboutme_new.jpg"
                alt="Natasha Pereira, psicóloga especializada em terapia para mulheres"
                width={400}
                height={600}
                className="relative z-10 w-full h-auto rounded-tr-[100px] rounded-bl-[100px] object-cover"
                style={{
                  boxShadow:
                    '12px 12px 0px 0px #662B2D, 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
