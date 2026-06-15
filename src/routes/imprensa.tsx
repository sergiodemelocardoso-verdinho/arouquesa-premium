import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/imprensa")({
  head: () => ({
    meta: [
      { title: "Imprensa · Casa Arouquesa" },
      { name: "description", content: "Notícias, clippings e presença em comunicação social da Casa Arouquesa." },
      { property: "og:title", content: "Imprensa · Casa Arouquesa" },
      { property: "og:description", content: "Notícias e presença em comunicação social." },
      { property: "og:url", content: "/imprensa" },
    ],
    links: [{ rel: "canonical", href: "/imprensa" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useTranslation();
  return (
    <>
      <PageHero eyebrow="Media" title={t("pages.imprensa.title")} lede={t("pages.imprensa.lede")} />
      <section className="py-20 px-6 lg:px-12">
        <p className="mx-auto max-w-2xl text-bone/70 text-lg leading-relaxed text-center">
          {t("pages.imprensa.body")}
        </p>
      </section>
    </>
  );
}
