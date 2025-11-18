export function Principles() {
  const principles = [
    {
      title: "Le bien comme principe universel",
      description:
        "Le bien est considéré comme le fondement de l'univers, et toute chose tend vers un équilibre harmonieux.",
    },
    {
      title: "Le rôle du mal et de la souffrance",
      description:
        "Les épreuves, les douleurs et les injustices ne sont pas des accidents ; elles jouent un rôle dans le fonctionnement global du monde et peuvent mener à un résultat supérieur.",
    },
    {
      title: "Chaque événement a un but supérieur",
      description:
        "Même les expériences les plus difficiles participent à un dessein plus vaste, et elles peuvent offrir des leçons ou des opportunités pour progresser et évoluer.",
    },
  ];

  return (
    <section className="bg-card">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-serif font-bold text-foreground mb-12">
          Principes de l'Optimisme Philosophique
        </h3>
        <div className="grid gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="pb-8 border-b border-border last:border-0">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {principle.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
