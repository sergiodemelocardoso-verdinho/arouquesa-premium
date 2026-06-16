import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/PageHero";
import garrafeiraImg from "@/assets/garrafeira.jpg";

export const Route = createFileRoute("/garrafeira")({
  head: () => ({
    meta: [
      { title: "Garrafeira · Casa Arouquesa" },
      { name: "description", content: "Vinhos do Dão em destaque, grandes regiões portuguesas e champanhes de prestígio. A garrafeira da Casa Arouquesa." },
      { property: "og:title", content: "Garrafeira · Casa Arouquesa" },
      { property: "og:description", content: "Curadoria de vinhos do Dão, regiões portuguesas e champanhes para a carne Arouquesa." },
      { property: "og:image", content: garrafeiraImg },
      { property: "og:url", content: "/garrafeira" },
    ],
    links: [{ rel: "canonical", href: "/garrafeira" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useTranslation();
  return (
    <>
      <PageHero eyebrow="Garrafeira" title={t("pages.garrafeira.title")} lede={t("pages.garrafeira.lede")} />
      <section className="px-6 lg:px-12">
        <div className="mx-auto max-w-6xl aspect-[21/9] overflow-hidden">
          <img src={garrafeiraImg} alt="Garrafeira" width={1920} height={820} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>
      <section className="py-20 px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-bone/70 text-lg leading-relaxed">
            {t("pages.garrafeira.body")}
          </p>
          <p className="mt-8 text-bone/80 text-base md:text-lg">
            Vasta seleção de copos{" "}
            <span className="font-display italic text-gold">Riedel</span>
            {" "}&{" "}
            <span className="font-display italic text-gold">Spiegelau</span>.
          </p>
        </div>
      </section>
    </>
  );
}
