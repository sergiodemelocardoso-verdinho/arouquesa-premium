import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { GoldButton } from "@/components/GoldButton";
import { waLink } from "@/lib/site";
import salaPrivadaImg from "@/assets/sala-privada.jpg";
import salaMesa from "@/assets/sala-privada-mesa.jpg";
import sala3 from "@/assets/sala-3.jpg";

export const Route = createFileRoute("/sala-privada")({
  head: () => ({
    meta: [
      { title: "Sala Privada & Grupos · Casa Arouquesa" },
      { name: "description", content: "Sala privada para eventos de empresa, jantares de grupo e celebrações em Viseu. Mesa imperial de mármore negro, projeção, menus personalizáveis e harmonização de vinhos com uma selecção de copos Riedel & Spiegelau." },
      { property: "og:title", content: "Sala Privada & Grupos · Casa Arouquesa" },
      { property: "og:description", content: "Eventos corporativos, jantares de grupo e celebrações na sala privada da Casa Arouquesa." },
      { property: "og:image", content: salaPrivadaImg },
      { property: "og:url", content: "/sala-privada" },
    ],
    links: [{ rel: "canonical", href: "/sala-privada" }],
  }),
  component: Page,
});

const features = [
  { icon: "—", label: "Mesa imperial de mármore negro, até 28 pessoas em configuração de gala" },
  { icon: "—", label: "3 mesas individuais com até 10 pessoas por mesa" },
  { icon: "—", label: "Projeção integrada para apresentações" },
  { icon: "—", label: "Sala totalmente reservada e privada" },
  { icon: "—", label: "Menus de grupo personalizáveis" },
  { icon: "—", label: "Harmonização de vinhos à medida" },
  { icon: "—", label: "Uma seleção premium de copos Riedel & Spiegelau" },
  { icon: "—", label: "Serviço dedicado durante todo o evento" },
];

const occasions = [
  {
    title: "Eventos corporativos",
    desc: "Almoços e jantares de empresa, reuniões de direção, celebrações de equipa. A sala dispõe de projeção integrada para apresentações — o ambiente premium eleva qualquer momento de negócio.",
  },
  {
    title: "Jantares de grupo",
    desc: "Aniversários, despedidas de solteiro, reuniões de família ou de amigos. Um espaço reservado onde a conversa flui sem o ruído da sala principal e o serviço é inteiramente dedicado ao seu grupo.",
  },
  {
    title: "Celebrações especiais",
    desc: "Datas que merecem mais do que uma mesa comum. Desenhamos a experiência à medida — da escolha dos pratos à seleção de vinhos, passando pela decoração e até um menu impresso personalizado.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Sala Privada & Grupos"
        title="Um espaço que está à altura da ocasião"
        lede="Exclusividade, serviço dedicado e menus personalizáveis — para empresas, grupos e celebrações que merecem mais."
      >
        <div className="mt-10 flex justify-center">
          <GoldButton
            href={waLink("Olá! Gostaria de pedir um orçamento para um evento na sala privada da Casa Arouquesa.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir orçamento por WhatsApp
          </GoldButton>
        </div>
      </PageHero>

      <section className="px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={salaPrivadaImg}
                alt="Sala privada da Casa Arouquesa preparada para jantar de gala"
                width={1600} height={900}
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
            <p className="text-bone/70 text-lg leading-relaxed max-w-2xl mx-auto text-center mb-20">
              A Sala Privada da Casa Arouquesa é um espaço autónomo dentro do restaurante — com entrada reservada, mesa imperial de mármore negro, iluminação de ambiente e projeção integrada. Um cenário que honra qualquer ocasião, seja ela profissional ou pessoal.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
            <Reveal>
              <div className="aspect-[3/4] overflow-hidden">
                <img src={salaMesa} alt="Mesa da sala privada da Casa Arouquesa com copos Riedel" width={900} height={1200} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="py-8">
                <p className="eyebrow">O espaço</p>
                <h2 className="mt-4 font-display text-3xl md:text-4xl text-bone">Cada detalhe pensado</h2>
                <div className="mt-10 space-y-4">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-4 text-bone/70">
                      <span className="text-gold mt-0.5 shrink-0">{f.icon}</span>
                      <span className="text-base leading-relaxed">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="border-t border-gold/15 pt-20 mb-24">
            <Reveal>
              <p className="eyebrow text-center mb-12">Para que ocasião?</p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-10">
              {occasions.map((o, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="border-t-2 border-gold/30 pt-7">
                    <h3 className="font-display text-2xl text-bone mb-4">{o.title}</h3>
                    <p className="text-bone/65 leading-relaxed">{o.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="aspect-[16/7] overflow-hidden mb-24">
              <img src={sala3} alt="Sala privada em evento corporativo com projeção" width={1600} height={700} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>

          <Reveal>
            <div className="text-center bg-charcoal-soft -mx-6 lg:-mx-12 px-6 lg:px-12 py-16">
              <p className="eyebrow">Reservar a sala</p>
              <h3 className="mt-4 font-display text-3xl md:text-4xl text-bone">Fale connosco</h3>
              <p className="mt-5 text-bone/65 text-lg max-w-xl mx-auto leading-relaxed">
                Diga-nos a data, o número de pessoas e o tipo de ocasião. Tratamos de tudo — desde o menu à harmonização de vinhos.
              </p>
              <div className="mt-8">
                <GoldButton
                  href={waLink("Olá! Gostaria de pedir um orçamento para um evento na sala privada da Casa Arouquesa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir orçamento por WhatsApp
                </GoldButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
