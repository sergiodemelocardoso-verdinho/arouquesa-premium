import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldButton } from "@/components/GoldButton";
import { SITE, waLink, telLink } from "@/lib/site";

import heroBrasa from "@/assets/hero-brasa.jpg";
import dishPosta from "@/assets/dish-posta.jpg";
import dishVitela from "@/assets/dish-vitela.jpg";
import dishBife from "@/assets/dish-bife.jpg";
import racaImg from "@/assets/raca-arouquesa.jpg";
import garrafeiraImg from "@/assets/garrafeira.jpg";
import salaPrivadaImg from "@/assets/sala-privada.jpg";
import sala1 from "@/assets/sala-1.jpg";
import sala2 from "@/assets/sala-2.jpg";
import sala3 from "@/assets/sala-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Arouquesa · A arte da brasa, a nobreza da raça · Viseu" },
      {
        name: "description",
        content:
          "Restaurante em Repeses, Viseu, dedicado à autêntica carne Arouquesa D.O.P. sobre a brasa. Garrafeira do Dão, sala privada para empresas e reservas diretas por WhatsApp.",
      },
      { property: "og:title", content: "Casa Arouquesa · A arte da brasa, a nobreza da raça" },
      {
        property: "og:description",
        content:
          "A autêntica carne Arouquesa D.O.P. sobre a brasa, em Repeses, Viseu. Garrafeira do Dão e sala privada para empresas.",
      },
      { property: "og:image", content: heroBrasa },
      { property: "og:url", content: "/" },
      { name: "twitter:image", content: heroBrasa },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const { t } = useTranslation();

  const specialties = [
    { img: dishPosta, key: "posta" },
    { img: dishVitela, key: "vitela" },
    { img: dishBife, key: "bife" },
  ] as const;

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBrasa}
            alt="Posta Arouquesa sobre brasa de carvão"
            width={1920}
            height={1080}
            className="h-full w-full object-cover hero-zoom"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/55 to-charcoal" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-12 pb-24 pt-40">
          <Reveal>
            <p className="eyebrow">{t("hero.eyebrow")}</p>
            <h1 className="mt-6 font-display text-bone text-balance text-[3rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[6rem]">
              <span className="block">{t("hero.title1")}</span>
              <span className="block italic text-gold">{t("hero.title2")}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-bone/75">
              {t("hero.subtitle")}
            </p>
          </Reveal>
          <Reveal delay={400}>
            <nav aria-label="Destaques" className="mt-12 max-w-xl grid sm:grid-cols-3 border-t border-gold/20">
              {[
                { to: "/ementa", key: "ementa" },
                { to: "/garrafeira", key: "garrafeira" },
                { to: "/sala-privada", key: "sala" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex items-center justify-between gap-4 py-4 sm:py-5 sm:px-5 sm:first:pl-0 border-b border-gold/15 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 hover:bg-gold/5 transition-colors"
                >
                  <span className="font-display text-xl md:text-2xl text-bone group-hover:text-gold transition-colors">
                    {t(`nav.${item.key}`)}
                  </span>
                  <span aria-hidden className="text-gold text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </nav>
          </Reveal>
        </div>

        <a
          href="#especialidades"
          aria-label={t("hero.scroll")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-gold/70 hover:text-gold animate-pulse"
        >
          <ArrowDown size={22} />
        </a>
      </section>

      {/* ESPECIALIDADES */}
      <section id="especialidades" className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">{t("specialties.eyebrow")}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-bone text-balance">
              {t("specialties.title")}
            </h2>
            <p className="mt-5 text-bone/65 text-lg leading-relaxed">
              {t("specialties.intro")}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {specialties.map((s, i) => (
              <Reveal key={s.key} delay={i * 120}>
                <article className="group">
                  <div className="overflow-hidden aspect-[4/5] bg-charcoal-soft">
                    <img
                      src={s.img}
                      alt={t(`specialties.items.${s.key}.name`)}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="eyebrow text-gold/70">0{i + 1}</p>
                    <h3 className="mt-3 font-display text-2xl md:text-3xl text-bone">
                      {t(`specialties.items.${s.key}.name`)}
                    </h3>
                    <p className="mt-3 text-bone/65 leading-relaxed">
                      {t(`specialties.items.${s.key}.desc`)}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GARRAFEIRA */}
      <section className="relative py-28 lg:py-40 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={garrafeiraImg}
            alt="Garrafeira da Casa Arouquesa"
            width={1920}
            height={1080}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
        </div>
        <div className="relative mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">{t("cellar.eyebrow")}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-bone text-balance">
              {t("cellar.title")}
            </h2>
            <p className="mt-6 text-bone/75 text-lg leading-relaxed">
              {t("cellar.body")}
            </p>
            <p className="mt-5 text-bone/70 text-base leading-relaxed">
              Vasta seleção de copos{" "}
              <span className="font-display italic text-gold">Riedel</span>
              {" "}&{" "}
              <span className="font-display italic text-gold">Spiegelau</span>.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-bone/60 text-sm">
              <span className="text-gold font-display italic text-xl">Dão</span>
              <span>·</span><span>Douro</span>
              <span>·</span><span>Alentejo</span>
              <span>·</span><span>Champagne</span>
              <span>·</span><span>Espumantes</span>
            </div>
            <p className="mt-8 max-w-xl text-bone/75 text-base leading-relaxed">
              Servimos vinhos especiais, em{" "}
              <span className="text-gold">copos premium Riedel &amp; Spiegelau</span> — porque o copo
              também faz o vinho.
            </p>
            <div className="mt-10">
              <Link
                to="/garrafeira"
                className="group inline-flex items-center gap-3 text-gold text-[0.78rem] tracking-[0.24em] uppercase hover:text-gold-soft"
              >
                {t("cellar.link")}
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SALA PRIVADA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-[1400px] grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal delay={150} className="order-2 lg:order-1">
            <p className="eyebrow">{t("private.eyebrow")}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-bone text-balance">
              {t("private.title")}
            </h2>
            <p className="mt-6 text-bone/70 text-lg leading-relaxed max-w-xl">
              {t("private.body")}
            </p>
            <ul className="mt-8 space-y-2 text-bone/70">
              <li className="flex gap-3"><span className="text-gold">—</span> Menus de grupo personalizáveis</li>
              <li className="flex gap-3"><span className="text-gold">—</span> Harmonização de vinhos</li>
              <li className="flex gap-3"><span className="text-gold">—</span> Sala reservada, serviço dedicado</li>
              <li className="flex gap-3"><span className="text-gold">—</span> Eventos corporativos e celebrações</li>
            </ul>
            <div className="mt-10">
              <GoldButton
                href={waLink("Olá! Gostaria de pedir um orçamento para um evento na sala privada da Casa Arouquesa.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("cta.askQuote")}
              </GoldButton>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={salaPrivadaImg}
                alt="Sala privada da Casa Arouquesa"
                width={1600}
                height={2000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* AMBIENTE MOSAICO */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-charcoal-soft">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">{t("ambience.eyebrow")}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-bone text-balance">
              {t("ambience.title")}
            </h2>
            <p className="mt-5 text-bone/65 text-lg leading-relaxed">{t("ambience.body")}</p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-12 md:auto-rows-[320px]">
            {[
              { img: sala1, key: "esplanada", span: "md:col-span-8 md:row-span-2", alt: "Esplanada coberta da Casa Arouquesa" },
              { img: sala2, key: "premium", span: "md:col-span-4", alt: "Sala premium da Casa Arouquesa" },
              { img: sala3, key: "eventos", span: "md:col-span-4", alt: "Sala de eventos e grupos da Casa Arouquesa" },
            ].map((card, i) => (
              <Reveal key={card.key} delay={i * 150} className={`relative overflow-hidden group ${card.span}`}>
                <img
                  src={card.img}
                  alt={card.alt}
                  width={1280}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/95 via-charcoal/55 to-transparent p-6 pt-16">
                  <h3 className="font-display text-2xl md:text-3xl text-bone">
                    {t(`ambienceCards.${card.key}.title`)}
                  </h3>
                  <p className="mt-1 text-bone/75 text-sm md:text-base">
                    {t(`ambienceCards.${card.key}.caption`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPRENSA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-[1100px] text-center">
          <Reveal>
            <p className="eyebrow">{t("press.eyebrow")}</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-bone text-balance">
              {t("press.title")}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {(t("press.items", { returnObjects: true }) as string[]).map((q, i) => (
              <Reveal key={i} delay={i * 120}>
                <figure className="border border-gold/15 p-8 h-full">
                  <p className="font-display italic text-xl text-bone/85 leading-snug">{q}</p>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RAÇA — destaque no fim, antes dos contactos */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-charcoal">
        <div className="mx-auto max-w-[1400px] grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={racaImg}
                alt="Vaca Arouquesa em pastagem na Serra da Freita"
                width={1600}
                height={2000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow">{t("raceTeaser.eyebrow")}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-bone text-balance whitespace-pre-line">
              {t("raceTeaser.title")}
            </h2>
            <div className="mt-8 w-12 h-px bg-gold" />
            <blockquote className="mt-8 font-display italic text-2xl md:text-3xl text-bone/85 leading-snug">
              “A melhor carne é Arouquesa.”
            </blockquote>
            <p className="mt-8 text-bone/70 text-lg leading-relaxed max-w-xl">
              {t("raceTeaser.body")}
            </p>
            <div className="mt-10">
              <Link
                to="/raca"
                className="group inline-flex items-center gap-3 text-gold text-[0.78rem] tracking-[0.24em] uppercase hover:text-gold-soft"
              >
                {t("raceTeaser.link")}
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-28 lg:py-36 px-6 lg:px-12 bg-charcoal-soft border-y border-gold/15">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">{t("finalCta.eyebrow")}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-bone text-balance">
              {t("finalCta.title")}
            </h2>
            <p className="mt-5 text-bone/70 text-lg leading-relaxed">
              {t("finalCta.body")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gold text-charcoal px-7 py-3.5 text-[0.78rem] tracking-[0.24em] uppercase font-medium hover:bg-gold-soft transition-all hover:-translate-y-0.5"
              >
                <MessageCircle size={16} />
                {t("cta.reserveWa")}
              </a>
              <a
                href={telLink}
                className="inline-flex items-center justify-center gap-3 border border-gold/50 text-gold px-7 py-3.5 text-[0.78rem] tracking-[0.24em] uppercase font-medium hover:bg-gold/5 transition-all"
              >
                <Phone size={16} />
                {SITE.phone}
              </a>
            </div>
            <div className="mt-12 grid sm:grid-cols-3 gap-6 text-sm text-bone/60">
              {SITE.hours.map((h) => (
                <div key={h.days}>
                  <p className="text-gold tracking-[0.22em] uppercase text-xs">{h.days}</p>
                  <p className="mt-2">{h.lunch}{h.dinner && <><br />{h.dinner}</>}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
