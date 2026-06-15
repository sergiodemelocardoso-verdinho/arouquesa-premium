import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SITE, waLink, telLink, mailLink } from "@/lib/site";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos · Casa Arouquesa · Repeses, Viseu" },
      { name: "description", content: "Casa Arouquesa, Empreendimento Bellavista, Repeses 3500-680 Viseu. Telefone +351 232 416 174. Horário e mapa." },
      { property: "og:title", content: "Contactos · Casa Arouquesa" },
      { property: "og:description", content: "Repeses, Viseu. Telefone, WhatsApp, email e horário." },
      { property: "og:url", content: "/contactos" },
    ],
    links: [{ rel: "canonical", href: "/contactos" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useTranslation();
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.locality}, ${SITE.address.region}`,
  )}&output=embed`;

  return (
    <>
      <PageHero eyebrow="Contactos" title={t("pages.contactos.title")} lede={t("pages.contactos.lede")} />
      <section className="py-16 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="eyebrow">Morada</h2>
            <address className="not-italic mt-3 text-bone/85 text-lg leading-relaxed">
              {SITE.address.street}<br />
              {SITE.address.postalCode} {SITE.address.locality}, {SITE.address.region}
            </address>

            <h2 className="eyebrow mt-8">{t("footer.contact")}</h2>
            <ul className="mt-3 space-y-3 text-bone/85">
              <li><a href={telLink} className="inline-flex items-center gap-3 hover:text-gold"><Phone size={16} className="text-gold" /> {SITE.phone}</a></li>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-gold">
                  <MessageCircle size={16} className="text-gold" /> WhatsApp <span className="text-bone/50 text-sm">{SITE.whatsappDisplay}</span>
                </a>
              </li>
              <li><a href={mailLink} className="inline-flex items-center gap-3 hover:text-gold"><Mail size={16} className="text-gold" /> {SITE.email}</a></li>
            </ul>

            <h2 className="eyebrow mt-8">{t("footer.hours")}</h2>
            <ul className="mt-3 text-bone/85 space-y-2">
              {SITE.hours.map((h) => (
                <li key={h.days} className="flex justify-between border-b border-gold/10 py-2">
                  <span>{h.days}</span>
                  <span className="text-bone/65">{h.lunch}{h.dinner && ` · ${h.dinner}`}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="aspect-square lg:aspect-auto lg:min-h-[480px] border border-gold/20 overflow-hidden">
            <iframe
              title="Mapa Casa Arouquesa"
              src={mapsSrc}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <p className="mx-auto max-w-6xl mt-6 text-xs text-bone/50 inline-flex items-center gap-2">
          <MapPin size={14} /> Repeses, Viseu
        </p>
      </section>
    </>
  );
}
