import { Link } from "@tanstack/react-router";
import { Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SITE, waLink, telLink, mailLink } from "@/lib/site";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-charcoal-soft border-t border-gold/15 text-bone">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-20 grid gap-12 lg:grid-cols-4">
        <div>
          <Link to="/" className="font-display text-xl tracking-[0.28em] text-bone">
            CASA <span className="text-gold">AROUQUESA</span>
          </Link>
          <p className="mt-5 text-sm text-bone/65 leading-relaxed max-w-xs">
            {t("hero.subtitle")}
          </p>
        </div>

        <div>
          <h3 className="eyebrow">{t("footer.visit")}</h3>
          <address className="not-italic mt-4 text-sm text-bone/75 leading-relaxed">
            {SITE.address.street}<br />
            {SITE.address.postalCode} {SITE.address.locality}<br />
            {SITE.address.region}
          </address>
          <h3 className="eyebrow mt-7">{t("footer.hours")}</h3>
          <ul className="mt-4 text-sm text-bone/75 space-y-1">
            {SITE.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-right text-bone/60">
                  {h.lunch}{h.dinner && ` · ${h.dinner}`}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">{t("footer.contact")}</h3>
          <ul className="mt-4 text-sm space-y-2">
            <li>
              <a href={telLink} className="text-bone/85 hover:text-gold transition-colors">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone/85 hover:text-gold transition-colors"
              >
                WhatsApp <span className="text-bone/50">{SITE.whatsappDisplay}</span>
              </a>
            </li>
            <li>
              <a href={mailLink} className="text-bone/85 hover:text-gold transition-colors">
                {SITE.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-9 w-9 grid place-items-center border border-gold/30 text-gold hover:bg-gold hover:text-charcoal transition-colors"
            >
              <Facebook size={15} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow">{t("footer.newsletter")}</h3>
          <p className="mt-4 text-sm text-bone/65 leading-relaxed">
            {t("footer.newsletterDesc")}
          </p>
          <form
            className="mt-5 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label className="sr-only" htmlFor="nl-email">Email</label>
            <input
              id="nl-email"
              type="email"
              required
              placeholder={t("footer.emailPlaceholder")}
              className="w-full bg-transparent border border-gold/30 px-4 py-3 text-sm placeholder:text-bone/40 focus:border-gold outline-none"
            />
            <label className="flex items-start gap-2 text-xs text-bone/55 leading-relaxed">
              <input type="checkbox" required className="mt-0.5 accent-[var(--color-gold)]" />
              <span>{t("footer.rgpd")}</span>
            </label>
            <button
              type="submit"
              className="w-full bg-gold/10 border border-gold/40 text-gold py-3 text-[0.72rem] tracking-[0.22em] uppercase hover:bg-gold hover:text-charcoal transition-colors"
            >
              {t("footer.subscribe")}
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-bone/50">
          <p>© {new Date().getFullYear()} {SITE.name}. {t("footer.rights")}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacidade" className="hover:text-gold transition-colors">{t("footer.privacy")}</Link>
            <a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              {t("footer.complaints")}
            </a>
            <Link to="/acessibilidade" className="hover:text-gold transition-colors">{t("footer.accessibility")}</Link>
          </div>
          <p className="text-bone/40">
            {t("footer.funds")}: <span className="text-bone/60">Centro 2030 · Compete</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
