import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import garrafeiraImg from "@/assets/garrafeira.jpg";

export const Route = createFileRoute("/garrafeira")({
  head: () => ({
    meta: [
      { title: "Garrafeira · Casa Arouquesa" },
      { name: "description", content: "Vinhos do Dão em destaque, grandes regiões portuguesas, internacionais e champanhes de prestígio. Servidos em copos Riedel & Spiegelau." },
      { property: "og:title", content: "Garrafeira · Casa Arouquesa" },
      { property: "og:description", content: "Curadoria de vinhos do Dão, regiões portuguesas, internacionais e champanhes para a carne Arouquesa." },
      { property: "og:image", content: garrafeiraImg },
      { property: "og:url", content: "/garrafeira" },
    ],
    links: [{ rel: "canonical", href: "/garrafeira" }],
  }),
  component: Page,
});

const regions = [
  {
    name: "Dão",
    tag: "Em destaque",
    tagColor: "text-gold",
    desc: "A nossa casa fica em Viseu, coração do Dão. É natural que esta região ocupe o lugar de honra na garrafeira. Vinhos de altitude, solos graníticos e castas autóctones como a Touriga Nacional, Jaen e Encruzado produzem aqui alguns dos tintos mais elegantes e dos brancos mais estruturados de Portugal. Harmonizam em perfeição com a delicadeza da carne Arouquesa.",
    highlight: "Harmonização ideal com Bife Arouquês e Vitela no forno.",
  },
  {
    name: "Douro",
    tag: "Grande clássico",
    tagColor: "text-bone/50",
    desc: "O vale do Douro produz tintos de estrutura e profundidade que complementam os cortes mais intensos da Arouquesa — a posta na brasa, a peça assada lentamente. A nossa seleção foca-se em produtores de referência com lotes de vinhas velhas.",
    highlight: "Harmonização ideal com Posta Arouquesa na brasa.",
  },
  {
    name: "Alentejo",
    tag: "Seleção de autor",
    tagColor: "text-bone/50",
    desc: "Do Alentejo trazemos à mesa vinhos de carácter — encorpados, com fruta madura e taninos sedosos. Escolhas de casas que privilegiam a qualidade sobre a produção em massa.",
    highlight: "Harmonização ideal com entradas e pratos de sabor intenso.",
  },
  {
    name: "Champagne & Espumantes",
    tag: "Para celebrar",
    tagColor: "text-bone/50",
    desc: "Uma garrafeira de requinte não dispensa Champagne. Mantemos uma seleção de casas de prestígio para abrir uma refeição ou celebrar uma ocasião. Completamos com os melhores espumantes nacionais — Bairrada e Távora-Varosa em destaque.",
    highlight: "Ideais para aperitivo, celebrações e jantares de grupo.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Garrafeira"
        title="Uma das melhores cartas de vinhos do país"
        lede="Dão em destaque, grandes regiões portuguesas e champanhes de prestígio — cada garrafa escolhida para honrar a carne Arouquesa."
      />

      <section className="px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src={garrafeiraImg}
                alt="Bar e garrafeira da Casa Arouquesa"
                width={1920} height={820}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl">

          <Reveal>
            <div className="text-center mb-20">
              <p className="text-bone/70 text-lg leading-relaxed max-w-2xl mx-auto">
                A carta de vinhos da Casa Arouquesa nasceu da convicção de que uma boa refeição merece um bom vinho — e que um bom vinho merece o copo certo. Por isso servimos a nossa seleção em{" "}
                <span className="text-gold font-medium">copos premium Riedel & Spiegelau</span>,
                {" "}porque o copo também faz o vinho.
              </p>
            </div>
          </Reveal>

          <div className="space-y-0">
            {regions.map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-16 items-start border-t border-gold/15 py-14">
                  <div>
                    <span className={`text-[0.7rem] tracking-[0.2em] uppercase font-medium ${r.tagColor}`}>{r.tag}</span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl text-bone">{r.name}</h2>
                  </div>
                  <div>
                    <p className="text-bone/70 text-lg leading-relaxed">{r.desc}</p>
                    <p className="mt-5 text-sm text-gold/80 italic">{r.highlight}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="border-t border-gold/15 pt-14 mt-4 bg-charcoal-soft -mx-6 lg:-mx-12 px-6 lg:px-12 py-14">
              <div className="max-w-2xl mx-auto text-center">
                <p className="eyebrow">Para grupos e eventos</p>
                <h3 className="mt-4 font-display text-3xl md:text-4xl text-bone">Harmonizações à medida</h3>
                <p className="mt-5 text-bone/65 text-lg leading-relaxed">
                  Para jantares de grupo e eventos na Sala Privada, desenhamos harmonizações personalizadas — um vinho para cada prato, escolhido pela nossa equipa para tornar a experiência inesquecível.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
