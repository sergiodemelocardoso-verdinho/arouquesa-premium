import { useTranslation } from "react-i18next";

const LANGS = ["pt", "en", "es"] as const;

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "pt").slice(0, 2);
  return (
    <div
      role="group"
      aria-label="Idioma"
      className={`flex items-center gap-1 text-[0.7rem] tracking-[0.22em] uppercase ${className}`}
    >
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="px-1 text-bone/30" aria-hidden>·</span>}
          <button
            type="button"
            onClick={() => i18n.changeLanguage(l)}
            aria-pressed={current === l}
            className={`transition-colors ${
              current === l ? "text-gold" : "text-bone/60 hover:text-bone"
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}
