# Casa Arouquesa — Plano de construção

Website editorial de fine-dining para o restaurante Casa Arouquesa (Repeses, Viseu), com foco na carne Arouquesa D.O.P., garrafeira do Dão e sala privada para grupos. Esta primeira entrega cobre a **estrutura completa** + a **página de Início totalmente desenhada**; as outras páginas ficam com layout base coerente, pronto a evoluir.

## Identidade visual (tokens em src/styles.css)

- Carvão `#1A1412` · Creme/osso `#F4EDE4` · Borgonha `#7B1E2B` · Dourado/latão `#C9A36A` · Grafite `#4A4440` · Verde-musgo `#3A4A3F`
- Tipografia: **Cormorant Garamond** (display, com itálico) + **Inter** (corpo), carregadas via `<link>` no `__root.tsx`
- Filetes dourados finos, espaço em branco generoso, fotografia full-bleed, micro-animações fade/parallax suaves

## Estrutura de rotas (TanStack Start, file-based)

```
src/routes/
  __root.tsx            shell (html/head/body), Header, Footer, FAB WhatsApp, JSON-LD Restaurant
  index.tsx             Início (desenhada por completo)
  raca.tsx              A Raça Arouquesa
  casa.tsx              A Casa / Conceito
  ementa.tsx            Ementa
  garrafeira.tsx        Garrafeira (âncora)
  galeria.tsx           Galeria com lightbox
  sala-privada.tsx      Sala Privada & Grupos
  eventos.tsx           Eventos
  imprensa.tsx          Media / Imprensa
  reservas.tsx          Reservas (WhatsApp + tel:, sem formulário)
  contactos.tsx         Contactos + mapa
  privacidade.tsx       Política de Privacidade
  acessibilidade.tsx    Acessibilidade
  sitemap[.]xml.tsx     sitemap dinâmico
```

Cada rota com `head()` próprio (title, description, OG, canonical relativo).

## Componentes globais

- `Header` translúcido fixo que escurece ao scroll, logótipo serifado "CASA AROUQUESA", nav, seletor PT/EN/ES, botão dourado "Reservar por WhatsApp"
- `Footer` carvão com nav, horário, morada, tel/WhatsApp, newsletter (email + checkbox RGPD), redes (Facebook), logos Centro 2030/Compete (placeholders), links legais
- `WhatsAppFAB` flutuante (canto inf. direito), `tel:` + `wa.me/351000000000` (placeholder visível para substituir)
- `LanguageSwitcher` ligado ao i18n
- `SectionDivider` (filete dourado), `GoldButton`, `Reveal` (fade-in on scroll com IntersectionObserver — sem libs pesadas)

## Página de Início (desenhada por completo)

1. **Hero full-screen** carvão com foto full-bleed da brasa/posta, título Cormorant em itálico *"A arte da brasa, a nobreza da raça"*, subtítulo curto, CTAs "Reservar por WhatsApp" (dourado) + "Ver a ementa" (ghost dourado), scroll indicator
2. **Faixa de especialidades** — 3 cards editoriais: Posta Arouquesa · Vitela no Forno · Bife à Casa
3. **Bloco "A Raça"** — split image+texto, teaser com citação serifada e link para `/raca`
4. **Garrafeira em destaque** — fundo escuro, foto de garrafas/cave, foco no Dão, CTA `/garrafeira`
5. **Sala Privada & Grupos** — bloco premium para eventos de empresa, CTA "Pedir orçamento"
6. **Sala / Ambiente** — galeria em mosaico assimétrico (3–4 imagens)
7. **Prova social** — logos de imprensa + citações de personalidades (placeholders)
8. **CTA final reservas** — bloco escuro com tel: e wa.me, horário resumido

## i18n PT/EN/ES (traduzido já)

- `react-i18next` + `i18next` + `i18next-browser-languagedetector`
- Recursos em `src/i18n/{pt,en,es}/common.json` cobrindo todo o conteúdo das páginas criadas
- `LanguageSwitcher` persiste em localStorage; default PT

## Imagens editoriais

Geração via `imagegen--generate_image` (qualidade `standard`), guardadas em `src/assets/`:

- hero brasa/posta (16:9, escuro, fumo, dourado)
- 3 especialidades (1:1, plating fine-dining)
- raça (vaca Arouquesa na serra, luz dourada)
- garrafeira (cave/garrafas, low-key)
- sala privada (mesa posta, ambiente reservado)
- 4 ambiente/sala
- og:image (16:9) para Início

Todas com `loading="lazy"` (exceto hero), `alt` descritivo, `width`/`height` definidos.

## SEO & acessibilidade

- JSON-LD `Restaurant` no `__root.tsx` (nome, morada Repeses 3500-680 Viseu, tel +351 232 416 174, email geral@casaarouquesa.pt, `openingHoursSpecification` completo, priceRange `€€€`, servesCuisine "Portuguese, Arouquesa beef DOP", geo aproximada de Repeses)
- `sitemap.xml` server route + `robots.txt` (Allow all)
- Contraste AA verificado (creme sobre carvão, dourado para realces não-texto), foco visível (`focus-visible:ring` dourado), navegação por teclado, `aria-label` em ícones, `<main>` único por rota
- Imagens responsivas, sem layout shift

## Conteúdos reais embutidos

- Morada, telefone +351 232 416 174, email geral@casaarouquesa.pt
- Horário: Seg–Sex 12:15–15:00 / 19:15–22:00 · Sáb 12:15–15:00 / 19:15–22:30 · Dom encerrado
- WhatsApp: link `wa.me/351000000000` com nota visível "[substituir nº]"
- Especialidades: Bife Arouquês à Casa, Vitela Arouquesa Assada no Forno, Posta Arouquesa, Pires de Alheira
- Mensagem-chave: *"A melhor carne é Arouquesa."*

## Páginas secundárias (layout base, prontas a evoluir)

Cada uma com hero serifado, secções placeholder coerentes com a identidade, head() próprio e conteúdo introdutório real (morada, horário, contactos onde aplicável). Sem lorem ipsum genérico — textos curtos em PT/EN/ES alinhados com o tom.

## Stack & ficheiros principais

- React 19 + TanStack Start (já no template) + Tailwind v4 (`@theme` em `src/styles.css`)
- Novos pacotes: `react-i18next`, `i18next`, `i18next-browser-languagedetector`
- Sem backend nesta fase (sem Lovable Cloud) — reservas só por WhatsApp/telefone, como pedido
- Newsletter no footer: input visual + checkbox RGPD; submit desactivado com tooltip "em breve" (ou ligamos a Cloud quando pedires)

Pronto a implementar quando aprovares.