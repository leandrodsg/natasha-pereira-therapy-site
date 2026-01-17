export default function ProblemStatement() {
  return (
    <section
      className="py-24 px-6 md:px-12 bg-white text-center"
      aria-labelledby="problem-statement-heading"
      role="region"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <h2
          id="problem-statement-heading"
          className="font-display text-4xl md:text-5xl text-foreground font-light"
        >
          Você está aqui porque <span className="italic">encontrar paz</span> é
          importante para você.
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed md:px-12">
          Para mulheres que carregam histórias, decisões, pressões, dúvidas e
          desejam se ouvir com mais força e liberdade.
        </p>
      </div>
    </section>
  );
}
