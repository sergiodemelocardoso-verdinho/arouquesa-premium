import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/PageHero";
import racaImg from "@/assets/raca-arouquesa.jpg";

export const Route = createFileRoute("/raca")({
  head: () => ({
    meta: [
      { title: "A Raça Arouquesa · Casa Arouquesa" },
      { name: "description", content: "Da Serra da Freita à brasa: a história da raça autóctone Arouquesa D.O.P., as suas pastagens e maturação." },
      { property: "og:title", content: "A Raça Arouquesa · Casa Arouquesa" },
      { property: "og:description", content: "Da Serra da Freita à brasa: a história da raça autóctone Arouquesa D.O.P." },
      { property: "og:url", content: "/raca" },
    ],
    links: [{ rel: "canonical", href: "/raca" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useTranslation();
  return (
    <>
      <PageHero eyebrow="A Raça" title={t("pages.raca.title")} lede={t("pages.raca.lede")} />
      <section className="py-20 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="aspect-[16/9] overflow-hidden">
            <img src={racaImg} alt="Vaca Arouquesa em pastagem" width={1600} height={900} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <p className="mt-12 text-bone/70 text-lg leading-relaxed max-w-2xl mx-auto text-center">
            {t("pages.raca.body")}
          </p>
        </div>
      </section>
    </>
  );
}
