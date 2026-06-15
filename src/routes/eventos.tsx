import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos · Casa Arouquesa" },
      { name: "description", content: "Jantares temáticos e momentos especiais na Casa Arouquesa." },
      { property: "og:title", content: "Eventos · Casa Arouquesa" },
      { property: "og:description", content: "Agenda de jantares temáticos e momentos especiais." },
      { property: "og:url", content: "/eventos" },
    ],
    links: [{ rel: "canonical", href: "/eventos" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useTranslation();
  return (
    <>
      <PageHero eyebrow="Eventos" title={t("pages.eventos.title")} lede={t("pages.eventos.lede")} />
      <section className="py-20 px-6 lg:px-12">
        <p className="mx-auto max-w-2xl text-bone/70 text-lg leading-relaxed text-center">
          {t("pages.eventos.body")}
        </p>
      </section>
    </>
  );
}
