import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/casa")({
  head: () => ({
    meta: [
      { title: "A Casa · Casa Arouquesa" },
      { name: "description", content: "Qualidade, simpatia e requinte. A história e a filosofia da Casa Arouquesa em Repeses, Viseu." },
      { property: "og:title", content: "A Casa · Casa Arouquesa" },
      { property: "og:description", content: "A história e a filosofia da Casa Arouquesa em Repeses, Viseu." },
      { property: "og:url", content: "/casa" },
    ],
    links: [{ rel: "canonical", href: "/casa" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useTranslation();
  return (
    <>
      <PageHero eyebrow="A Casa" title={t("pages.casa.title")} lede={t("pages.casa.lede")} />
      <section className="py-20 px-6 lg:px-12">
        <p className="mx-auto max-w-2xl text-bone/70 text-lg leading-relaxed text-center">
          {t("pages.casa.body")}
        </p>
      </section>
    </>
  );
}
