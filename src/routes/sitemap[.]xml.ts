import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: replace with project URL once a custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/raca", changefreq: "monthly", priority: "0.8" },
          { path: "/casa", changefreq: "monthly", priority: "0.7" },
          { path: "/ementa", changefreq: "weekly", priority: "0.9" },
          { path: "/garrafeira", changefreq: "monthly", priority: "0.8" },
          { path: "/sala-privada", changefreq: "monthly", priority: "0.8" },
          { path: "/galeria", changefreq: "monthly", priority: "0.6" },
          { path: "/eventos", changefreq: "weekly", priority: "0.7" },
          { path: "/imprensa", changefreq: "monthly", priority: "0.5" },
          { path: "/reservas", changefreq: "yearly", priority: "0.9" },
          { path: "/contactos", changefreq: "yearly", priority: "0.8" },
          { path: "/privacidade", changefreq: "yearly", priority: "0.2" },
          { path: "/acessibilidade", changefreq: "yearly", priority: "0.2" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
