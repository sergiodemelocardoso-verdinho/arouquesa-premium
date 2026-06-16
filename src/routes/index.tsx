diff --git a/src/components/Header.tsx b/src/components/Header.tsx
index b9020cc..7f8a257 100644
--- a/src/components/Header.tsx
+++ b/src/components/Header.tsx
@@ -4,6 +4,7 @@ import { Menu, X } from "lucide-react";
 import { useTranslation } from "react-i18next";
 import { LanguageSwitcher } from "./LanguageSwitcher";
 import { waLink } from "@/lib/site";
+import logoHorizontal from "@/assets/logo-horizontal.png";
 
 const navItems = [
   { to: "/raca", key: "raca" },
@@ -42,17 +43,24 @@ export function Header() {
       <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12">
         <Link
           to="/"
-          className="font-display text-xl tracking-[0.28em] text-bone hover:text-gold transition-colors"
+          aria-label="Casa Arouquesa — início"
+          className="group inline-flex items-center shrink-0"
         >
-          CASA <span className="text-gold">AROUQUESA</span>
+          <img
+            src={logoHorizontal}
+            alt="Casa Arouquesa"
+            width={170}
+            height={60}
+            className="h-9 w-auto md:h-11 transition-transform duration-300 group-hover:scale-[1.03]"
+          />
         </Link>
 
-        <nav aria-label="Principal" className="hidden lg:flex items-center gap-7">
+        <nav aria-label="Principal" className="hidden xl:flex items-center gap-5 px-6 whitespace-nowrap">
           {navItems.map((n) => (
             <Link
               key={n.to}
               to={n.to}
-              className="text-[0.72rem] tracking-[0.22em] uppercase text-bone/75 hover:text-gold transition-colors"
+              className="text-[0.7rem] tracking-[0.16em] uppercase text-bone/75 hover:text-gold transition-colors"
               activeProps={{ className: "text-gold" }}
             >
               {t(`nav.${n.key}`)}
@@ -60,22 +68,22 @@ export function Header() {
           ))}
         </nav>
 
-        <div className="hidden lg:flex items-center gap-6">
+        <div className="hidden xl:flex items-center gap-5 shrink-0">
           <LanguageSwitcher />
           <a
             href={waLink()}
             target="_blank"
             rel="noopener noreferrer"
-            className="bg-gold text-charcoal px-5 py-2.5 text-[0.7rem] tracking-[0.22em] uppercase font-medium hover:bg-gold-soft transition-colors"
+            className="bg-gold text-charcoal px-5 py-2.5 text-[0.7rem] tracking-[0.18em] uppercase font-medium whitespace-nowrap hover:bg-gold-soft transition-colors"
           >
-            {t("cta.reserveWa")}
+            {t("cta.reserve")}
           </a>
         </div>
 
         <button
           type="button"
           onClick={() => setOpen((v) => !v)}
-          className="lg:hidden text-bone p-2 -mr-2"
+          className="xl:hidden text-bone p-2 -mr-2"
           aria-label={open ? "Fechar menu" : "Abrir menu"}
           aria-expanded={open}
         >
@@ -85,7 +93,7 @@ export function Header() {
 
       {/* Mobile */}
       {open && (
-        <div className="lg:hidden bg-charcoal border-t border-gold/15 max-h-[calc(100dvh-64px)] overflow-y-auto">
+        <div className="xl:hidden bg-charcoal border-t border-gold/15 max-h-[calc(100dvh-64px)] overflow-y-auto">
           <nav aria-label="Mobile" className="flex flex-col px-6 py-6">
             {navItems.map((n) => (
               <Link
diff --git a/src/i18n/locales/en.ts b/src/i18n/locales/en.ts
index 64a1f6a..9f0f9ce 100644
--- a/src/i18n/locales/en.ts
+++ b/src/i18n/locales/en.ts
@@ -14,6 +14,7 @@ export default {
   },
   cta: {
     reserveWa: "Reserve on WhatsApp",
+    reserve: "Reserve",
     callUs: "Call",
     seeMenu: "See the menu",
     askQuote: "Request a quote",
diff --git a/src/i18n/locales/es.ts b/src/i18n/locales/es.ts
index 5d9afdc..8e2d062 100644
--- a/src/i18n/locales/es.ts
+++ b/src/i18n/locales/es.ts
@@ -14,6 +14,7 @@ export default {
   },
   cta: {
     reserveWa: "Reservar por WhatsApp",
+    reserve: "Reservar",
     callUs: "Llamar",
     seeMenu: "Ver la carta",
     askQuote: "Pedir presupuesto",
diff --git a/src/i18n/locales/pt.ts b/src/i18n/locales/pt.ts
index 95140d5..efa739c 100644
--- a/src/i18n/locales/pt.ts
+++ b/src/i18n/locales/pt.ts
@@ -14,6 +14,7 @@ export default {
   },
   cta: {
     reserveWa: "Reservar por WhatsApp",
+    reserve: "Reservar",
     callUs: "Ligar",
     seeMenu: "Ver a ementa",
     askQuote: "Pedir orçamento",
diff --git a/src/routes/index.tsx b/src/routes/index.tsx
index 9752206..c49a73d 100644
--- a/src/routes/index.tsx
+++ b/src/routes/index.tsx
@@ -80,18 +80,24 @@ function Index() {
             </p>
           </Reveal>
           <Reveal delay={400}>
-            <div className="mt-10 flex flex-col sm:flex-row gap-4">
-              <GoldButton href={waLink()} target="_blank" rel="noopener noreferrer">
-                {t("cta.reserveWa")}
-              </GoldButton>
-              <Link
-                to="/ementa"
-                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.78rem] tracking-[0.24em] uppercase font-medium border border-gold/50 text-gold hover:border-gold hover:bg-gold/5 transition-all"
-              >
-                {t("cta.seeMenu")}
-                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
-              </Link>
-            </div>
+            <nav aria-label="Destaques" className="mt-12 max-w-xl grid sm:grid-cols-3 border-t border-gold/20">
+              {[
+                { to: "/ementa", key: "ementa" },
+                { to: "/garrafeira", key: "garrafeira" },
+                { to: "/sala-privada", key: "sala" },
+              ].map((item) => (
+                <Link
+                  key={item.to}
+                  to={item.to}
+                  className="group flex items-center justify-between gap-4 py-4 sm:py-5 sm:px-5 sm:first:pl-0 border-b border-gold/15 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 hover:bg-gold/5 transition-colors"
+                >
+                  <span className="font-display text-xl md:text-2xl text-bone group-hover:text-gold transition-colors">
+                    {t(`nav.${item.key}`)}
+                  </span>
+                  <span aria-hidden className="text-gold text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
+                </Link>
+              ))}
+            </nav>
           </Reveal>
         </div>
 
@@ -147,46 +153,6 @@ function Index() {
         </div>
       </section>
 
-      {/* RAÇA */}
-      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-charcoal-soft">
-        <div className="mx-auto max-w-[1400px] grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
-          <Reveal>
-            <div className="aspect-[4/5] overflow-hidden">
-              <img
-                src={racaImg}
-                alt="Vaca Arouquesa em pastagem na Serra da Freita"
-                width={1600}
-                height={2000}
-                loading="lazy"
-                className="h-full w-full object-cover"
-              />
-            </div>
-          </Reveal>
-          <Reveal delay={150}>
-            <p className="eyebrow">{t("raceTeaser.eyebrow")}</p>
-            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-bone text-balance whitespace-pre-line">
-              {t("raceTeaser.title")}
-            </h2>
-            <div className="mt-8 w-12 h-px bg-gold" />
-            <blockquote className="mt-8 font-display italic text-2xl md:text-3xl text-bone/85 leading-snug">
-              “A melhor carne é Arouquesa.”
-            </blockquote>
-            <p className="mt-8 text-bone/70 text-lg leading-relaxed max-w-xl">
-              {t("raceTeaser.body")}
-            </p>
-            <div className="mt-10">
-              <Link
-                to="/raca"
-                className="group inline-flex items-center gap-3 text-gold text-[0.78rem] tracking-[0.24em] uppercase hover:text-gold-soft"
-              >
-                {t("raceTeaser.link")}
-                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
-              </Link>
-            </div>
-          </Reveal>
-        </div>
-      </section>
-
       {/* GARRAFEIRA */}
       <section className="relative py-28 lg:py-40 px-6 lg:px-12 overflow-hidden">
         <div className="absolute inset-0">
@@ -216,6 +182,11 @@ function Index() {
               <span>·</span><span>Champagne</span>
               <span>·</span><span>Espumantes</span>
             </div>
+            <p className="mt-8 max-w-xl text-bone/75 text-base leading-relaxed">
+              Servimos cada vinho no cálice certo, em{" "}
+              <span className="text-gold">copos premium Riedel &amp; Spiegelau</span> — porque o copo
+              também faz o vinho.
+            </p>
             <div className="mt-10">
               <Link
                 to="/garrafeira"
@@ -283,14 +254,23 @@ function Index() {
           </Reveal>
 
           <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-2 md:h-[640px]">
-            <Reveal className="md:col-span-7 md:row-span-2 overflow-hidden">
-              <img src={sala1} alt="Sala principal da Casa Arouquesa" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" />
+            <Reveal className="group relative md:col-span-7 md:row-span-2 overflow-hidden">
+              <img src={sala1} alt="Sala premium da Casa Arouquesa" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
+              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-charcoal/85 to-transparent" />
+              <span className="absolute bottom-5 left-5 font-display text-2xl md:text-3xl text-bone">Sala premium</span>
             </Reveal>
-            <Reveal delay={150} className="md:col-span-5 overflow-hidden">
-              <img src={sala2} alt="Brasa de carvão com peça Arouquesa" width={1280} height={1024} loading="lazy" className="h-full w-full object-cover" />
+            <Reveal delay={150} className="group relative md:col-span-5 overflow-hidden">
+              <img src={sala2} alt="Esplanada coberta da Casa Arouquesa" width={1280} height={1024} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
+              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal/85 to-transparent" />
+              <div className="absolute bottom-5 left-5">
+                <span className="block font-display text-2xl text-bone">Esplanada coberta</span>
+                <span className="mt-1 block text-gold text-[0.7rem] tracking-[0.2em] uppercase">Ampla · aberta no verão</span>
+              </div>
             </Reveal>
-            <Reveal delay={300} className="md:col-span-5 overflow-hidden">
-              <img src={sala3} alt="Pormenor de mesa posta com latão" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
+            <Reveal delay={300} className="group relative md:col-span-5 overflow-hidden">
+              <img src={sala3} alt="Sala para eventos corporativos e jantares de grupo" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
+              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal/85 to-transparent" />
+              <span className="absolute bottom-5 left-5 font-display text-2xl text-bone">Eventos &amp; grupos</span>
             </Reveal>
           </div>
         </div>
@@ -317,6 +297,46 @@ function Index() {
         </div>
       </section>
 
+      {/* RAÇA — destaque no fim, antes dos contactos */}
+      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-charcoal">
+        <div className="mx-auto max-w-[1400px] grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
+          <Reveal>
+            <div className="aspect-[4/5] overflow-hidden">
+              <img
+                src={racaImg}
+                alt="Vaca Arouquesa em pastagem na Serra da Freita"
+                width={1600}
+                height={2000}
+                loading="lazy"
+                className="h-full w-full object-cover"
+              />
+            </div>
+          </Reveal>
+          <Reveal delay={150}>
+            <p className="eyebrow">{t("raceTeaser.eyebrow")}</p>
+            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-bone text-balance whitespace-pre-line">
+              {t("raceTeaser.title")}
+            </h2>
+            <div className="mt-8 w-12 h-px bg-gold" />
+            <blockquote className="mt-8 font-display italic text-2xl md:text-3xl text-bone/85 leading-snug">
+              “A melhor carne é Arouquesa.”
+            </blockquote>
+            <p className="mt-8 text-bone/70 text-lg leading-relaxed max-w-xl">
+              {t("raceTeaser.body")}
+            </p>
+            <div className="mt-10">
+              <Link
+                to="/raca"
+                className="group inline-flex items-center gap-3 text-gold text-[0.78rem] tracking-[0.24em] uppercase hover:text-gold-soft"
+              >
+                {t("raceTeaser.link")}
+                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
+              </Link>
+            </div>
+          </Reveal>
+        </div>
+      </section>
+
       {/* CTA FINAL */}
       <section className="relative py-28 lg:py-36 px-6 lg:px-12 bg-charcoal-soft border-y border-gold/15">
         <div className="mx-auto max-w-3xl text-center">
