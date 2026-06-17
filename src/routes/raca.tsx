import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import racaImg from "@/assets/raca-arouquesa.jpg";

export const Route = createFileRoute("/raca")({
  head: () => ({
    meta: [
      { title: "A Raça Arouquesa · Casa Arouquesa" },
      { name: "description", content: "Da Serra da Freita à brasa: a história da raça autóctone Arouquesa D.O.P., as suas pastagens, a maturação e o que a torna a melhor carne de Portugal." },
      { property: "og:title", content: "A Raça Arouquesa · Casa Arouquesa" },
      { property: "og:description", content: "Da Serra da Freita à brasa: a história da raça autóctone Arouquesa D.O.P." },
      { property: "og:url", content: "/raca" },
    ],
    links: [{ rel: "canonical", href: "/raca" }],
  }),
  component: Page,
});

const chapters = [
  {
    eyebrow: "Origem",
    title: "Das serras do Noroeste",
    body: "A raça Arouquesa é uma das mais antigas raças bovinas autóctones de Portugal, criada nas encostas húmidas e frescas da Serra da Freita e do Montemuro, no coração do Entre-Douro-e-Minho. Durante séculos, estes animais adaptaram-se a um terreno acidentado e a uma alimentação única — pasto natural, ervas silvestres e água das nascentes de montanha — o que moldou uma carne com características inigualáveis.",
  },
  {
    eyebrow: "Denominação de Origem Protegida",
    title: "Uma carne com identidade legal",
    body: "A Carne Arouquesa é uma das poucas carnes bovinas portuguesas com Denominação de Origem Protegida (D.O.P.) atribuída pela União Europeia. Este selo garante que o animal nasceu, foi criado e abatido numa região geográfica delimitada — os concelhos de Arouca, Castelo de Paiva, Cinfães, Resende, entre outros — seguindo normas rígidas de bem-estar animal e alimentação natural. A D.O.P. não é um rótulo de marketing: é a prova de que cada peça tem origem, nome e responsabilidade.",
  },
  {
    eyebrow: "Características",
    title: "O que a torna diferente",
    body: "A vitela Arouquesa é abatida jovem — entre os 8 e os 12 meses — o que lhe confere uma carne de cor rosa pálido a vermelho claro, de textura extraordinariamente macia e sabor delicado, com uma gordura de infiltração fina e uniforme. Não tem a intensidade de uma carne maturada de longa duração, mas tem algo que poucos produtos têm: pureza. Cada garfo comunica o que o animal comeu, onde viveu e como foi tratado.",
  },
  {
    eyebrow: "Da serra à brasa",
    title: "O papel da Casa Arouquesa",
    body: "Desde 1998 que a Casa Arouquesa se dedica a valorizar esta raça na mesa. Trabalhamos com produtores da região de origem, selecionamos os animais com rigor e confecionamos a carne com respeito pela sua natureza. A posta arouquesa na brasa de carvão, a vitela assada lentamente no forno, o bife à casa com o molho que é cartão-de-visita — cada prato é uma homenagem ao que a terra e os animais produziram. A melhor carne é Arouquesa. E a melhor forma de a provar é aqui.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="A Raça"
        title="A nobreza de uma raça autóctone"
        lede="Da Serra da Freita à brasa: a história de uma raça que se recusa a ser banal."
      />

      <section className="py-16 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="aspect-[16/7] overflow-hidden">
              <img
                src={racaImg}
                alt="Vaca Arouquesa em pastagem na Serra da Freita"
                width={1600}
                height={700}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 pb-32 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <blockquote className="text-center font-display italic text-3xl md:text-4xl text-bone/85 leading-snug mb-20">
            "A melhor carne é Arouquesa."
          </blockquote>

          <div className="space-y-20">
            {chapters.map((ch, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-16 items-start border-t border-gold/15 pt-10">
                  <div>
                    <p className="eyebrow">{ch.eyebrow}</p>
                    <h2 className="mt-4 font-display text-2xl md:text-3xl text-bone leading-tight">{ch.title}</h2>
                  </div>
                  <p className="text-bone/70 text-lg leading-relaxed">{ch.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-24 border-t border-gold/15 pt-14 text-center">
              <p className="eyebrow">Próximo passo</p>
              <h3 className="mt-4 font-display text-3xl md:text-4xl text-bone">Pronto a provar?</h3>
              <p className="mt-5 text-bone/65 text-lg max-w-xl mx-auto">Reserve a sua mesa e descubra na prática o que distingue a Arouquesa de tudo o resto.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/ementa" className="inline-flex items-center gap-2 px-7 py-3.5 text-[0.78rem] tracking-[0.22em] uppercase font-medium border border-gold/50 text-gold hover:border-gold hover:bg-gold/5 transition-all">
                  Ver a Ementa →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
