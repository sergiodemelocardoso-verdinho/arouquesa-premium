import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "./locales/pt";
import en from "./locales/en";
import es from "./locales/es";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        pt: { common: pt },
        en: { common: en },
        es: { common: es },
      },
      fallbackLng: "pt",
      supportedLngs: ["pt", "en", "es"],
      defaultNS: "common",
      ns: ["common"],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "ca-lang",
      },
    });
}

export default i18n;
