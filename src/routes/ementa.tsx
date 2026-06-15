import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/ementa")({
  head: () => ({
    meta: [
      { title: "Ementa · Casa Arouquesa" },
      { name: "description", content: "Entradas, especialidades de Arouquesa, outros pratos, sobremesas e vinhos. A ementa da Casa Arouquesa." },
      { property: "og:title", content: "Ementa · Casa Arouquesa" },
      { property: "og:description", content: "A ementa da Casa Arouquesa: especialidades de Arouquesa, entradas, sobremesas e vinhos." },
      { property: "og:url", content: "/ementa" },
    ],
    links: [{ rel: "canonical", href: "/ementa" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useTranslation();
  return (
    <>
      <PageHero eyebrow="Ementa" title={t("pages.ementa.title")} lede={t("pages.ementa.lede")} />
      <section className="py-20 px-6 lg:px-12">
        <p className="mx-auto max-w-2xl text-bone/70 text-lg leading-relaxed text-center">
          {t("pages.ementa.body")}
        </p>
      </section>
    </>
  );
}
