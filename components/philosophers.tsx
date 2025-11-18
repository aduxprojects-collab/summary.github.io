export function Philosophers() {
  const philosophers = [
    {
      name: "Gottfried Wilhelm Leibniz",
      years: "(1646–1716)",
      description:
        "Philosophe et mathématicien allemand du siècle des Lumières, pionnier de l'optimisme philosophique. Selon lui, nous vivons dans « le meilleur des mondes possibles » car Dieu, étant parfait et sage, a choisi un monde le plus harmonieux et équilibré.",
    },
    {
      name: "Alexander Gottlieb Baumgarten",
      years: "(1714–1762)",
      description:
        "Philosophe allemand reconnu pour avoir fondé l'esthétique moderne. Il complète la pensée de Leibniz en considérant que la beauté et les émotions font partie intégrante de la connaissance humaine, montrant que comprendre le monde dépasse la pure raison.",
    },
    {
      name: "Voltaire",
      years: "(1694–1778)",
      description:
        "Philosophe et écrivain français célèbre pour sa critique de l'optimisme de Leibniz. Dans son roman satirique Candide, il met en lumière la souffrance, l'absurdité et les injustices du monde, démontrant que l'optimisme aveugle peut être dangereux.",
    },
    {
      name: "Immanuel Kant",
      years: "(1724–1804)",
      description:
        "Grand philosophe allemand qui approfondit la réflexion sur la raison humaine et la morale. Il souligne le devoir moral plutôt que le bonheur, et sa distinction entre le monde sensible et le monde intelligible met en avant l'importance des principes universels.",
    },
    {
      name: "Ernst Bloch",
      years: "(1885–1977)",
      description:
        "Philosophe allemand de l'école marxiste intéressé par l'espoir et l'avenir. Son « Principe d'espoir » montre que les rêves, l'aspiration et l'action sont essentiels pour transformer le monde et créer la justice sociale.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-serif font-bold text-foreground mb-12">
        Les Philosophes de l'Optimisme
      </h3>
      <div className="space-y-10">
        {philosophers.map((philosopher, index) => (
          <div key={index} className="pb-8 border-b border-border last:border-0">
            <div className="mb-3">
              <h4 className="text-lg font-semibold text-foreground">
                {philosopher.name}
                <span className="text-muted-foreground font-normal ml-2">
                  {philosopher.years}
                </span>
              </h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {philosopher.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
