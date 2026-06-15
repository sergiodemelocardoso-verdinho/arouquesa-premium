import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/PageHero";
import { GoldButton } from "@/components/GoldButton";
import { waLink } from "@/lib/site";
import salaPrivadaImg from "@/assets/sala-privada.jpg";

export const Route = createFileRoute("/sala-privada")({
  head: () => ({
    meta: [
      { title: "Sala Privada & Grupos · Casa Arouquesa" },
      { name: "description", content: "Sala privada para eventos de empresa, jantares de grupo e celebrações. Menus personalizáveis e harmonização de vinhos." },
      { property: "og:title", content: "Sala Privada & Grupos · Casa Arouquesa" },
      { property: "og:description", content: "Eventos corporativos, jantares de grupo e celebrações na sala privada da Casa Arouquesa." },
      { property: "og:image", content: salaPrivadaImg },
      { property: "og:url", content: "/sala-privada" },
    ],
    links: [{ rel: "canonical", href: "/sala-privada" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useTranslation();
  return (
    <>
      <PageHero eyebrow="Sala Privada" title={t("pages.sala.title")} lede={t("pages.sala.lede")}>
        <div className="mt-10 flex justify-center">
          <GoldButton
            href={waLink("Olá! Gostaria de pedir um orçamento para um evento na sala privada da Casa Arouquesa.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("cta.askQuote")}
          </GoldButton>
        </div>
      </PageHero>
      <section className="px-6 lg:px-12">
        <div className="mx-auto max-w-6xl aspect-[16/9] overflow-hidden">
          <img src={salaPrivadaImg} alt="Sala Privada" width={1920} height={1080} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>
      <section className="py-20 px-6 lg:px-12">
        <p className="mx-auto max-w-2xl text-bone/70 text-lg leading-relaxed text-center">
          {t("pages.sala.body")}
        </p>
      </section>
    </>
  );
}
