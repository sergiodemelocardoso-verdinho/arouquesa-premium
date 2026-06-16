import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { waLink } from "@/lib/site";
import logoMark from "@/assets/logo-mark.png";

const navItems = [
  { to: "/raca", key: "raca" },
  { to: "/casa", key: "casa" },
  { to: "/ementa", key: "ementa" },
  { to: "/garrafeira", key: "garrafeira" },
  { to: "/sala-privada", key: "sala" },
  { to: "/galeria", key: "galeria" },
  { to: "/contactos", key: "contactos" },
] as const;

export function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-charcoal/95 backdrop-blur border-b border-gold/15"
          : "bg-gradient-to-b from-charcoal/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12">
        <Link
          to="/"
          className="font-display text-xl tracking-[0.28em] text-bone hover:text-gold transition-colors"
        >
          CASA <span className="text-gold">AROUQUESA</span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:flex items-center gap-7">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[0.72rem] tracking-[0.22em] uppercase text-bone/75 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {t(`nav.${n.key}`)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <LanguageSwitcher />
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-charcoal px-5 py-2.5 text-[0.7rem] tracking-[0.22em] uppercase font-medium hover:bg-gold-soft transition-colors"
          >
            {t("cta.reserveWa")}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-bone p-2 -mr-2"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="lg:hidden bg-charcoal border-t border-gold/15 max-h-[calc(100dvh-64px)] overflow-y-auto">
          <nav aria-label="Mobile" className="flex flex-col px-6 py-6">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-2xl text-bone hover:text-gold border-b border-gold/10"
                activeProps={{ className: "text-gold" }}
              >
                {t(`nav.${n.key}`)}
              </Link>
            ))}
            <div className="flex items-center justify-between mt-6">
              <LanguageSwitcher />
            </div>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gold text-charcoal text-center px-5 py-3.5 text-[0.72rem] tracking-[0.22em] uppercase font-medium"
            >
              {t("cta.reserveWa")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
