import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/PageHero";
import sala1 from "@/assets/sala-1.jpg";
import sala2 from "@/assets/sala-2.jpg";
import sala3 from "@/assets/sala-3.jpg";
import dishPosta from "@/assets/dish-posta.jpg";
import dishVitela from "@/assets/dish-vitela.jpg";
import dishBife from "@/assets/dish-bife.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria · Casa Arouquesa" },
      { name: "description", content: "Pratos, ambiente, sala e pormenores da Casa Arouquesa em formato editorial." },
      { property: "og:title", content: "Galeria · Casa Arouquesa" },
      { property: "og:description", content: "Pratos, ambiente e pormenores da Casa Arouquesa." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Page,
});

const items = [
  { src: sala1, alt: "Sala principal" },
  { src: dishPosta, alt: "Posta Arouquesa" },
  { src: sala2, alt: "Brasa de carvão" },
  { src: dishVitela, alt: "Vitela no forno" },
  { src: sala3, alt: "Mesa posta com latão" },
  { src: dishBife, alt: "Bife Arouquês à Casa" },
];

function Page() {
  const { t } = useTranslation();
  return (
    <>
      <PageHero eyebrow="Galeria" title={t("pages.galeria.title")} lede={t("pages.galeria.lede")} />
      <section className="py-16 px-6 lg:px-12">
        <div className="mx-auto max-w-[1400px] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img src={it.src} alt={it.alt} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
