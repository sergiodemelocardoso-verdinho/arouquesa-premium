# Ajustes pendentes (pontos 6 e 7)

Os pontos 2, 3, 4 e 5 já estão implementados — verificado no código. O ponto 8 (fotos reais) fica para depois, mantendo as imagens atuais como placeholder.

## 6. Garrafeira — destaque Riedel & Spiegelau

**Home (`src/routes/index.tsx`, secção Garrafeira):** acrescentar, abaixo do parágrafo principal, uma linha curta:

> "Servido em copos **Riedel** & **Spiegelau**." (marcas a dourado, em itálico display)

**Página `/garrafeira` (`src/routes/garrafeira.tsx`):** adicionar bloco equivalente abaixo do corpo de texto, com a mesma frase e tratamento dourado das marcas.

**i18n (`pt.ts`, `en.ts`, `es.ts`):** nova chave `cellar.glassware` com a frase, com placeholders para destacar as marcas a dourado.

## 7. Ambiente — esplanada coberta + salas com legendas

Reescrever a secção "AMBIENTE MOSAICO" em `src/routes/index.tsx`:

- Manter o cabeçalho (eyebrow + título + lede).
- Substituir o mosaico genérico por **três cards com legenda sobreposta**, cada um numa figura com gradiente inferior e título em serifa + descrição curta:
  1. **Esplanada coberta** — "Aberta no verão, fechada no inverno." (card grande, destaque — ocupa coluna principal ou primeira linha em destaque). Usa `sala1` como placeholder.
  2. **Sala premium** — "Ambiente recolhido, mesa posta com latão." Usa `sala2`.
  3. **Sala de eventos & grupos** — "Para celebrações, empresas e grupos." Usa `sala3`.
- Layout: grid 12 colunas — esplanada `col-span-12 lg:col-span-8 row-span-2` (grande), sala premium `lg:col-span-4`, sala eventos `lg:col-span-4`. Em mobile empilha.
- Legenda: bloco absoluto bottom-left com `bg-gradient-to-t from-charcoal/90`, título `font-display` e descrição em `text-bone/75`.

**i18n:** adicionar `ambience.cards.esplanada`, `ambience.cards.premium`, `ambience.cards.eventos` (cada um com `title` + `caption`) nos três locales.

## Ficheiros tocados

- `src/routes/index.tsx` — secções Garrafeira e Ambiente
- `src/routes/garrafeira.tsx` — frase Riedel & Spiegelau
- `src/i18n/locales/pt.ts`, `en.ts`, `es.ts` — novas chaves `cellar.glassware` e `ambience.cards.*`

## Fora deste plano

- Substituição por fotos reais (ponto 8) — quando forem fornecidas.
