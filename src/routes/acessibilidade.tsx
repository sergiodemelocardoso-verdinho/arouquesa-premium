import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/acessibilidade")({
  head: () => ({
    meta: [
      { title: "Acessibilidade · Casa Arouquesa" },
      { name: "description", content: "Compromisso de acessibilidade da Casa Arouquesa segundo WCAG 2.2 AA." },
      { property: "og:url", content: "/acessibilidade" },
    ],
    links: [{ rel: "canonical", href: "/acessibilidade" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useTranslation();
  return (
    <>
      <PageHero eyebrow="Legal" title={t("pages.acessibilidade.title")} />
      <section className="py-16 px-6 lg:px-12">
        <p className="mx-auto max-w-2xl text-bone/70 text-lg leading-relaxed text-center">
          {t("pages.acessibilidade.body")}
        </p>
      </section>
    </>
  );
}
