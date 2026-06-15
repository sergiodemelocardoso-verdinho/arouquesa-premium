import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SITE, waLink, telLink, mailLink } from "@/lib/site";

export const Route = createFileRoute("/reservas")({
  head: () => ({
    meta: [
      { title: "Reservas · Casa Arouquesa" },
      { name: "description", content: "Reserve a sua mesa na Casa Arouquesa por WhatsApp ou telefone. Atendimento personalizado, sem formulários." },
      { property: "og:title", content: "Reservas · Casa Arouquesa" },
      { property: "og:description", content: "Reserve por WhatsApp ou telefone." },
      { property: "og:url", content: "/reservas" },
    ],
    links: [{ rel: "canonical", href: "/reservas" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useTranslation();
  return (
    <>
      <PageHero eyebrow="Reservas" title={t("pages.reservas.title")} lede={t("pages.reservas.lede")} />
      <section className="py-16 px-6 lg:px-12">
        <div className="mx-auto max-w-3xl grid gap-4 sm:grid-cols-2">
          <a href={waLink()} target="_blank" rel="noopener noreferrer"
             className="group flex flex-col items-center gap-4 p-10 border border-gold/30 hover:bg-gold/5 transition-colors">
            <MessageCircle size={28} className="text-gold" />
            <span className="eyebrow">WhatsApp</span>
            <span className="font-display text-2xl text-bone">Reservar agora</span>
            <span className="text-bone/50 text-xs">{SITE.whatsappDisplay}</span>
          </a>
          <a href={telLink}
             className="group flex flex-col items-center gap-4 p-10 border border-gold/30 hover:bg-gold/5 transition-colors">
            <Phone size={28} className="text-gold" />
            <span className="eyebrow">Telefone</span>
            <span className="font-display text-2xl text-bone">{SITE.phone}</span>
          </a>
        </div>
        <div className="mt-10 text-center">
          <a href={mailLink} className="inline-flex items-center gap-2 text-bone/70 hover:text-gold transition-colors">
            <Mail size={16} /> {SITE.email}
          </a>
        </div>
      </section>
    </>
  );
}
